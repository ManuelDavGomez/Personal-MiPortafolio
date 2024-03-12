import "./contact.css";
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

const contact = () => {
  return (
    <>
      <div id="contactame"></div>
      <article className="contact_container_general">
        <div className="contain">
          <div className="wrapper">
            <div className="form">
              <h2 className="form-headline">Contactame</h2>
              <form
                id="submit-form"
                action="https://formspree.io/f/xpzgdnga"
                method="POST"
              >
                <p>
                  <input
                    autoComplete="off"
                    id="name"
                    className="form-input"
                    type="text"
                    name="name"
                    required
                    placeholder="Nombre"
                  />
                  <small className="name-error"></small>
                </p>
                <p>
                  <input
                    autoComplete="off"
                    id="email"
                    className="form-input"
                    type="email"
                    name="email"
                    required
                    placeholder="Correo"
                  />
                  <small className="name-error"></small>
                </p>

                <p className="full-width">
                  <textarea
                    minLength="20"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Mensaje para enviar"
                    required
                    name="textarea"
                    style={{ resize: "vertical" }}
                  ></textarea>
                  <small></small>
                </p>
                <p className="full-width">
                  <input
                    autoComplete="off"
                    type="submit"
                    className="submit-btn"
                    value="Enviar"
                  />
                </p>
              </form>
            </div>

            <div className="contacts contact-wrapper">
              <ul>
                <span className="hightlight-contact-info">
                  <li>
                    <a href="https://co.linkedin.com/in/manuel-david" target="_blank">
                      <FaLinkedin
                        aria-hidden="true"
                        size={30}
                        color="#0e76a8"
                      />
                      <span className="highlight-text">Manuel-david</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ManuelDavGomez" target="_blank">
                      <FaGithub aria-hidden="true" size={30} color="white" />
                      <span className="highlight-text">ManuelDavGomez</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UC3EQTH1u8O5TstR_v9VhWEQ" target="_blank">
                      <FaYoutube aria-hidden="true" size={30} color="#FF0000" />
                      <span className="highlight-text">FsScripts</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@fsscripts" target="_blank">
                      <FaTiktok aria-hidden="true" size={30} color="white" />
                      <span className="highlight-text">@fsscripts</span>
                    </a>
                  </li>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default contact;
