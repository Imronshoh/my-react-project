import './App.css';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/img1.jpg'
import image2 from './img/img2.png'
import image3 from './img/img3.png'



function App() {

  return (
    <div className="App">
      <header class="header"><div class="container"><nav class="nav"><h2 class="nav__title"><a href="#">Imron</a></h2><ul class="nav__list"><li class="nav__item"><a href="#">Home</a></li><li class="nav__item"><a href="#">About</a></li><li class="nav__item"><a href="#">Contact</a></li><li class="nav__item"></li></ul></nav></div></header>
      <section className="hero">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={image1} className='sliderimg' alt="" />
          <img src={image2} className='sliderimg' alt="" />
          <img src={image3} className='sliderimg' alt="" />
        </AliceCarousel>
      </section>
      <section className="products">
        <div className="container">
          <h1>Products</h1>
          <ul className="products__list">
            <li className="products__item"><img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              <h5>Fjallraven</h5>
              <p>Your perfect pack for everyday use and walks in

              </p>
              <h2>$109.95

              </h2>
            </li>
            <li className="products__item"><img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
              <h5>Mens Casual</h5>
              <p>Slim-fitting style, contrast raglan long sleeve</p>
              <h2>$22.3</h2>
            </li>
            <li className="products__item"><img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
              <h5>Mens Cotto
              </h5>
              <p>great outerwear jackets for Spring/Autumn/Winter

              </p>
              <h2>$55.99

              </h2>
            </li>
          </ul>
          <ul className="products__list2">
            <li className="products__item"><img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
              <h5>Mens Clothing</h5>
              <p>The color could be slightly different between on

              </p>
              <h2>$15.99</h2>
            </li>
            <li className="products__item"><img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
              <h5>Mens Casual</h5>
              <p>Slim-fitting style, contrast raglan long sleeve</p>
              <h2>$22.3</h2>
            </li>
            <li className="products__item"><img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
              <h5>Mens Casual</h5>
              <p>Slim-fitting style, contrast raglan long sleeve</p>
              <h2>$22.3</h2>
            </li>
          </ul>
        </div>
      </section>
      <footer class="footer">
        <div className="container">
          <h1 class="text-center">© Made by ImronShoh Inc.</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
