import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Route from "@/../public/img/routesthenics.avif";
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
      <a href="https://routesthenics.netlify.app" target="_blank">
        <section className="carousel_items">
          <Image
            src={Route}
            alt="Pagina de Routesthenics"
            width={100}
            height={100}
            loading="eager"
          />
        </section>
      </a>
      
    </Carousel>
  );
}

export default carousel;
