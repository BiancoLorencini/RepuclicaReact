import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContador } from '../../service/userContextTimer.jsx';
import { UserContext } from '../../service/userContext.jsx';
import Button from '../../components/button'
import entrada1 from "../../assets/entrada.png"
import style from "./entrada.module.css";
import PopUpIntro from '../../components/PopUp/popUpIntro.jsx'
import introBonas from '../../assets/introImg/bonasImg.png'
import introAlex from '../../assets/introImg/alexImg.png'
import introLorencini from '../../assets/introImg/lorenciniImg.png';
import introMiguelito from '../../assets/introImg/miguelitoImg.png'
import introYuka from '../../assets/introImg/yukaImg.png'
import retangulo from '../../assets/Retangulo.png'

export const Entrada = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [openPopup01, setOpenPopup01] = useState(false);
  const [openPopup02, setOpenPopup02] = useState(false);
  const [openPopup03, setOpenPopup03] = useState(false);
  const [openPopup04, setOpenPopup04] = useState(false);
  const [openPopup05, setOpenPopup05] = useState(false);
  const [openPopup06, setOpenPopup06] = useState(false);
  const [openPopup07, setOpenPopup07] = useState(false);
  const [openPopup08, setOpenPopup08] = useState(false);
  const [openPopup09, setOpenPopup09] = useState(false);
  const { setTempoTotal } = useContador();

  const iniciarContador = () => {
    setTempoTotal(5 * 60);
    navigate('/corredor');
  };

  {/* ---timers do popUp--- */ }
  {/* ---popUp01--- */ }
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup01(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup01(false);
      }, 2500);

      return () => clearTimeout(closeTimer);
    }, 4000);

    return () => clearTimeout(openTimer);
  }, []);

  {/* ---popUp02--- */ }
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup02(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup02(false);
      }, 9800);

      return () => clearTimeout(closeTimer);
    }, 7000);

    return () => clearTimeout(openTimer);
  }, []);

  {/* ---popUp03--- */ }
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup03(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup03(false);
      }, 10500);

      return () => clearTimeout(closeTimer);
    }, 17000);

    return () => clearTimeout(openTimer);
  }, []);

  {/* ---popUpPersonagenBonas--- */ }
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup04(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup04(false);
      }, 12000);

      return () => clearTimeout(closeTimer);
    }, 28000);

    return () => clearTimeout(openTimer);
  }, []);

  {/* ---popUpPersonagenAlex--- */ }
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup05(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup05(false);
      }, 9000);

      return () => clearTimeout(closeTimer);
    }, 40000);

    return () => clearTimeout(openTimer);
  }, []);

  {/* ---popUpPersonagenLorencini--- */ }
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup06(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup06(false);
      }, 9000);

      return () => clearTimeout(closeTimer);
    }, 49000);

    return () => clearTimeout(openTimer);
  }, []);

  {/* ---popUpPersonagenMiguelito--- */ }
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup07(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup07(false);
      }, 12000);

      return () => clearTimeout(closeTimer);
    }, 58000);

    return () => clearTimeout(openTimer);
  }, []);

  {/* ---popUpPersonagenYuka--- */ }
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup08(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup08(false);
      }, 12000);

      return () => clearTimeout(closeTimer);
    }, 70000);

    return () => clearTimeout(openTimer);
  }, []);

  {/* ---popUpPersonagenFim--- */ }
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup09(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup09(false);
      }, 5555000);

      return () => clearTimeout(closeTimer);
    }, 82000);

    return () => clearTimeout(openTimer);
  }, []);

  return <div>
        <div>
          <img className={style.entrada} src={entrada1} alt="frente de uma casa" />
        </div>
        <Button title="" className={style.portaEntrada} onClick={iniciarContador}/>
        
        {/* ---inicio da intro--- */}
        <PopUpIntro  style={{position:"absolute", top: 150, left: 260, width: 400, height: 40}}
        open={openPopup01}
        title=""
        >
        <p className={style.intro}>Olá detetive <strong>{ user }</strong>, bem vindo(a) a república... </p>
        </PopUpIntro>

        {/* ---intro02--- */}
        <PopUpIntro  style={{position:"absolute", top: 250, right: 260, width: 400, height: 120}}
        open={openPopup02}
        title=""
        >
        <p className={style.intro}>Você foi contratado para investigar o assassinato de Frederico Sheremetieff. O corpo foi encontrado hoje às 06:45 por uma moradora local. A área está isolada e os suspeitos estão dentro da casa.</p>
        </PopUpIntro>

        {/* ---intro03--- */}
        <PopUpIntro  style={{position:"absolute", top: 420, right: 110, width: 400, height: 140}}
        open={openPopup03}
        title=""
        >
        <p className={style.intro03}>Sabe o que é engraçado? Todos os suspeitos não gostavam nem um pouco da vítima...
        Mas enfim, vamos ao que interessa!!
        Você tem total liberdade para explorar a casa. Os suspeitos já estão cientes disso, porém, gostaria de introduzi-los a você antes.</p>
        </PopUpIntro>



      {/* ---BonasIntro--- */}
        <PopUpIntro style={{ position: "absolute", top: 100, left: 710, width: 540, height: 140 }}
        open={openPopup04}
        title="Bonas"
      >
      <p className={style.intro03}> - Bonas - <br />
      Bonas é um homem adulto, irritado,e muito ocupado com o trabalho. Após investigações, descobrimos que ele e a vítima tinham frequentes brigas, incluindo incidentes de agressão física documentados em boletins de ocorrência.
      </p>
      </PopUpIntro>
      {openPopup04 && <img className={style.imgPersonagens} src={introBonas} alt="" />}

      {/* ---AlexIntro--- */}
      <PopUpIntro style={{ position: "absolute", top: 100, left: 710, width: 540, height: 140 }}
        open={openPopup05}
        title="Alex"
      >
      <p className={style.intro03}> - Alex - <br />
      Alex é o dono da república. Avarento e rabugento. Ele e Fred, a vítima, brigavam constantemente pela posse do terreno, criando um clima de tensão permanente na república.
      </p>
      </PopUpIntro>
      {openPopup05 && <img className={style.imgPersonagens} src={introAlex} alt="" />}


      {/* ---LorenciniIntro--- */}
      <PopUpIntro style={{ position: "absolute", top: 100, left: 710, width: 540, height: 140 }}
      open={openPopup06}
      title="Lorencini"
      >
      <p className={style.intro03}> - Lorencini - <br />
      Lorencini é um nerd estudioso e viciado em computador. Encontramos evidências em seu quarto que sugerem que ele era intimidado pela vítima. Além disso, ele já ganhou alguns prêmios em jogos de estratégia.
      </p>
      </PopUpIntro>
    {openPopup06 && <img className={style.imgPersonagens} src={introLorencini} alt="" />}

    {/* ---MiguelitoIntro--- */}
    <PopUpIntro style={{ position: "absolute", top: 100, left: 710, width: 540, height: 140 }}
      open={openPopup07}
      title="Miguelito"
    >
      <p className={style.intro03}> - Miguelito - <br />
      Miguelito é viciado em assistir animes. Ele afirmou que Fred perturbava a paz da república. Durante o interrogatório, ele se mostrou uma pessoa muito rancorosa, revelando um lado de sua personalidade que não era evidente antes.
      </p>
    </PopUpIntro>
    {openPopup07 && <img className={style.imgPersonagens} src={introMiguelito} alt="" />}

    {/* ---yukaIntro--- */}
    <PopUpIntro style={{ position: "absolute", top: 100, left: 710, width: 540, height: 140 }}
      open={openPopup08}
      title="Yuka"
    >
      <p className={style.intro03}> - Yuka - <br />
      Yuka é uma estudante, mencionou que Fred maltratava o seu gato de estimação. Esse comportamento teve um impacto profundo nela, desencadeando traumas passados. Como resultado, ela demonstrou estar muito instável e desconfiada, oscilando entre tristeza e raiva.
      </p>
    </PopUpIntro>
    {openPopup08 && <img className={style.imgPersonagens} src={introYuka} alt="" />}


    {/* ---fimIntro--- */}
    <PopUpIntro style={{ position: "absolute", top: 150, left: 260, width: 400, height: 60 }}
      open={openPopup09}
      title=""
    >
      <p className={style.intro}>Bom, agora é com você. Entre na casa e resolva esse mistério! Boa sorte, detetive {user}!</p>
    </PopUpIntro>

    {/* ---iconeInstrução--- */}
    {openPopup09 && <img className={style.imgTutorial} src={retangulo} alt="" />}
  </div>
};