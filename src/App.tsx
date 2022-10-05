import {ConveterDolar} from './components/Dolar';
import {ConverteEuro} from './components/Euro';
import {ConversorLibra} from './components/LibraEsterlina';
import {ConverteIene} from './components/Iene';
import {ConveterSuico} from './components/Suico';
import {ConveterAustraliano} from './components/Australiano';
import styles from './App.module.css';


const app = () => {
  
  return (
    <div>
        <div className={styles.main}>
          <ConveterDolar/>
          <ConverteEuro/>
          <ConversorLibra/>
        </div>
        <div className={styles.main}>
          <ConverteIene/>
          <ConveterSuico/>
          <ConveterAustraliano/> 
        </div>
    </div>
  ); 
};

export default app;