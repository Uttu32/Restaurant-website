import React from "react";
import Layout from "../../components/Layout/Layout";
import Styles from "../Home/Home.module.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <div className={Styles.home}>
        <div className={Styles.headerContainer}>
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <NavLink to="/menu">
            <button>ORDER NOW</button>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
}
