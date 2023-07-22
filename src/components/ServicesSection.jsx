import React from "react";
import styles from "./ServicesSection.module.css";

function ServicesSection() {
  return (
    <section id={styles.services}>
      <div className="container">
        <h1>ServicesSection</h1>
        <button className={styles.btn}>Buy</button>
      </div>
    </section>
  );
}

export default ServicesSection;
