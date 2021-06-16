import React from "react";

import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div class="bg">
        <Header />

        <div class="container">
          <div class="pt-5 text-white">
            <header class="py-5 mt-5">
              <h1 class="display-4">For Minutes</h1>
              <div class="row d_flex">
                <div class="col-md-3">
                  <p class="lead mb-0">service </p>
                  <p class="lead mb-0">introduction</p>
                </div>
                <div class="col-md-7"></div>
              </div>
              <br></br>
              <div class="button-4">
                <div class="eff-4"></div>
                <a href="#!"> Get Started </a>
              </div>
              <br></br>
            </header>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Main;
