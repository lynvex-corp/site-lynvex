import Image from "next/image";

const clients = [
  { name: "Odonto Company", logo: "/logos/OdontoCompany.avif" },
  { name: "AT Real Estate", logo: "/logos/AT-RealEstate.png" },
  { name: "Auto Escola Mesquita", logo: "/logos/AutoEscolaMesquita.png" },
  { name: "Resgate Motos", logo: "/logos/ResgateMotos.png" },
];

const allClients = Array(6).fill(clients).flat() as typeof clients;

export default function Clients() {
  return (
    <section className="py-14 bg-dark border-y border-brand/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <p className="text-center text-muted text-xs font-semibold uppercase tracking-widest">
          Empresas que confiam na LYNVEX
        </p>
      </div>

      {/* Marquee track — full-width, no px constraint */}
      <div className="relative">
        <div className="flex marquee-track" style={{ width: "max-content" }}>
          {allClients.map((client, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center bg-dark-2 border border-brand/10 rounded-xl px-4 py-3 mr-6 w-38 h-18"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={48}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-dark to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-dark to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
