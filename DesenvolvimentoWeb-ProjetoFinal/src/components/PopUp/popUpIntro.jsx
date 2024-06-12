import styles from './popUp.module.css'

const PopUpIntro = ({ style, open, imagem, children }) => {
  
  

  if (!open) return null;
  
  return (

    <div style={style} className={styles.PopUp}>
      
      <div className={styles.caixaPopUpInterna}>
        <img src={imagem} />
        <div className={styles.popupBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopUpIntro;