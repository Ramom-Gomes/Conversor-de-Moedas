import React, { useEffect, useState } from 'react';
import styles from './Conversor.module.css';
import aust from '../image/australia.png';

export const ConveterAustraliano = () => {
    let [valor, setValor] = useState(0);
    let [valorFinal, setValorFinal] = useState(0);
    let [troca, setTroca] = useState(true);

    const TrocaMoeda = () => {
        setTroca(!troca)
    }

    const Calculo = () => {
        if(troca) {
            setValorFinal(valor * 3.37)
        } else {
            setValorFinal(valor / 3.37)
        }
    }
    useEffect(()=> {
        Calculo();
    })

    return(
        <div className={styles.tudo}>
            {troca &&
                <div className={styles.main}>
                    <img src={aust} width={80} />
                    <h4 className={styles.titulo}>AUD para BRL</h4>
                    <input className={styles.input} 
                    type="number"
                    value={valor > 0 ? valor : ''}
                    onChange={e => setValor(parseFloat(e.target.value))}
                    placeholder='coloque o valor em AUD'  />
                    <button onClick={TrocaMoeda} className={styles.botao}>trocar conversão</button>
                    <span className={styles.final}>valor em BRL: {valorFinal > 0 ? valorFinal.toFixed(2) : ''}</span>
                </div>
            }    
            {!troca &&
                <div className={styles.main}>
                    <img src={aust} width={80} />
                    <h6 className={styles.titulo}>BRL para AUD</h6>
                    <input className={styles.input} 
                    type="number"
                    value={valor > 0 ? valor : ''}
                    onChange={e => setValor(parseFloat(e.target.value))}
                    placeholder='coloque o valor em BRL'  />
                    <button onClick={TrocaMoeda} className={styles.botao}>trocar conversão</button>
                    <span className={styles.final}>valor em AUD: {valorFinal > 0 ? valorFinal.toFixed(2) : ''}</span>
                </div>
            }
        </div>
    )
}