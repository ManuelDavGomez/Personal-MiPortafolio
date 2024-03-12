import styles from "./inicio.module.css";
import { GiSmartphone } from "react-icons/gi";
import { Typewriter } from "react-simple-typewriter";

const inicio = () => {
  return (
    <section className={styles.container_general}>
      <section className={styles.hero_container}>
        <section className={styles.hero_parallax}>
          <section className={styles.hero_parallax_content}>
            <h2>Te ofrezco</h2> <br />
            <h3>
              <Typewriter
                words={[
                  "Front End Developer",
                  "Full Stack Developer",
                  "Back End Developer",
                  "Responsive Web Design",
                  "Web Design",
                  "Optimization Web",
                  "Design UI",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h3>
          </section>
          <div id="inicio"></div>
        </section>
      </section>

      <section className={styles.texto_container}>
        <h1>
          Manuel David <span> Gomez Sanchez </span>
        </h1>

        <p className={styles.texto_subtext}>Medellin, Colombia</p>

        <section className={styles.inicio_containers}>
          <div className={styles.texto_tecnico}>
            <p>
              2 Año <span> Experiencia</span>
            </p>
            <hr className={styles.hr} />
            <p>
              21 <span>años </span>
            </p>
            <hr className={styles.hr} />
            <p>
              Titulo <span> Tecnico</span>
            </p>
          </div>
          <div className={styles.texto_about}>
            <p>
              He adquirido de manera autódidacta, conocimientos esenciales en el
              campo de la programación Full Stack con el fin
              de ser compentente en cada trabajo en el que colabore. Mi convicción es
              obtener habilidades tanto prácticas como teóricas que me permitan
              desempeñarme de manera profesional en este maravilloso mundo.
            </p>
            <button className={styles.btn}>
              <a
                href="https://api.whatsapp.com/send?phone=573142179656"
                target="_blank"
              >
                Contactame
                <GiSmartphone />
              </a>
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default inicio;
