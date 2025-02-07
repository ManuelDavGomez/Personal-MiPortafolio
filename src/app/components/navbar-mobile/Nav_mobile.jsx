import "./nav_mobile.css";
import { BiHomeAlt, BiAtom, BiPlanet, BiConversation } from "react-icons/bi";
import Logo from "@/../public/img/logo.avif";
import Image from "next/image";
import Link from "next/link";

const Nav_mobile = () => {
  return (
    <nav>
      <article className="container-barra">
        <section className="nav_item">
          <Link href="#mis-proyectos" scroll={true}>
            <BiAtom size={30} className="nav_icons" />
            <span className="icon_text">Proyectos</span>
          </Link>
        </section>
        <section className="nav_item">
          <Link href="#inicio" scroll={true}>
            <BiHomeAlt size={30} className="nav_icons" />
            <span className="icon_text">Inicio</span>
          </Link>
        </section>
        <section className="nav_item">
          <Image src={Logo} alt="Logo de la pagina" width={50} height={50} loading="lazy"></Image>
        </section>
        <section className="nav_item">
          <Link href="#mis-habilidades" scroll={true}>
            <BiPlanet size={30} className="nav_icons" />
            <span className="icon_text">Skills</span>
          </Link>
        </section>
        <section className="nav_item">
          <Link href="#contactame" scroll={true}>
            <BiConversation size={30} className="nav_icons" />
            <span className="icon_text">Contacto</span>
          </Link>
        </section>
      </article>
    </nav>
  );
};

export default Nav_mobile;
