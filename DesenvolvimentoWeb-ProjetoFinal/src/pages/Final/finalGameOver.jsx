import {useEffect, useState, useContext} from "react";
import PopUpIntro from '../../components/PopUp/popUpIntro.jsx';
import style from './finalGameOver.module.css';
import { UserContext } from "../../service/userContext";
import gameOver from "../../assets/finalGameOver/gameOver.png"


export const FinalGameOver = () =>{

    const [openPopup01, setOpenPopup01] = useState(false);
    const [openPopup02, setOpenPopup02] = useState(false);
    const [openPopup03, setOpenPopup03] = useState(false);
    const [openPopup04, setOpenPopup04] = useState(false);

    const { user } = useContext(UserContext);

    useEffect(() => {
        const openTimer = setTimeout(() => {
          setOpenPopup01(true);
    
          const closeTimer = setTimeout(() => {
            setOpenPopup01(false);
          }, 2500);
    
          return () => clearTimeout(closeTimer);
        }, 1000);
    
        return () => clearTimeout(openTimer);
      }, []);

      useEffect(() => {
        const openTimer = setTimeout(() => {
          setOpenPopup02(true);
    
          const closeTimer = setTimeout(() => {
            setOpenPopup02(false);
          }, 2500);
    
          return () => clearTimeout(closeTimer);
        }, 4000);
    
        return () => clearTimeout(openTimer);
      }, []);

      useEffect(() => {
        const openTimer = setTimeout(() => {
          setOpenPopup03(true);
    
          const closeTimer = setTimeout(() => {
            setOpenPopup03(false);
          }, 2500);
    
          return () => clearTimeout(closeTimer);
        }, 7000);
    
        return () => clearTimeout(openTimer);
      }, []);

      useEffect(() => {
        const openTimer = setTimeout(() => {
          setOpenPopup04(true);
    
          const closeTimer = setTimeout(() => {
            setOpenPopup04(false);
          }, 2500);
    
          return () => clearTimeout(closeTimer);
        }, 10000);
    
        return () => clearTimeout(openTimer);
      }, []);

    return (
        <div>
            <div className={style.popUp}>
                <div>
                    <PopUpIntro  style={{position:"absolute", top: 150, left: 260, width: 400, height: 60}}
                    open={openPopup01}
                    title=""
                    >
                    <p className={style.intro}>"Temos um problema, chefe. Novas evidências sugerem que pegamos a pessoa errada."</p>
                    </PopUpIntro>
                </div>
                <div>
                    <PopUpIntro  style={{position:"absolute", top: 350, right: 160, width: 400, height: 60}}
                    open={openPopup02}
                    title=""
                    >
                    <p className={style.intro}><strong>IMPOSSIVEL!</strong> Precisamos reabrir o caso imediatamente. Não podemos deixar um inocente pagar pelo crime de outro. </p>
                    </PopUpIntro>
                </div>
                <div>
                    <PopUpIntro  style={{position:"absolute", top: 340, left: 665, width: 1000, height: 465}}
                    open={openPopup03}
                    title=""
                    >
                    <img className={style.gameOver} src={gameOver} alt="gameOver" />
                    
                    </PopUpIntro>
                </div>
                <div>
                    <PopUpIntro  style={{position:"absolute", top: 150, left: 260, width: 400, height: 40}}
                    open={openPopup04}
                    title=""
                    >
                    <p className={style.intro}>Você é um pessimo detetive <strong>{ user }</strong>!!</p>
                    </PopUpIntro>
                </div>
            </div> 
        </div>
    );

}