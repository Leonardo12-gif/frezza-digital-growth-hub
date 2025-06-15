
import { Instagram } from "lucide-react";

const clientes = [
  {
    nome: "Jhonne Tatuagens",
    user: "@jhonnetatuagens",
    url: "https://www.instagram.com/jhonnetattuagens/",
    desc: "Estúdio de tatuagem com +60 mil seguidores.",
    img: "/lovable-uploads/e08283f5-4be1-4ae5-9241-475b80369b30.png"
  },
  {
    nome: "Allpfit Sorocaba",
    user: "@allpfit.sorocaba",
    url: "https://instagram.com/allpfit.sorocaba",
    desc: "Rede de academias com +200 unidades no Brasil.",
    img: "/lovable-uploads/46160644-af2b-4687-bf1e-2fd232bf96f4.png"
  },
  {
    nome: "Alphatruck",
    user: "@alphatruck",
    url: "https://www.instagram.com/alphatruckofc/",
    desc: "Oficina mecânica para caminhões pesados.",
    img: "/lovable-uploads/6c16c0b7-e20b-4db3-9bb0-5cbb958765b7.png"
  },
  {
    nome: "Gabriela Garcia Academy",
    user: "@gabrielagarcia.academy",
    url: "https://instagram.com/gabrielagarcia.academy",
    desc: "Clínica estética com +220 mil seguidores.",
    img: "/lovable-uploads/1d34533a-7917-426b-a4d8-31b5055c92e4.png"
  }
];

const Clientes = () => (
  <section className="py-20 px-2 bg-black">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 font-['Montserrat']">
        Clientes que nós trabalhamos.
      </h2>
      <p className="text-center text-yellow-400 text-base md:text-lg mb-12 select-none font-medium">
        ⚠️ Clique no <span className="inline-block px-1 rounded font-mono text-black bg-yellow-300">@</span> para acessar o perfil diretamente!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {clientes.map(({ nome, user, url, desc, img }) => (
          <div
            key={user}
            className="flex flex-col items-center justify-between bg-[#441a1a] rounded-2xl shadow-md shadow-[#ea384c22] px-7 pt-8 pb-6 relative h-full min-h-[360px]
              transition-transform hover:-translate-y-1 duration-200"
            style={{
              boxShadow: "0 6px 30px 0 #23070733, 0 0px 1.5px 0 #ea384c22",
            }}
          >
            {/* Avatar */}
            <div className="w-20 h-20 mb-3 rounded-full border-4 border-frezza-red overflow-hidden bg-white flex items-center justify-center">
              <img
                src={img}
                alt={nome}
                className="object-cover w-full h-full"
                draggable={false}
                loading="lazy"
              />
            </div>
            {/* Nome com fundo suavizado */}
            <div className="flex items-center justify-center mb-2">
              <span className="px-4 py-1 rounded-lg bg-[#331a1a] text-white text-lg md:text-xl font-bold font-['Montserrat'] shadow-sm">
                {nome}
              </span>
            </div>
            {/* User Instagram com destaque */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-semibold text-yellow-300 text-base md:text-lg mb-2
                hover:text-frezza-red transition duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-frezza-red/80
                px-2 py-0.5 rounded cursor-pointer
                group
                "
              aria-label={`Ir para o Instagram de ${nome}`}
              tabIndex={0}
              style={{ outline: "none" }}
            >
              <span className="inline-flex items-center gap-1">
                {user}
                <span className="
                  hidden group-hover:inline align-middle ml-1 text-[13px] font-normal text-frezza-red duration-150
                ">
                  (Visitar Instagram)
                </span>
              </span>
            </a>
            {/* Descrição */}
            <div className="text-white text-[15px] text-center mb-3 leading-snug max-w-xs mx-auto">{desc}</div>
            {/* Sinalização extra no Instagram */}
            <div className="flex-1 flex flex-col items-center justify-end w-full">
              <span className="text-xs text-neutral-400 mb-2 mt-auto opacity-80">
                Clique para visitar o Instagram
              </span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full duration-200 
                  bg-[#1a1a1a] hover:bg-frezza-red/80 transition-all shadow-sm border border-[#2e1010] hover:border-frezza-red"
                aria-label={`Abrir Instagram de ${nome}`}
                tabIndex={0}
              >
                <Instagram className="text-white group-hover:text-frezza-red transition-colors" size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clientes;
