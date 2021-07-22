import React from "react";
import vector1 from './img/Vector1.svg'
import vector2 from './img/Vector2.svg'
import vector3 from './img/Vector3.svg'
import vector4 from './img/Vector4.svg'

const Sector = () => {
  return (
    <>
      <section class="sector">
        <div class="container">
          <div class="text-center mb-5">
            <h4> SECTOR </h4>
          </div>

          <div class="row">
            <div class="col-md-6 text-center">
            <img class="mb-4" src={vector1} width="10%" />  
            <h5> Intellectual Property </h5>
            </div>

            <div class="col-md-6 text-center">
            <img class="mb-3" src={vector2} width="10%" />
              <h5> Litigation </h5>
            </div>

            <div class="col-md-6 text-center">
            <img class="mb-3" src={vector3} width="10%" />
              <h5> Business Advisory </h5>
            </div>

            <div class="col-md-6 text-center">
            <img class="mb-3" src={vector4} width="10%" />
              <h5> Banking & Finance </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sector;
