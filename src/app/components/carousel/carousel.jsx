import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Vision from "@/../public/img/vision.avif";
import Lilian from "@/../public/img/lilian.avif";
import Abogado from "@/../public/img/abogado.avif";
import Maxipan from "@/../public/img/maxipan.avif";
import CasaGaby from "../../../../public/img/eventos gaby.jpeg"
import Fundamigos from "@/../public/img/fundamigos.png";
import "./carousel.css";

function carousel() {
  return (
    <Carousel
      className="carousel_container"
      centerMode={true}
      interval={10000}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      showIndicators={false}
      centerSlidePercentage={90}
      showThumbs={false}
      showArrows={true}
    >
      <a href="https://casadeeventosgaby.netlify.app" target="_blank">
        <section className="carousel_items">
          <Image
            src={CasaGaby}
            alt="Pagina de casa de eventos gaby"
            width={100}
            height={100}
            loading="lazy"
          />
        </section>
      </a>
      <a href="https://vision4ry.netlify.app" target="_blank">
        <section className="carousel_items">
          <Image
            src={Vision}
            alt="Pagina de Vision4ry"
            width={100}
            height={100}
            loading="lazy"
          />
        </section>
      </a>
      <a href="https://lilianecheverry.netlify.app/" target="_blank">
        <section className="carousel_items">
          <Image
            src={Lilian}
            alt="Pagina de la candidata Lilian"
            width={100}
            height={100}
            loading="lazy"
          />
        </section>
      </a>
      <a href="https://bloodbath13579.netlify.app/" target="_blank">
        <section className="carousel_items">
          <Image
            src={Abogado}
            alt="Pagina de un abogado"
            width={100}
            height={100}
            loading="lazy"
          />
        </section>
      </a>
      <a href="https://maxipan.netlify.app/" target="_blank">
        <section className="carousel_items">
          <Image
            src={Maxipan}
            alt="Pagina de Panaderia Maxipan"
            width={100}
            height={100}
            loading="lazy"
          />
        </section>
      </a>

      <a href="https://fundaamigos.com/" target="_blank">
        <section className="carousel_items">
          <Image
            src={Fundamigos}
            alt="Pagina de fundacion Fundamigos"
            width={100}
            height={100}
            loading="lazy"
          />
        </section>
      </a>

      
    </Carousel>
  );
}

export default carousel;
