import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();

  const links = [
    { path: "/", name: "Início" },
    { path: "/contact", name: "Contatos" },
    { path: "/sobre-nos", name: "Sobre" },
  ];

  return (
    <div className="hidden lg:flex gap-8">
      {links.map((item, index) => (
        <button
          className={`cursor-pointer hover:text-primary ${
            path === item.path ? "text-primary font-semibold" : "text-secondary"
          } `}
          key={index}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
