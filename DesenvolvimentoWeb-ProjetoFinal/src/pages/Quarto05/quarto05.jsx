import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContador } from '../../service/userContextTimer.jsx';
import quarto05 from "../../assets/quartoMiguelito.png"
import style from "./quarto05.module.css"
import home from "../../assets/home.gif"
import sangue from "../../assets/quartoMiguel/sangue.png"
import foice from "../../assets/quartoMiguel/foice.png"
import crime from "../../assets/quartoMiguel/crime.png"
import Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp.jsx'
import MiguNormal from '../../assets/dialogo/MiguNormal.png'
import MiguSerio from '../../assets/dialogo/MiguSerio.png'
import MiguPreocupado from '../../assets/dialogo/MiguPreocupado.png'
import relogio from '../../assets/contagemTempo.gif'


export const QuartoMiguelito = () => {
  const navigate = useNavigate();
  const [openPopupSangue ,setOpenPopupSangue] = useState(false)
  const [openPopupEvidencia ,setOpenPopupEvidencia] = useState(false)
  const [openPopupComputador ,setOpenPopupComputador] = useState(false)
  const [showMiguNormal, setShowMiguNormal] = useState(false);
  const [showMiguSerio, setShowMiguSerio] = useState(false);
  const [showMiguPreocupado, setShowMiguPreocupado] = useState(false);
  const { tempoTotal } = useContador();
  const minutos = Math.floor(tempoTotal / 60);
  const segundos = tempoTotal % 60;
  

  useEffect(() => {
    let timer;
    if (openPopupSangue) {
      timer = setTimeout(() => {
        setShowMiguNormal(true);
      }, 2000);
    } else {
      setShowMiguNormal(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupSangue]);

  useEffect(() => {
    let timer;
    if (openPopupComputador) {
      timer = setTimeout(() => {
        setShowMiguSerio(true);
      }, 2000);
    } else {
      setShowMiguSerio(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupComputador]);

  useEffect(() => {
    let timer;
    if (openPopupEvidencia) {
      timer = setTimeout(() => {
        setShowMiguPreocupado(true);
      }, 2000);
    } else {
      setShowMiguPreocupado(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupEvidencia]);

  function Home() {
    navigate('../corredor');
  }

  return <div>
    <img className={style.quarto05} src={quarto05} alt="Quarto do Miguelito" />
    <Button className={style.home} onClick={Home}/>
      <p className={style.tituloLocal}>Quarto do Miguelito</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <Button className={style.brilho} onClick={() => setOpenPopupEvidencia(!openPopupEvidencia)}/>
    <Button className={style.monitor} onClick={() => setOpenPopupComputador(!openPopupComputador)}/>
    <Button className={style.sangue} onClick={() => setOpenPopupSangue(!openPopupSangue)}/>

    <PopUp  style={{position:"absolute", top: 200, left: 380, width:250}}
        open={openPopupSangue}
        onClose={() => setOpenPopupSangue(false)}
        title="Sangue no Travesseiro"
      >
        <img src={sangue} alt="sangue em um travesseiro" />
      <p>O travesseiro e parte do edredom estão com manchas de sangue, o que aconteceu?</p>
    </PopUp>

    <PopUp  style={{position:"absolute", top: 200, left: 800, width:250}}
        open={openPopupEvidencia}
        onClose={() => setOpenPopupEvidencia(false)}
        title="Foice"
      >
        <img src={foice} alt="foice de mão" />
      <p>Ela está com cheiro de sabão.</p>
    </PopUp>
    
    <PopUp  style={{position:"absolute", top: 200, right: 100, width:250}}
        open={openPopupComputador}
        onClose={() => setOpenPopupComputador(false)}
        title="Computador"
      >
        <img src={crime} alt="Computador" />
      <p>Está aberto em um site de resenhas de anime... <br />
      ...parece que o Fred gostava de anime...</p>
    </PopUp>

    {showMiguNormal && (
        <div>
          <img className={style.miguelito} src={MiguNormal} alt="Bonas Normal" />
          <p className={style.miguel}>Meu nariz sangrou enquanto dormia, pode conferir o DNA esse sangue é meu,
          A Yuka até me ajudou!
          </p>
        </div>
      )}
    {showMiguSerio && (
        <div>
          <img className={style.miguelito} src={MiguSerio} alt="Miguel Serio" />
          <p className={style.miguel}><strong>ESSA CONTA DO FRED DEVERIA SER CONSIDERADA CRIMINOSA....</strong>
          </p>
        </div>
      )}

      {showMiguPreocupado && (
        <div>
          <img className={style.miguelito} src={MiguPreocupado} alt="Miguel Preocupado" />
          <p className={style.miguel}>O que é isso? <br />  sei por que ela está aí! Deve ser algo do Alex.
          </p>
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