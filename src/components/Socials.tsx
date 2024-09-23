import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-4 justify-center">
      <Link href="https://www.instagram.com/os5produtos" target="_blank">
        <FaInstagram
          className="h-8 w-8 text-primary transition-colors hover:text-[#6f3afa]"
          aria-label="Instagram"
          role="link"
        />
      </Link>
      <Link href="https://www.instagram.com/os5produtos" target="_blank">
        <FaFacebook
          className="h-8 w-8 text-primary transition-colors hover:text-[#6f3afa]"
          aria-label="Instagram"
          role="link"
        />
      </Link>
      <Link href="https://www.instagram.com/os5produtos" target="_blank">
        <FaWhatsapp
          className="h-8 w-8 text-primary transition-colors hover:text-[#6f3afa]"
          aria-label="Instagram"
          role="link"
        />
      </Link>
    </div>
  );
};

export default Socials;
