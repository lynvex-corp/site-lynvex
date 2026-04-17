"use client";

import { useState, FormEvent } from "react";

const serviceOptions = [
  "Selecione um serviço",
  "Sistema Web / SaaS",
  "Aplicativo Mobile",
  "Automação / Integração",
  "CRM Personalizado",
  "Landing Page / Portal",
  "Consultoria Técnica",
  "Outro",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "Selecione um serviço",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Erro ao enviar. Tente novamente.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "Selecione um serviço", message: "" });
    } catch {
      setErrorMsg("Não foi possível conectar ao servidor. Tente novamente.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-dark-3 border border-brand/15 hover:border-brand/30 focus:border-brand focus:outline-none rounded-xl px-4 py-3 text-light text-sm placeholder-muted transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-light text-xs font-medium">
            Nome completo <span className="text-brand">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-light text-xs font-medium">
            E-mail <span className="text-brand">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-light text-xs font-medium">
            WhatsApp / Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-light text-xs font-medium">
            Tipo de projeto
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-light text-xs font-medium">
          Conta pra gente sobre seu projeto{" "}
          <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Descreva sua ideia, o problema que quer resolver ou as funcionalidades que imagina..."
          value={form.message}
          onChange={handleChange}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
          {errorMsg}
        </div>
      )}

      {/* Success message */}
      {status === "success" && (
        <div className="bg-accent/10 border border-accent/30 text-accent text-sm px-4 py-3 rounded-xl flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Mensagem enviada! Retornaremos em até 24h. 🚀
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 glow-brand hover:scale-[1.02] disabled:hover:scale-100 text-base"
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : status === "success" ? (
          "Mensagem enviada!"
        ) : (
          <>
            Enviar mensagem
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>

      <p className="text-muted text-xs text-center">
        Ao enviar, você concorda com nossa política de privacidade. Seus dados
        não serão compartilhados com terceiros.
      </p>
    </form>
  );
}
