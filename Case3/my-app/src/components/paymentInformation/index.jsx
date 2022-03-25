import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons'; 
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'; 
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faAt } from '@fortawesome/free-solid-svg-icons'; 


import './index.css';

import image1 from './1.jpg';
const PaymentInformation = () => {
  return(
    <div>
      <div className="detail-information">
        <div className="left">
          <div className="detail-image">
          <img src={image1} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="payment">
            <div className="payment-top">Metode Pembayaran</div>
            <div>
              <div className="icon-detail"><FontAwesomeIcon icon={faCcMastercard}/></div>
              <div className="icon-detail"><FontAwesomeIcon icon={faCcVisa}/></div>
              <div className="icon-detail"><FontAwesomeIcon icon={faMoneyBill}/></div>
            </div>
          </div>
          <div className="contact-us">
            <div className="payment-bottom" >Kontak Kami</div>
            <div>
              <div className="icon-detail">
                <span className="wa"><FontAwesomeIcon icon={faWhatsapp}/></span>
                <span className="phoneNumber">081584991325</span>
              </div>
              <div className="icon-detail">
                <span className="email"><FontAwesomeIcon icon={faAt}/></span>
                <span className="emailName">rcsport@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
  </div>
  )
}

export default PaymentInformation;