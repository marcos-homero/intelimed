import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

const Navbar = () => {
  const path = usePathname();

  const links = [
    { path: "/", name: "Início", scrolled: "herosection" },
    { path: "/convenios", name: "Convênios", scrolled: "partners" },
    { path: "/servicos", name: "Serviços", scrolled: "services" },
    { path: "/sobre-nos", name: "Sobre", scrolled: "about" },
    { path: "/contato", name: "Contatos", scrolled: "footer" },
  ];

  return (
    <div className="hidden lg:flex gap-4 xl:gap-6">
      {links.map((item, index) => (
        <Link
          to={item.scrolled}
          smooth={true}
          duration={1500}
          className={`cursor-pointer hover:text-primary ${
            path === item.path
              ? "text-primary font-semibold max-xl:text-sm"
              : "text-secondary max-xl:text-sm"
          } `}
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
