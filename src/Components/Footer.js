import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <footer class="page-footer font-small">
          <div class="container text-center text-md-left mb-5 pt-5">
            <div class="row">
              <div class="col-md-6">
                <div class="ml-auto mr-auto">
                  <h6 class="font-weight-bold white-text text-center mt-3 mb-4">
                    CONNECT WITH US
                  </h6>
                  <div class="text-center mb-3 boxicons">
                    <a
                      href="https://web.facebook.com/FireSwitchTech"
                      target="_blank"
                    >
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #031838"
                        type="logo"
                        name="facebook"
                      ></box-icon>
                    </a>

                    <a
                      href="https://www.instagram.com/fireswitchtech/"
                      target="_blank"
                    >
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #031838"
                        name="instagram"
                        type="logo"
                      ></box-icon>
                    </a>

                    <a
                      href="https://twitter.com/fireswitchtech"
                      target="_blank"
                    >
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #031838"
                        name="twitter"
                        type="logo"
                      ></box-icon>
                    </a>

                    <a
                      href="https://linkedin.com/fireswitchtech"
                      target="_blank"
                    >
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #031838"
                        name="linkedin-square"
                        type="logo"
                      ></box-icon>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-md-6 suscribe">
                <div class="">
                  <div class="col-md-10 ml-auto">
                    <h5 class="mt-3 mb-4"> Subscribe </h5>

                    <div class="input-group white">
                      <input
                        type="email"
                        class="form-control "
                        placeholder="Enter E-mail Address"
                      />
                      <a type="button">
                        <span
                          class="input-group-text border-0"
                          id="search-addon"
                        >
                          {" "}
                          <box-icon
                            class="box-icon"
                            size="2rem"
                            color=" #031838"
                            name="search-alt-2"
                            type="logo"
                          ></box-icon>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center mb-5 pt-5 mx-0">
            <div class="col-md-3 text-center">
              <h5> Contact Us </h5>
            </div>

            <div class="col-md-3 text-center">
              <h5> Privacy Policy </h5>
            </div>

            <div class="col-md-3 text-center">
              <h5> Cookie Policy </h5>
            </div>
          </div>

          <div class="footer-copyright white black-text text-center py-3">
            Copyright © 2021{" "}
            <a href="https://strongforte.net" class="blue-text ">
              {" "}
              Strongforte.net{" "}
            </a>{" "}
            || All rights reserved

            <hr class="my-1 w-50"/>

            <div style={{fontSize: "smaller"}}>
            Developed by
            <a href="https://fireswitch.tech" class="blue-text">
              {" "}
              FireSwitch Technologies{" "}
            </a>
            </div>

         
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
