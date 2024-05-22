import Carusel from "@/app/components/carousel/carousel";
import Carousel from "@/app/components/pers_carousel/carousel";
import styles from "./projects.module.css";

const projects = () => {
  return (
    <>
      <div id="mis-proyectos"></div>
      <section className={styles.projects_container}>
        <section className={styles.proyect_text}>
          <h2>
            Portafolio de <span> Clientes</span>
          </h2>
          <p>
            Te invito a explorar mi portafolio de trabajos para clientes, donde
            podrás encontrar una variedad de sitios diseñados con pasión y
            creatividad para mis usuarios. Descubre mi inspiración para tus
            propias ideas y proyectos. ¡Espero que disfrutes de mi trabajo!
          </p>
        </section>

        <section className={styles.carousel_container_general}>
          <Carusel />
        </section>
      </section>

      <section className={styles.projects_container}>
        <section className={styles.carousel_container_general}>
          <Carousel />
        </section>
        <section className={styles.proyect_text}>
          <h2>
            Portafolio de <span> Proyectos</span>
          </h2>
          <p>
            Bienvenido a mi portafolio de proyectos web personales. Aquí
            presento mis trabajos más destacados en desarrollo web. Cada
            proyecto demuestra mi habilidad para crear soluciones innovadoras y
            eficientes. Explora mi portafolio para conocer más sobre mi trabajo.
            ¡Gracias por tu visita!
          </p>
        </section>
      </section>
    </>
  );
};

export default projects;
