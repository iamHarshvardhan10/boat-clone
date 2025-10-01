import React from "react";
import { assets } from "../../assets/assets";

const HomeBannerFooter = () => {
  return (
    <div className="home__banner_footer">
      <div className="home__banner_footer_img">
        <img src={assets.homeFooterStrip} alt="" />
      </div>
      <div className="home__footer_l">
        <div className="footer__logo_container">
          <img src={assets.homeFooterBadge1} alt="" />
          <div>
            <h5>12 + 3 Months</h5>
            <p className="footer__p">Warranty</p>
          </div>
        </div>
        <div className="footer__logo_container">
          <img src={assets.homeFooterBadge2} alt="" />
          <div>
            <h5>GST</h5>
            <p className="footer__p">Billing</p>
          </div>
        </div>
        <div className="footer__logo_container">
          <img src={assets.homeFooterBadge3} alt="" />
          <div>
            <h5>Free Express</h5>
            <p className="footer__p">Delivery</p>
          </div>
        </div>
        <div className="footer__logo_container">
          <img src={assets.homeFooterBadge4} alt="" />
          <div>
            <h5>7-day</h5>
            <p className="footer__p">Replacement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerFooter;
