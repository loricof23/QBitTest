import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons' ;
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import Football from './football';
import Cover from './cover';
import Footer from './footer';
import Info from './navbar';
import './App.css';
import PaymentInformation from './paymentInformation';

const App = () => {
  return (
    <div className="content">
      <header className="header">
          <div className="name">RC Sport</div>
          <input type="text" className="search"></input>
          <div className="account">
            <div className="profile"></div>
          </div>
            <select className="languages">
              <option value="id">ID</option>
              <option value="ed">EN</option>
            </select>
          <div className="cart"><FontAwesomeIcon icon={faShoppingCart}/> Cart</div>
          <div className="login"><FontAwesomeIcon icon={faUser}/> Login</div>
      
      </header>
      <div>
        <Info/>
      </div>
      
      <div>
        <Cover/>
      </div>
      <div className="info">
        <ul className="list">
          <li>
            <div className="icon"><FontAwesomeIcon icon={faHourglass}/></div>
            <div>Everyday Open</div>
          </li>
          <li>
            <div className="icon">{<FontAwesomeIcon icon={faTruck}/>}</div>
            <div>Fast response and delivery</div>
          </li>
          <li>
            <div className="icon"><FontAwesomeIcon icon={faLock} /></div>
            <div>Payment secured</div>
          </li>
        </ul>
      </div>
      <div>
        <Football/>
      </div>
      <div>
        <PaymentInformation/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
