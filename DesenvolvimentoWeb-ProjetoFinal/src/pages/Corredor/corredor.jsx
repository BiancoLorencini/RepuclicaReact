import { useContador } from '../../service/userContextTimer.jsx';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getConselhoById } from '../../service';
import { UserContext } from '../../service/userContext.jsx';
import corredor from "../../assets/corredor.png";
import style from "./corredor.module.css";
import home from "../../assets/home.gif";
import lupa from "../../assets/lupa.gif";
import carro from '../../assets/carro.gif';
import Button from '../../components/button.jsx';
import alexCorredor from '../../assets/dialogo/AlexNormal.png';
import relogio from '../../assets/contagemTempo.gif'
import bonasAcusacao from '../../assets/IconesAcusacao/BonasAcusacao.png';
import alexAcusacao from '../../assets/IconesAcusacao/AlexAcusacao.png';
import lorenAcusacao from '../../assets/IconesAcusacao/LorenciniAcusacao.png';
import miguelitoAcusacao from '../../assets/IconesAcusacao/MiguelitoAcusacao.png';
import yukaAcusacao from '../../assets/IconesAcusacao/YukaAcusacao.png';

export const Corredor = () => {
  const [openAcusacao, setOpenAcusacao] = useState(false);
  const { user } = useContext(UserContext);
  const { tempoTotal } = useContador();
  const navigate = useNavigate();
  const minutos = Math.floor(tempoTotal / 60);
  const segundos = tempoTotal % 60;

  const [mostrarApresentacao, setMostrarApresentacao] = useState(() => {
    const valorArmazenado = localStorage.getItem('mostrarApresentacaoCorredor');
    return valorArmazenado === null ? true : JSON.parse(valorArmazenado);
  });

  useEffect(() => {
    if (mostrarApresentacao) {
      const timer = setTimeout(() => {
        setMostrarApresentacao(false);
        localStorage.setItem('mostrarApresentacaoCorredor', JSON.stringify(false));
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [mostrarApresentacao]);

  const PortaCrime = () => navigate('../crime');
  const PortaBonas = () => navigate('../quartoBonas');
  const PortaAlex = () => navigate('../quartoAlex');
  const PortaYuka = () => navigate('../quartoYuka');
  const PortaMiguelito = () => navigate('../quartoMiguelito');
  const PortaLorencini = () => navigate('../quartoLorencini');

  const Home = () => navigate('../corredor');
  const Prisao = () => navigate('../finalPrisao');
  const GameOver = () => navigate('../finalGameOver'); // depois mudar na main no path

  const mostraConselho = async () => {
    try {
      const conselho = await getConselhoById();
      toast.info(conselho.data.slip.advice); // necessário entrar em cada parte do retorno da api pra pegar advice
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <img className={style.corredor} src={corredor} alt="corredor de uma casa" />
      </div>
      <p className={style.tituloLocal}>Corredor</p>
      <Button className={style.portaCrime} onClick={PortaCrime} />
      <Button className={style.portaBonas} onClick={PortaBonas} />
      <Button className={style.portaAlex} onClick={PortaAlex} />
      <Button className={style.portaYuka} onClick={PortaYuka} />
      <Button className={style.portaMiguelito} onClick={PortaMiguelito} />
      <Button className={style.portaLorencini} onClick={PortaLorencini} />
      <div className={style.containerCarro}>
        <a href="#" onClick={() => setOpenAcusacao(!openAcusacao)}>
          <img className={style.carroIcon} src={carro} alt="icon carro" />
        </a>
      </div>
      <Button className={style.home} onClick={Home} />
      <div className={style.containerIcon}>
        <a href="#" onClick={Home}>
          <img className={style.homeIcon} src={home} alt="icon home" />
        </a>
      </div>
      <div className={style.containerLupa}>
        <a href="#" onClick={mostraConselho}>
          <img className={style.lupaIcon} src={lupa} alt="icon Lupa" />
        </a>
      </div>
      
      <div className={style.contadorRegressivo}>
        <img src={relogio} alt="" />
        <div>
          <span>{minutos.toString().padStart(2, "0")}</span>
          <span>:</span>
          <span>{segundos.toString().padStart(2, "0")}</span>
        </div>
      </div>
      
      {openAcusacao && (
          <div className={style.popUpAcusacao}>
            <p className={style.tituloAcusacao}>
              Quem foi o assassino?
            </p>
            <div className={style.containerImgAcusacao}>
              <a href="#" onClick={GameOver}>
                <img src={bonasAcusacao} className={style.imgAcusacao} />
              </a>
              <a href="#" onClick={GameOver}>
                <img src={alexAcusacao} className={style.imgAcusacao} />
              </a>
              <a href="#" onClick={GameOver}>
                <img src={lorenAcusacao} className={style.imgAcusacao} />
              </a>
              <a href="#" onClick={Prisao}>
                <img src={miguelitoAcusacao} className={style.imgAcusacao}/> 
              </a>
              <a href="#" onClick={GameOver}>
                <img src={yukaAcusacao} className={style.imgAcusacao} />
              </a>
            </div>
          </div>
      )}

      {mostrarApresentacao && (
        <div className={style.apresentacao}>
          <img className={style.alexIntroCorredor} src={alexCorredor} alt="Alex no corredor" />
          <div className={style.falaAlexInicial}>
            <p>Olá, detetive <strong>{user}</strong>. Seja bem-vindo(a), sou Alex, dono desta república. O delegado já nos avisou sobre sua visita...
              Fique à vontade para investigar. Mesmo não gostando muito da vítima, vamos tentar cooperar o máximo possível!
              Por ordens dos policiais, iremos ficar nos nossos quartos até a investigação terminar..</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Corredor;
