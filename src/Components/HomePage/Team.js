import React from "react";
import img1 from "./img/Rectangle 10.png";
import img2 from "./img/Rectangle 11.png";
import img3 from "./img/Rectangle 12.jpg";

const Team = () => {
  return (
    <>
      <section class="team">
        <div class="container">
        <div class="text-center mb-5">
          <h4> OUR TEAM</h4>
        </div>

          <div class="row">
           

            <div class="col-md-6">
              <div class="row ">
                <div class="col-md-6 pl-0 pr-0  ">
                  <img src={img1} width="100%" alt="team" />
                </div>
                <div class="col-md-6 pt-5 team-blue text-center">
                <h5> Victor Adetula</h5>
                  <p> Managing Partner</p>
                  <button class="btn"> Read on Bio</button>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="row ">
                <div class="col-md-6 pl-0 pr-0  ">
                  <img src={img2} width="100%" alt="team" />
                </div>
                <div class="col-md-6 pt-5 team-blue text-center">
                  <h5> Adekola Tolulope</h5>
                  <p> Partner</p>
                  <button class="btn"> Read on Bio</button>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="row ">
                <div class="col-md-6 pl-0 pr-0 ">
                  <img src={img3} width="100%" alt="team" />
                </div>
                <div class="col-md-6 pt-5 team-blue text-center">
                  <h5> Aladejebi Adebanjo</h5>
                  <p> Senior Associate</p>
                  <button class="btn"> Read on Bio</button>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
