import { useContador } from '../../service/userContextTimer.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import crime from "../../assets/cenaCrime.png"
import style from "./crime.module.css"
import home from "../../assets/home.gif"
import corte from "../../assets/cenaCrime/corte.png"
import porta from "../../assets/cenaCrime/porta.png"
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp.jsx'
import relogio from '../../assets/contagemTempo.gif'

export const PortaCrime = () => {
  const navigate = useNavigate();
  const [openPopupPorta ,setOpenPopupPorta] = useState(false)
  const [openPopupFerida ,setOpenPopupFerida] = useState(false)
  const { tempoTotal } = useContador();
  const minutos = Math.floor(tempoTotal / 60);
  const segundos = tempoTotal % 60;

  function Home() {
    navigate('../corredor');
  }

  return <div>
      <img className={style.crime} src={crime} alt="cena do crime" />
      <Button className={style.home} onClick={Home}/>
      <p className={style.tituloLocal}>Cena do Crime</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <Button className={style.ferida} onClick={() => setOpenPopupFerida(!openPopupFerida)}/>
    <Button className={style.porteira} onClick={() => setOpenPopupPorta(!openPopupPorta)}/>

      <PopUp  style={{position:"absolute", top: 250, left: 460}}
        open={openPopupPorta}
        onClose={() => setOpenPopupPorta(false)}
        title="Porteira"
      >
        <img src={porta} alt="Porteira" />
      <p>Atrás dela há uma porta trancada.</p>
      </PopUp>
    

      <PopUp style={{position:"absolute", top: 340, left: 770}}
        open={openPopupFerida}
        onClose={() => setOpenPopupFerida(false)}
        title="Ferimento"
      >
        <img src={corte} alt="Ferida" />
      <p>Que horrível! Parece ser um corte, e tem terra em volta dele.</p>
      </PopUp>

      <div className={style.contadorRegressivo}>
        <span>{minutos.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span>{segundos.toString().padStart(2, "0")}</span>
      </div>

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