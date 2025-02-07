"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import { FadeLoader } from "react-spinners";
import Inicio from "./pages/inicio/inicio";
import Skills from "./pages/skills/skills";
import Projects from "../app/pages/projects/projects.jsx";
import Contact from "./pages/contact/contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <main>
      {loading ? (
        <article className="spinner-container">
          <FadeLoader color="blue" loading={loading} size={200} />
        </article>
      ) : (
        <>
          <Inicio />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </main>
  );
}
