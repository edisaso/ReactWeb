import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Contact Knut</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Business Inquiries: knut@afkcreators.com</p>

      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Write Email</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
