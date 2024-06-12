import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../../assets/quemSomosBackground.mp4'
import style from "./quemSomos.module.css";
import bianco from "../../assets/quemSomos/desenvolvedores/iconb.png";
import yuka from "../../assets/quemSomos/desenvolvedores/icony.png";
import miguelito from "../../assets/quemSomos/desenvolvedores/iconm.png";
import alexandre from "../../assets/quemSomos/desenvolvedores/icona.png";
import bonafe from "../../assets/quemSomos/desenvolvedores/iconbo.png";
import github from "../../assets/quemSomos/social/github.png";
import linkedin from "../../assets/quemSomos/social/linkedin.png";
import Voltar from "../../assets/IconVolta.png";
import Button from '../../components/button';


export const QuemSomos = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('../');
  };

  return <div>
    <div className={style.mainContainer}>
      <video className={style.backgroundVideo} src={backgroundVideo} loop autoPlay muted></video>
        <div className={style.containerIcon}>
          <a href="#" onClick={handleHome}>
            <img className={style.backIcon} src={Voltar} alt="icon back" />
          </a>
        </div>
      <div className={style.containerInterno}>
        <div className={style.textoContainer}>
          <h1>Conheça os desenvolvedores por trás de A República.</h1>
        </div>
        <div className={style.imagemContainer}>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={alexandre} alt="alex" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/yuka" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/yuka" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
            <div className={style.nomeContainer}>
              <p>Alexandre Silveira</p>
            </div>
          </div>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={yuka} alt="yuka" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/yuka" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/yuka" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
            <div className={style.nomeContainer}>
              <p>Ana Yukari</p>
            </div>
          </div>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={bianco} alt="bianco" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/yuka" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/yuka" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
            <div className={style.nomeContainer}>
              <p>Bianco Lorencini</p>
            </div>
          </div>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={bonafe} alt="bonafe" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/lucas-bonafé-2b8041290/" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/lucasbonafe1" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
            <div className={style.nomeContainer}>
              <p>Lucas Bonafé</p>
            </div>
          </div>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={miguelito} alt="miguelito" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/miguel-caldas-0359802a5/ " target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Biguelisto" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
            <div className={style.nomeContainer}>
              <p>Miguel Caldas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}