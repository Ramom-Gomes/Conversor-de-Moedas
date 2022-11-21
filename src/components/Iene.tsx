import React, { useEffect, useState } from 'react';
import styles from './Conversor.module.css';
import japao from '../image/japao.jpg';

export const ConverteIene = () => {
    let [valor, setValor] = useState(0);
    let [valorFinal, setValorFinal] = useState(0);
    let [troca, setTroca] = useState(false);

    const TrocaMoeda = () => {
        setTroca(!troca)
    }

    const Calculo = () => {
        if(troca) {
            setValorFinal(valor * 27.85)
        } else {
            setValorFinal(valor / 27.85)
        }
    }
    useEffect(()=> {
        Calculo();
    })    
    
    return(
        <div>
            {troca &&
                <div className={styles.main}>
                    <img src={japao} width={80}/>
                    <h4 className={styles.titulo}>BRL para JPY</h4>
                    <input className={styles.input} 
                    type="number"
                    value={valor > 0 ? valor : ''}
                    onChange={e => setValor(parseFloat(e.target.value))}
                    placeholder='coloque o valor em BRL'  />
                    <button onClick={TrocaMoeda} className={styles.botao}>trocar conversão</button>
                    <span className={styles.final}>valor em JPY: {valorFinal > 0 ? valorFinal : ''}</span>
                </div>
            }    
            {!troca &&
                <div className={styles.main}>
                    <img src={japao} width={80}/>
                    <h6 className={styles.titulo}>JPY para BRL</h6>
                    <input className={styles.input} 
                    type="number"
                    value={valor > 0 ? valor : ''}
                    onChange={e => setValor(parseFloat(e.target.value))}
                    placeholder='coloque o valor em JPY'  />
                    <button onClick={TrocaMoeda} className={styles.botao}>trocar conversão</button>
                    <span className={styles.final}>valor em BRL: {valorFinal > 0 ? valorFinal.toFixed(3) : ''}</span>
                </div>
            }
        </div>
    )
}