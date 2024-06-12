import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContador } from '../../service/userContextTimer.jsx';
import quarto02 from "../../assets/quartoBonas.png"
import style from "./quarto02.module.css"
import home from "../../assets/home.gif"
import note from "../../assets/quartoBonas/notebook.png"
import diario from "../../assets/quartoBonas/diario.png"
import canivete from "../../assets/quartoBonas/canivete.png"
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp.jsx'
import BonasNormal from '../../assets/dialogo/BonasNormal.png'
import BonasChateado from '../../assets/dialogo/BonasChateado.png'
import BonasSerio from '../../assets/dialogo/BonasSerio.png'
import relogio from '../../assets/contagemTempo.gif'

export const QuartoBonas = () => {
  const [openPopupLapTop ,setOpenPopupLapTop] = useState(false)
  const [openPopupLivro ,setOpenPopupLivro] = useState(false)
  const [openPopupCanivete ,setOpenPopupCanivete] = useState(false)
  const [showBonasNormal, setShowBonasNormal] = useState(false);
  const [showBonasSerio, setShowBonasSerio] = useState(false);
  const [showBonasChateado, setShowBonasChateado] = useState(false);
  const navigate = useNavigate();
  const { tempoTotal } = useContador();
  const minutos = Math.floor(tempoTotal / 60);
  const segundos = tempoTotal % 60;

  function Home() {
    navigate('../corredor');
  }

  useEffect(() => {
    let timer;
    if (openPopupCanivete) {
      timer = setTimeout(() => {
        setShowBonasNormal(true);
      }, 2000);
    } else {
      setShowBonasNormal(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupCanivete]);

  useEffect(() => {
    let timer;
    if (openPopupLivro) {
      timer = setTimeout(() => {
        setShowBonasSerio(true);
      }, 2000);
    } else {
      setShowBonasSerio(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupLivro]);

  useEffect(() => {
    let timer;
    if (openPopupLapTop) {
      timer = setTimeout(() => {
        setShowBonasChateado(true);
      }, 2000);
    } else {
      setShowBonasChateado(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupLapTop]);


  return <div>
      <div>
        <img className={style.quarto02} src={quarto02} alt="Quarto do Bonas" />
      </div>
      <p className={style.tituloLocal}>Quarto do Bonas</p>
      <Button className={style.home} onClick={Home}/>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
      <Button className={style.notebook} onClick={() => setOpenPopupLapTop(!openPopupLapTop)}/>
      <Button className={style.diario} onClick={() => setOpenPopupLivro(!openPopupLivro)}/>
      <Button className={style.canivete} onClick={() => setOpenPopupCanivete(!openPopupCanivete)}/>

      <PopUp  style={{position:"absolute", top: 200, left: 700, width: 250}}
        open={openPopupLapTop}
        onClose={() => setOpenPopupLapTop(false)}
        title="Notebook Quebrado"
      >
        <img src={note} alt="Notebook" />
      <p>Não está ligando. O teclado está com água.</p>
      </PopUp>

      <PopUp  style={{position:"absolute", top: 200, left: 400, width: 250}}
        open={openPopupLivro}
        onClose={() => setOpenPopupLivro(false)}
        title="Diário Pessoal"
      >
        <img src={diario} alt="Diário" />
        <p>"Que ódio que me dá quando isso acontece!"... <br /> "Será que foi necessário?"</p>
      </PopUp>

      <PopUp  style={{position:"absolute", top: 200, right: 1, width: 250}}
        open={openPopupCanivete}
        onClose={() => setOpenPopupCanivete(false)}
        title="Canivete Suiço"
      >
        <img src={canivete} alt="Canivete" />
        <p>Um canivete aparentemente novo, poucas marcas de uso. Parece ter uma linha presa na lâmina.</p>
      </PopUp>

      {showBonasNormal && (
        <div>
          <img className={style.bonas} src={BonasNormal} alt="Bonas Normal" />
          <p className={style.bonasLivro}>Ele é novinho. Emprestei para a Yuka ontem.
          Ela parecia estar muito irritada!</p>
        </div>
      )}

      {showBonasSerio && (
        <div>
          <img className={style.bonas} src={BonasSerio} alt="" />
          <p className={style.bonasLivro}>PORQUE ESTÁ VENDO ISSO??</p>
        </div>
      )}

      {showBonasChateado && (
        <div>
          <img className={style.bonas} src={BonasChateado} alt="" />
          <p className={style.bonasLivro}>Três dias atrás, Fred simplesmente pegou ele e me devolveu assim. <br /> Desde então, estou indo até a empresa trabalhar, já que ele quebrou meu notebook de trabalho. <br /> Eu ainda estou puto com essa situação, estou todo atrasado!</p>
        </div>
      )}
      
      <div className={style.contadorRegressivo}>
        <img src={relogio} alt="" />
        <div>
          <span>{minutos.toString().padStart(2, "0")}</span>
          <span>:</span>
          <span>{segundos.toString().padStart(2, "0")}</span>
        </div>
      </div>


  </div>
};