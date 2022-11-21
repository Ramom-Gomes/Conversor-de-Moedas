import React, { useEffect, useState } from 'react';
import styles from './Conversor.module.css';
import eua from '../image/eua.png';

export const ConveterDolar = () => {
    let [valor, setValor] = useState(0);
    let [valorFinal, setValorFinal] = useState(0);
    let [troca, setTroca] = useState(true);

    const TrocaMoeda = () => {
        setTroca(!troca)
    }

    const Calculo = () => {
        if(troca) {
            setValorFinal(valor * 5.17)
        } else {
            setValorFinal(valor / 5.17)
        }
    }
    useEffect(()=> {
        Calculo();
    })

    return(
        <div className={styles.tudo}>
            {troca &&
                <div className={styles.main}>
                    <img src={eua} width={80} />
                    <h4 className={styles.titulo}>USD para BRL</h4>
                    <input className={styles.input} 
                    type="number"
                    value={valor > 0 ? valor : ''}
                    onChange={e => setValor(parseFloat(e.target.value))}
                    placeholder='coloque o valor em USD'  />
                    <button onClick={TrocaMoeda} className={styles.botao}>trocar conversão</button>
                    <span className={styles.final}>valor em BRL: {valorFinal > 0 ? valorFinal : ''}</span>
                </div>
            }    
            {!troca &&
                <div className={styles.main}>
                    <img src={eua} width={80}/>
                    <h6 className={styles.titulo}>BRL para USD</h6>
                    <input className={styles.input} 
                    type="number"
                    value={valor > 0 ? valor : ''}
                    onChange={e => setValor(parseFloat(e.target.value))}
                    placeholder='coloque o valor em BRL'  />
                    <button onClick={TrocaMoeda} className={styles.botao}>trocar conversão</button>
                    <span className={styles.final}>valor em USD: {valorFinal > 0 ? valorFinal.toFixed(2) : ''}</span>
                </div>
            }
        </div>
    )
}