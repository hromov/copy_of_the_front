import { useSelector } from "react-redux";
import { Calc } from "./calc/Calc";
import styles from './Home.module.css'

export const Home = () => {
  const banksState = useSelector((state) => state.banks)

  return (
    <main>
      <section className={styles.calc}>
        <Calc banks={banksState.banks} />
      </section>

    </main>
  );
};
