import React from "react";

const ContactDetails = () => {
  return (
    <>
      <section class="details">
        <div class="container">
          <div class="">
            <h4> Contact Details</h4>
          </div>

          <div class="row">
            <div class="col-md-6"></div>

            <div class="col-md-6">
              <div class="">
                <div class="card mb-3 py-3">
                  <div class="row">
                    <div class="col-3  text-center align-self-center">
                      <box-icon
                        name="buildings"
                        class="box-icon px-4  "
                        size="2rem"
                        color="#000"
                      ></box-icon>
                    </div>
                    <div class="col-9">
                      <h4> Head Office </h4>
                      <h6>
                       39 Adekanye Cresent, Oluwatuyi Quarters, Akure.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="">
                <div class="card mb-3 py-3">
                  <div class="row">
                    <div class="col-3 m-auto  text-center align-self-center">
                      <box-icon
                        name="phone-call"
                        class="box-icon px-4  "
                        size="2rem"
                        color="#000"
                      ></box-icon>
                    </div>
                    <div class="col-9">
                      <h4> Call Us </h4>
                      <h6> 07039949050 </h6>
                      <p> Monday - Friday : (08:00 - 06:00) </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="">
                <div class="card mb-3 py-3">
                  <div class="row">
                    <div class="col-3 m-auto text-center align-self-center">
                      <box-icon
                        name="envelope"
                        class="box-icon px-4  "
                        size="2rem"
                        color="#000"
                      ></box-icon>
                    </div>
                    <div class="col-9">
                      <h4> Email </h4>
                      <h6> info@strongeforte.net</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactDetails;
