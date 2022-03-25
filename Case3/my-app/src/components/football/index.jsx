import './index.css';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import image11 from './images/11.jpg';
import image12 from './images/12.jpg';
import image13 from './images/13.jpg';
import image14 from './images/14.jpg';
import image15 from './images/15.jpg';
const Football = () => {
  return(
    <div>
      <div className="list">
        <div className="box">
          <div className="picture"> <img src={image1} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Real Madrid(H) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Real Madrid Home Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image2} alt="" /></div>
          <div className="detail">
          <div className="nama">Nike Barcelona(H) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Barcelona Home Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image3} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Bayern Munchen(H) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Bayern Munchen Home Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image4} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Man. United(H) 21-22</div>
            <div className="price">Rp. 700.000</div> 
            <div className="keterangan">This is Man. United Home Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image5}  alt=""/></div>
          <div className="detail">
          <div className="nama">Puma Man. City(H) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Man. City Home Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image6} alt="" /></div>
          <div className="detail">
          <div className="nama">Nike Liverpool(H) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Liverpool Home Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image7} alt="" /></div>
          <div className="detail">
          <div className="nama">Nike Chelsea(H) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Chelsea Home Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image8} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Real Madrid(A) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Real Madrid Away Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image9} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Man. United(A) 21-22</div>
            <div className="price">Rp. 700.000</div> 
            <div className="keterangan">This is Man. United Away Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image10} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Arsenal(T) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Arsenal Third Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image11} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Bayern Munchen(T) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Bayern Munchen Third Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image12} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Bayern Munchen(H) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Bayern Munchen Away Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image13} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Man. United(T) 21-22</div>
            <div className="price">Rp. 700.000</div> 
            <div className="keterangan">This is Man. United Third Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image14}  alt=""/></div>
          <div className="detail">
          <div className="nama">Nike Barcelona(A) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Barcelona Away Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
        <div className="box">
          <div className="picture"> <img src={image15} alt="" /></div>
          <div className="detail">
          <div className="nama">Adidas Real Madrid(T) 21-22</div>
            <div className="price">Rp. 700.000</div>
            <div className="keterangan">This is Real Madrid Third Kit</div>
            <button className="buy">Buy</button>
          </div>
        </div>
      </div>
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a className="active" href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  )
}
export default Football;