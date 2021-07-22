import React from "react";

const EnquiryForm = () => {
  return (
    <>
      <section class="enquiry">
        <div class="container">
          <div class="">
            <h4> Enquiry Form</h4>
            <div class="col-md-9">
              <h6 class="mt-4 ">
                For all other inquiries, please complete the form or contact us
                via the email address stated below, and we would reply as soon
                as possible.
              </h6>
            </div>

            <div class="form">
              <form>
                <div class="row justify-content-center white-text">
                  <div class="col-md-10">
                    <label> Name </label>

                    <div class="input-group mb-4">
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="col-md-10">
                    <label> Email </label>

                    <div class="input-group mb-4">
                      <input type="email" class="form-control" />
                    </div>
                  </div>

                  <div class="col-md-10">
                    <label> Message </label>

                    <div class=" mb-4">
                      <textarea
                        type="text"
                        class="form-control md-textarea"
                        rows="4"
                        placeholder="MESSAGE"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="button"
                    name="submit"
                    class="btn px-5 btn-white shadow"
                  >
                    {" "}
                    <h5>SUBMIT </h5>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnquiryForm;
