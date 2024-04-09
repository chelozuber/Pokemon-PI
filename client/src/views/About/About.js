import style from "./About.module.css";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const About = () => {
  return (
    <div className={style.main}>
      <p>
        Buenas, me presento, soy Marcelo Zuber. Este proyecto con temática
        Pokémon, lo cree para un proyecto individual de Soy Henry. Primero que
        nada, agradezco a la comunidad por ayudarme, dar consejos y por las
        oportunidades para seguir aprendiendo más cosas. Este proyecto cuenta
        con varias tecnologías, de las más importantes son:
      </p>
      <p>
        Un breve resumen de este proyecto sería que se basa en la posibilidad de
        buscar pokemones que existan, filtrar por lo que uno desee y también
        poder crear, modificar y eliminar pokemones.
      </p>
      <span>
        Muchas gracias por dar el tiempo de leer y ver, espero que lo disfruten
        como yo lo hice.
      </span>
      <div className={style.containicon}>
        <a
          href="https://www.linkedin.com/in/marcelo-zuber-a756a7213/"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.icon} src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/chelozuber"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.icon} src={github} alt="github" />
        </a>
      </div>
    </div>
  );
};
export default About;
