import "./nav_pc.css";
import Image from "next/image";
import Link from "next/link";

const Nav_pc = () => {
  return (
    <nav className="navbar navbar-expand-sm" id="nav_bar">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#inicio" scroll={true}>
          <Image
            src="/img/logo.avif"
            alt="Logo de la pagina"
            width={40}
            height={40} 
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="#inicio" scroll={true}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#mis-habilidades" scroll={true}>
                Habilidades
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#mis-proyectos" scroll={true}>
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#contactame" scroll={true}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav_pc;
