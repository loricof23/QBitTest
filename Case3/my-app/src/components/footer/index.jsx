import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './index.css';

const Footer = () => {
  return(
    <div>
      <div className="footer">
      <div className="about">
        <div className="title">Tentang</div>
        <div>
          <div className="list-footerContents">Tentang Kami</div>
          <div className="list-footerContents"> Syarat dan Ketentuan</div>
          <div className="list-footerContents">Kebijakan</div>
        </div>
      </div>
      <div className="service">
        <div className="title">Bantuan</div>
        <div>
          <div className="list-footerContents">Bagaimana Cara Membayar</div>
          <div className="list-footerContents">Bagaimana Cara Memesan</div>
        </div>
      </div>
      <div className="contact">
        <div className="title" >Layanan Pelanggan</div>
        <div>
          <div className="list-footerContents">FAQ</div>
          <div className="list-footerContents">Customer Service</div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="media">
        <div className="title-media">Our Media</div>
        <div className="list-media">
          <div className="fb">{<FontAwesomeIcon icon={faFacebook}/>}</div>
          <div className="ig">{<FontAwesomeIcon icon={faInstagram}/>}</div>
          <div className="tw">{<FontAwesomeIcon icon={faTwitter}/>}</div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="copyrightname">
        copyright 2022
      </div>
    </div>
  </div>
  )
}

export default Footer;