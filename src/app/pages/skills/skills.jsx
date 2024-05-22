import styles from "./skills.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaYarn,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiAstro,
  SiReact,
  SiCssmodules,
  SiStyledcomponents,
  SiJquery,
  SiReactrouter,
  SiMysql,
  SiVisualstudiocode,
  SiNextdotjs,
  SiVite,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { DiNpm } from "react-icons/di";
import "@/../atropos/atropos.css";
import Atropos from "atropos/react";

const skills = () => {
  return (
    <>
      <div id="mis-habilidades"></div>
      <section className={styles.container_general}>
        <section className={styles.skills_container}>
          <h2>
            Mis <span> Habilidades </span>
          </h2>

          <section className={styles.skills_text}>
            <p>
              En este espacio, quiero compartir contigo un vistazo a mis
              conocimientos en lenguajes de programación, herramientas de
              trabajo y otras competencias relacionadas. A lo largo de mi
              trayecto en el desarrollo web, he adquirido experiencia en estas
              áreas. Te invito a explorar y descubrir más sobre mi destreza y
              pasión por la tecnología.
            </p>
          </section>

          <section className={styles.skills_icons}>
            <Atropos activeOffset={40} style={{ width: "100%" }} shadow={false}>
              <article className={styles.front_icons}>
                <h3>
                  Front <span>End</span>
                </h3>
                <section className={styles.front_card} data-atropos-offset="4">
                  <AiFillHtml5 size={50} color="orange" title="Html5" />
                  <FaCss3Alt size={50} color="#0870C2" title="Css3" />
                  <SiJavascript size={40} color="#f1dc55" title="Javascript" />
                  <SiAstro size={50} color="white" title="Astro" />
                  <SiTailwindcss
                    size={50}
                    color="#3EBFF8"
                    title="TailwindCSS"
                  />
                  <SiReact size={50} color="#65DAFA" title="React" />
                  <SiCssmodules size={50} color="white" title="Css Modules" />
                  <FaBootstrap size={50} color="#8818FC" title="Bootstrap" />
                  <SiNextdotjs
                    size={45}
                    color="#7e7e7e"
                    title="Next js"
                    className="custom"
                  />
                  <SiStyledcomponents
                    size={55}
                    color="#AE578D"
                    title="Styled Components"
                  />
                  <FaPython size={50} color="#3D77A9" title="Python" />
                  <SiJquery size={50} color="#0E6DAE" title="Jquery" />
                  <SiReactrouter size={50} color="gray" title="React Router" />
                </section>
              </article>
            </Atropos>

            <Atropos activeOffset={40} style={{ width: "100%" }} shadow={false}>
              <article className={styles.front_icons}>
                <h3>
                  To<span>ols</span>
                </h3>

                <section className={styles.front_card} data-atropos-offset="4">
                  <FaGitAlt size={50} color="#E94E31" title="Git" />
                  <FaGithub size={40} color="gray" title="Github" />
                  <DiNpm size={50} color="red" title="Npm" className="custom" />
                  <FaYarn size={50} color="#348BB3" title="Yarn" />
                  <FaFigma size={50} color="purple" title="Figma" />
                  <SiVite
                    size={50}
                    color="#896DF6"
                    title="Vite"
                    className="custom"
                  />
                  <BiLogoNetlify size={50} color="#4C9BC1" title="Netlify" />
                  <SiVercel size={50} color="white" title="Vercel" />
                  <SiVisualstudiocode
                    size={40}
                    color="#2C7BB3"
                    title="Vs code"
                  />
                </section>
              </article>
            </Atropos>

            <Atropos activeOffset={40} style={{ width: "100%" }} shadow={false}>
              <article className={styles.front_icons}>
                <h3>
                  Back<span> End</span>
                </h3>

                <section className={styles.front_card} data-atropos-offset="4">
                  <SiMysql size={50} color="#DA8512" title="Mysql" />
                  <FaNodeJs size={50} color="#509A43" title="Node js" />
                  <SiExpress size={50} color="gray" title="Express" />
                  <SiMongodb size={50} color="#02543F" title="Mongodb" />
                </section>
              </article>
            </Atropos>
          </section>
        </section>
      </section>
    </>
  );
};

export default skills;
