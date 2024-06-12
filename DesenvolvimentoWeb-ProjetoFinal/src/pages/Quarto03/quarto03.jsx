import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import quarto03 from "../../assets/quartoYuka.png"
import style from "./quarto03.module.css"
import home from "../../assets/home.gif"
import gato from '../../assets/quartoYuka/gato.png'
import caixaPapelao from '../../assets/quartoYuka/caixa.jpg'
import sangue from '../../assets/quartoYuka/sangue.png'
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp.jsx'
import YukaNormal from '../../assets/dialogo/YukaNormal.png'
import YukaSeria from '../../assets/dialogo/YukaNormal.png'
import YukaMedo from '../../assets/dialogo/YukaMedo.png'
import { useContador } from '../../service/userContextTimer.jsx';
import relogio from '../../assets/contagemTempo.gif'

export const QuartoYuka = () => {
  const { tempoTotal } = useContador();
  const [openPopupCaixa ,setOpenPopupCaixa] = useState(false);
  const [openPopupGato ,setOpenPopupGato] = useState(false);
  const [openPopupSangue ,setOpenPopupSangue] = useState(false);
  const [showYukaNormal, setShowYukaNormal] = useState(false);
  const [showYukaSeria, setShowYukaSeria] = useState(false);
  const [showYukaMedo, setShowYukaMedo] = useState(false);
  const navigate = useNavigate();
  const minutos = Math.floor(tempoTotal / 60);
  const segundos = tempoTotal % 60;

  useEffect(() => {
    let timer;
    if (openPopupCaixa) {
      timer = setTimeout(() => {
        setShowYukaNormal(true);
      }, 2000);
    } else {
      setShowYukaNormal(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupCaixa]);

  useEffect(() => {
    let timer;
    if (openPopupGato) {
      timer = setTimeout(() => {
        setShowYukaSeria(true);
      }, 2000);
    } else {
      setShowYukaSeria(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupGato]);

  useEffect(() => {
    let timer;
    if (openPopupSangue) {
      timer = setTimeout(() => {
        setShowYukaMedo(true);
      }, 2000);
    } else {
      setShowYukaMedo(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupSangue]);




  function Home() {
    navigate('../corredor');
  }


  return <div>
    <div>
    <img className={style.quarto03} src={quarto03} alt="Quarto da yuka" />
    </div>
    <p className={style.tituloLocal}>Quarto da Yuka</p>
    <Button className={style.caixa} onClick={() => setOpenPopupCaixa(!openPopupCaixa)}/>
    <Button className={style.gato} onClick={() => setOpenPopupGato(!openPopupGato)}/>
    <Button className={style.sangue} onClick={() => setOpenPopupSangue(!openPopupSangue)}/>
    <Button className={style.home} onClick={Home}/>
    <div className={style.containerIcon}>
      <a href="#" onClick={Home}>
        <img className={style.homeIcon} src={home} alt="icon home" />
        </a>
    </div>

    <PopUp  style={{position:"absolute", top: 190, left: 380, width: 250,}}
        open={openPopupCaixa}
        onClose={() => setOpenPopupCaixa(false)}
        title="Caixa de Papelão"
      >
        <img src={caixaPapelao} alt="Caixa de Papelão" />
      <p>Dentro dessa caixa você encontra um spray para ferimentos, gaze e ataduras cortadas.</p>
    </PopUp>

    <PopUp  style={{position:"absolute", top: 200, right: 170, width: 250, height: 340}}
        open={openPopupGato}
        onClose={() => setOpenPopupGato(false)}
        title="Toquito"
      >
        <img src={gato} alt="Porteira" />
      <p>Ele está mancando, com uma grande ferida aberta nas costas. Tuquito te comprimenta com um miado simpático. </p>
    </PopUp>

    <PopUp  style={{position:"absolute", 
        top: 200, right: 30, width: 200,}}
        open={openPopupSangue}
        onClose={() => setOpenPopupSangue(false)}
        title="Mancha de Sangue"
      >
        <img src={sangue} alt="sangue" />
      <p>Parece que alguém sujou essa cadeira ao tentar arrastá-la.</p>
    </PopUp>

    {showYukaSeria && (
        <div>
          <img className={style.yuka} src={YukaSeria} alt="yuka Seria" />
          <p className={style.yukaTexto}>Olha como é fofo!! Não consigo acreditar que o Fred veio aqui ontem e o machucou. <br />
          Ele ficava judiando do Toquito sempre que o via passeando pela casa. <br /> Pelo menos agora ele não precisa ficar trancado dentro do quarto.</p>
        </div>
      )}

      {showYukaNormal && (
        <div>
          <img className={style.yuka} src={YukaNormal} alt="yuka Normal" />
          <p className={style.yukaTexto}>Peguei essa caixa emprestada com o Alex ontem. <br />
          Achei que ia usar só com o Toquito, mas o Miguelito teve aqueles sangramentos malucos e o ajudei também.</p>
        </div>
      )}

      {showYukaMedo && (
        <div>
          <img className={style.yuka} src={YukaMedo} alt="yuka Normal" />
          <p className={style.yukaTexto}><strong>Está desconfiando de mim por acaso?!</strong></p>
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