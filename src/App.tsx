import {ConveterDolar} from './components/Dolar';
import {ConverteEuro} from './components/Euro';
import {ConversorLibra} from './components/LibraEsterlina';
import {ConverteIene} from './components/Iene';
import {ConveterSuico} from './components/Suico';
import {ConveterAustraliano} from './components/Australiano';
import styles from './App.module.css';
import tio from './image/tio2.jpg';


const app = () => {
  
  return (
    <div className={styles.tudo}>
        <div className={styles.main}>
            <div className={styles.paises}>
              <ConveterDolar/>
              <ConverteEuro/>
              <ConversorLibra/>
            </div>
          <div className={styles.paises}>
            <ConverteIene/>
            <ConveterSuico/>
            <ConveterAustraliano/>
          </div>
        </div>
        <div className={styles.submain}>
          <img src={tio} className={styles.foto}/> 
        </div>
    </div>
  ); 
};

export default app;