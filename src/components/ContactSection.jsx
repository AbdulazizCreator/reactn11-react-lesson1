import React, { Component } from "react";
import styles from "./ServicesSection.module.css";

export class ContactSection extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <h1>ContactSection</h1>
          <button className={styles.btn}>Contact Us</button>
        </div>
      </section>
    );
  }
}

export default ContactSection;
