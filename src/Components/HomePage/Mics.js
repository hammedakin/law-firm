import React from "react";
import img1 from "./img/Rectangle 32.png";
import img2 from "./img/Rectangle 17.png";

const Mics = () => {
  return (
    <>
      <section class="mics">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="">
                <div class="card-header shadow">
                  <h5 class="my-3"> Testimonials </h5>
                </div>
                <div class="card-img">
                  <img class="" src={img2} width="100%" />
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="">
                <div class="card-header shadow qq">
                  <h5 class="my-3"> News </h5>
                </div>
                <div class="card-img">
                  <img class="" src={img2} width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mics;
