import styles from './popUp.module.css'

const Popup = ({ style, open, onClose, title, imagem, children }) => {
  if (!open) return null;

  return (

    <div style={style} className={styles.PopUp}>
      <div className={styles.caixaPopUpInterna}>
        <h2 className={styles.tituloPop}>
          {title}
          <img src={imagem}/>
          <span className={styles.popupClose} onClick={onClose}>X</span>
        </h2>
        <div className={styles.popupBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;