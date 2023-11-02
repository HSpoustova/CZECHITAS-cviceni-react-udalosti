import { Uloha1 } from '../../components/Uloha1';
import { Uloha2 } from '../../components/Uloha2'
import { Uloha3 } from '../../components/Uloha3'
import { Uloha4 } from '../../components/Uloha4'
import { Bonus } from '../../components/Bonus'
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <h1>React události</h1>
      <h2>Úloha 1</h2>
      <Uloha1 />
      <h2>Úloha 2</h2>
      <Uloha2 />
      <h2>Úloha 3</h2>
      <Uloha3 />
      <h2>Úloha 4</h2>
      <Uloha4 />
      <h2>Závěrečný bonus</h2>
      <Bonus />
    </div>
  );
};
