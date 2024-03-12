import Link from "next/link";
import Image from "next/image";
import "./foot.css";
import { FaGithub, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

const Foot = () => {
  return (
    <footer>
      <section className="foot_container_general">
        <Image
          src="/img/logo.avif"
          alt="Logo de la pagina"
          width={60}
          height={60}
          loading="lazy"
        />

        <article className="foot_links_articles">
          <ul>
            <li>
              <Link href="#inicio">Inicio</Link>
            </li>
            <li>
              <Link href="#mis-habilidades">Habilidades</Link>
            </li>

            <li>
              <Link href="#mis-proyectos">Proyectos</Link>
            </li>
            <li>
              <Link href="#contactame">Contacto</Link>
            </li>
          </ul>
        </article>

        <article className="copy_container">
          <p className="copy_title">2023 All Rights Reserved.</p>

          <div className="copy_icons">
            <a href="https://github.com/ManuelDavGomez" target="_blank">
              <FaGithub aria-hidden="true" size={30} color="white" />
            </a>
            <a href="https://co.linkedin.com/in/manuel-david" target="_blank">
              <FaLinkedin aria-hidden="true" size={30} color="#0e76a8" />
            </a>
            <a href="https://www.youtube.com/channel/UC3EQTH1u8O5TstR_v9VhWEQ">
              <FaYoutube aria-hidden="true" size={30} color="#FF0000" />
            </a>
            <a href="https://www.tiktok.com/@fsscripts">
              <FaTiktok aria-hidden="true" size={30} color="white" />
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
};
export default Foot;
