import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContador } from '../../service/userContextTimer.jsx';
import quarto04 from "../../assets/quartoLorencini.png"
import style from "./quarto04.module.css"
import home from "../../assets/home.gif"
import dever from "../../assets/quartoLorencini/dever.png"
import genshin from "../../assets/quartoLorencini/genshin.png"
import produtos from "../../assets/quartoLorencini/produtos.png"
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp';
import LorenSorrindo from '../../assets/dialogo/LorenSorrindo.png'
import LorenTriste from '../../assets/dialogo/LorenTriste.png'
import LorenDesconfiado from '../../assets/dialogo/LorenDesconfiado.png'
import relogio from '../../assets/contagemTempo.gif'

export const QuartoLorencini = () => {

  const navigate = useNavigate();
  const [openPopupComputador ,setOpenPopupComputador] = useState(false)
  const [openPopupBalde ,setOpenPopupBalde] = useState(false)
  const [openPopupDever ,setOpenPopupDever] = useState(false)
  const [showLorenSorrindo, setShowLorenSorrindo] = useState(false);
  const [showLorenTriste, setShowLorenTriste] = useState(false);
  const [showLorenDesconfiado, setShowLorenDesconfiado] = useState(false);
  const { tempoTotal } = useContador();
  const minutos = Math.floor(tempoTotal / 60);
  const segundos = tempoTotal % 60;
  

  useEffect(() => {
    let timer;
    if (openPopupComputador) {
      timer = setTimeout(() => {
        setShowLorenSorrindo(true);
      }, 2000);
    } else {
      setShowLorenSorrindo(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupComputador]);

  useEffect(() => {
    let timer;
    if (openPopupBalde) {
      timer = setTimeout(() => {
        setShowLorenTriste(true);
      }, 2000);
    } else {
      setShowLorenTriste(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupBalde]);

  useEffect(() => {
    let timer;
    if (openPopupDever) {
      timer = setTimeout(() => {
        setShowLorenDesconfiado(true);
      }, 2000);
    } else {
      setShowLorenDesconfiado(false);
    }
    return () => clearTimeout(timer);
  }, [openPopupDever]);

  function Home() {
    navigate('../corredor');
  }

  return <div>
      <div>
        <img className={style.quarto04} src={quarto04} alt="Quarto do Lorencini" />
      </div>
      <Button className={style.home} onClick={Home}/>
      <p className={style.tituloLocal}>Quarto do Lorencini</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <Button className={style.balde} onClick={() => setOpenPopupBalde(!openPopupBalde)}/>
    <Button className={style.computador} onClick={() => setOpenPopupComputador(!openPopupComputador)}/>
    <Button className={style.dever} onClick={() => setOpenPopupDever(!openPopupDever)}/>

    <PopUp  style={{position:"absolute", top: 200, left: 360, width: 250 }}
        open={openPopupComputador}
        onClose={() => setOpenPopupComputador(false)}
        title="Computador Ligado"
      >
        <img src={genshin} alt="Computador" />
      <p>Está aberto em um jogo...Miguelito não joga a 3 dias</p>
      </PopUp>

      <PopUp  style={{position:"absolute", top: 170, left: 600, width: 250 }}
        open={openPopupBalde}
        onClose={() => setOpenPopupBalde(false)}
        title="Produtos de Limpeza"
      >
        <img src={produtos} alt="Produtos de Limpeza" />
      <p>Sabão em pó, água sanitária e desifetante. Estão usados.</p>
      </PopUp>

      <PopUp  style={{position:"absolute", top: 180, right: 20, width: 250 }}
        open={openPopupDever}
        onClose={() => setOpenPopupDever(false)}
        title="Dever de Casa"
      >
        <img src={dever} alt="Dever de Casa" />
      <p>Todos eles estão com o nome do Fred, nota 100!</p>
      </PopUp>

      {showLorenSorrindo && (
        <div>
          <img className={style.LorenSorrindo} src={LorenSorrindo} alt="Loren Sorrindo" />
          <p className={style.loren}>Vish, acabei deixando ligado. <br />
          Poxa, faz um tempão que não jogo com o Miguelito!</p>
        </div>
      )}

      {showLorenTriste && (
        <div>
          <img className={style.LorenSorrindo} src={LorenTriste} alt="Loren Triste" />
          <p className={style.loren}>Eu ganhei esses materiais do Fred, ele me obrigava a cuidar bem da "futura casa dele". <br />
          Finalmente esse pesadelo acabou...</p>
        </div>
      )}
      {showLorenDesconfiado && (
        <div>
          <img className={style.LorenSorrindo} src={LorenDesconfiado} alt="Loren Desconfiado" />
          <p className={style.loren}>Ah, eu ia entregar isso ao Fred uns dias atrás, mas fiquei com medo porque ele e o Bonas estavam brigando muito, <br /> acho que rolou até porrada!</p>
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