import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quarto01 from "../../assets/quartoAlex.png"
import style from "./quarto01.module.css"
import home from "../../assets/home.gif"
import cofre from "../../assets/quartoAlex/cofre.png"
import chave from "../../assets/quartoAlex/chaves.png"
import documento from "../../assets/quartoAlex/documento.png"
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp.jsx'
import AlexNormal from '../../assets/dialogo/AlexNormal.png'
import AlexSerio from '../../assets/dialogo/AlexSerio.png'
import AlexTriste from '../../assets/dialogo/AlexTriste.png'
import { useContador } from '../../service/userContextTimer.jsx';
import relogio from '../../assets/contagemTempo.gif'


export const QuartoAlex = () => {
  const navigate = useNavigate();
  const [openPopupCofre ,setOpenPopupCofre] = useState(false)
  const [openPopupGaveta ,setOpenPopupGaveta] = useState(false)
  const [openPopupChave ,setOpenPopupChave] = useState(false)
  const [showAlexNormal, setShowAlexNormal] = useState(false);
  const [showAlexSerio, setShowAlexSerio] = useState(false);
  const [showAlexTriste, setShowAlexTriste] = useState(false);
  const { tempoTotal } = useContador();
  const minutos = Math.floor(tempoTotal / 60);
    const segundos = tempoTotal % 60;
  

  useEffect(() => {
    let timer;
    if (openPopupCofre) {
      timer = setTimeout(() => {
        setShowAlexSerio(true);
      }, 2000);
    } else {
      setShowAlexSerio(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupCofre]);

  useEffect(() => {
    let timer;
    if (openPopupGaveta) {
      timer = setTimeout(() => {
        setShowAlexTriste(true);
      }, 2000);
    } else {
      setShowAlexTriste(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupGaveta]);

  useEffect(() => {
    let timer;
    if (openPopupChave) {
      timer = setTimeout(() => {
        setShowAlexNormal(true);
      }, 2000);
    } else {
      setShowAlexNormal(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupChave]);




  function Home() {
    navigate('../corredor');
  }


  return <div>
      <div>
        <img className={style.quarto01} src={quarto01} alt="Quarto do Alex" />
      </div>
      <p className={style.tituloLocal}>Quarto do Alex</p>
      <Button className={style.home} onClick={Home}/>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <Button className={style.caixaArmario} onClick={() => setOpenPopupCofre(!openPopupCofre)}/>
    <Button className={style.gaveta} onClick={() => setOpenPopupGaveta(!openPopupGaveta)}/>
    <Button className={style.chave} onClick={() => setOpenPopupChave(!openPopupChave)}/>

    <PopUp  style={{position:"absolute", top: 180, left: 590, width:250,}}
        open={openPopupCofre}
        onClose={() => setOpenPopupCofre(false)}
        title="Cofre"
      >
        <img src={cofre} alt="cofre" />
      <p>Dentro dele você encontra MUITO dinheiro.Atrás dela há uma porta trancada.</p>
    </PopUp>

    <PopUp  style={{position:"absolute", top: 200, right: 380, width:200,}}
        open={openPopupGaveta}
        onClose={() => setOpenPopupGaveta(false)}
        title="Gaveta"
      >
        <img src={documento} alt="Ação Judicial" />
      <p>Há uma Ação Judicial dentro dela. Tem o nome Fred e Alex no documento.</p>
    </PopUp>

    <PopUp  style={{position:"absolute", top: 170, right: 160, width: 220, height: 290,}}
        open={openPopupChave}
        onClose={() => setOpenPopupChave(false)}
        title="Chave"
      >
        <img src={chave} alt="Chaves do Jardim" />
      <p>Uma chave um pouco antiga. Há uma etiqueta nela escrito <span>Depósito Jadim dos fundos</span>. </p>
    </PopUp>

    {showAlexNormal && (
        <div>
          <img className={style.Alex} src={AlexNormal} alt="Alex Normal" />
          <p className={style.alexTexto}>Essa chave é da casa do jardim. Não a empresto para ninguém, <br /> já que o único que se importa com a manutenção do jardim sou eu! <br />
          Falando nisso... Faz um tempão que não cuido do jardim!</p>
        </div>
      )}

    {showAlexSerio && (
        <div>
          <img className={style.Alex} src={AlexSerio} alt="Alex Sério" />
          <p className={style.alexTexto}><strong>ESSE DINHEIRO É MEU</strong>, não tem nada aí para você! <br />
          Já basta a família daquele maldito querendo minhas coisas.</p>
        </div>
    )}

    {showAlexTriste && (
        <div>
          <img className={style.Alex} src={AlexTriste} alt="Alex Triste" />
          <p className={style.alexTexto}>Eu e Fred disputávamos por esse terreno há anos, <br /> supostamente, ele herdou... Para mim, é só um monte de baboseira, sempre foi meu!</p>
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