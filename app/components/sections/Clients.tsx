const clients = [
  { name: "Gabriel Lemos", segment: "Personal Trainer" },
  { name: "Danilo Reis", segment: "Comercial / CRM" },
  { name: "Davi Tavares", segment: "Imobiliária" },
  { name: "Cliente A", segment: "E-commerce" },
  { name: "Cliente B", segment: "Saúde & Bem-estar" },
  { name: "Cliente C", segment: "Educação" },
];

// Duplicate list for seamless infinite loop
const allClients = [...clients, ...clients, ...clients];

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
        <div
          className="flex gap-6 marquee-track"
          style={{ width: "max-content" }}
        >
          {allClients.map((client, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center gap-3 bg-dark-2 border border-brand/10 rounded-xl px-5 py-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
                <span className="text-brand font-display font-bold text-sm">
                  {client.name[0]}
                </span>
              </div>
              <div>
                <p className="text-light text-sm font-semibold font-display whitespace-nowrap">
                  {client.name}
                </p>
                <p className="text-muted text-xs whitespace-nowrap">{client.segment}</p>
              </div>
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
