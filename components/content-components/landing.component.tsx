import {landing} from "../../interfaces/components.interface";
import styles from "./landing.component.module.css";

export default function LandingComponent ({landing}: {landing: landing}) {
  return (
    <section className={styles.landing}>
      <div className={styles.textbox}>
        <h1 className={styles.title}>{landing.title}</h1>
        <h2 className={styles.subtitle}>{landing.subtitle}</h2>
      </div>
    </section>
  )
}
