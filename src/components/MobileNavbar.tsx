import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

import { AlignJustify } from "lucide-react";
import { Link } from "react-scroll";
import Socials from "./Socials";

const MobileNavbar = () => {
  const path = usePathname();

  const links = [
    { path: "/", name: "Início", scrolled: "herosection" },
    { path: "/convenios", name: "Convênios", scrolled: "partners" },
    { path: "/servicos", name: "Serviços", scrolled: "services" },
    { path: "/sobre-nos", name: "Sobre", scrolled: "about" },
    { path: "/contato", name: "Contatos", scrolled: "footer" },
  ];

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify size={36} className="text-primary" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-8">
          <SheetHeader>
            <SheetTitle className="flex justify-center">
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-2">
            {links.map((item, index) => (
              <Link
                to={item.scrolled}
                smooth={true}
                duration={1500}
                className={`cursor-pointer hover:text-primary ${
                  path === item.path
                    ? "text-primary font-semibold"
                    : "text-secondary"
                } `}
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Socials />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
