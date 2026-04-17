import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter: max 3 submissions per IP per 10 minutes.
// Note: resets on server restart. For multi-instance deployments,
// replace with a shared store (e.g. Upstash Redis).
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    // In production: integrate with email service (Resend, SendGrid, etc.)
    // or Supabase table insert here.
    // For now, we log and return success.
    console.log("[Contact Form]", { name, email, phone, service, message, receivedAt: new Date().toISOString() });

    return NextResponse.json(
      { success: true, message: "Mensagem recebida! Entraremos em contato em breve." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro interno. Tente novamente em alguns instantes." },
      { status: 500 }
    );
  }
}
