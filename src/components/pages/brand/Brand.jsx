import React from "react";

const Brand = () => {
  return (
    <>
      <div className="brand-style-one-area text-center default-padding-top">
        <div className="container">
          <div className="brand-style-one">
            <div className="row">
              <div className="col-lg-12">
                <div className="brand5col swiper">
                  {/* Additional required wrapper */}
                  <div className="swiper-wrapper align-center">
                    {/* Single Item */}
                    <div className="swiper-slide">
                      <img src="assets/img/2-light.png" alt="Thumb" />
                    </div>
                    {/* End Single Item */}
                    {/* Single Item */}
                    <div className="swiper-slide">
                      <img src="assets/img/1-light.png" alt="Thumb" />
                    </div>
                    {/* End Single Item */}
                    {/* Single Item */}
                    <div className="swiper-slide">
                      <img src="assets/img/3-light.png" alt="Thumb" />
                    </div>
                    {/* End Single Item */}
                    {/* Single Item */}
                    <div className="swiper-slide">
                      <img src="assets/img/4-light.png" alt="Thumb" />
                    </div>
                    {/* End Single Item */}
                    {/* Single Item */}
                    <div className="swiper-slide">
                      <img src="assets/img/5-light.png" alt="Thumb" />
                    </div>
                    {/* End Single Item */}
                  </div>
                </div>
              </div>
            </div>
            {/* End Brand */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
