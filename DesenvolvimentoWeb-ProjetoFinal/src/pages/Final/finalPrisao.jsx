import React from "react";
import finalPrisao from '../../assets/finalPrisao/prisaoFinal.mp4';
import style from './final.module.css';

export const FinalPrisao = () => {
    return (
        <div className={style.videoContainer}>
            <video className={style.finalVideo} src={finalPrisao} autoPlay ></video>
        </div>
    );
};
