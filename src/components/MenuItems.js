import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function MenuItems() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <section id="menu" className="menu">
    <div className="container" data-aos="fade-up" >

      <div className="section-header">
        <h2>Our Plans</h2>
        <p>Select from <span>our Birthday Basket</span></p>
      </div>

      <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200" >

        <li className="nav-item">
          <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
            <h4>Economy</h4>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
            <h4>Premium</h4>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
            <h4>Extra Premium</h4>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
            <h4>Luxurious</h4>
          </a>
        </li>

      </ul>

      <div className="tab-content" data-aos="fade-up" data-aos-delay="300" >

        <div className="tab-pane fade active show" id="menu-starters">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Economy</h3>
          </div>

          <div className="row gy-5">
            {[...Array(6)].map((i) =>{
            return <div className="col-lg-4 menu-item">
              <Link to="details" state={{check:"working"}}  className="glightbox"><img src="https://www.leanrawpune.com/assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Magnam Tiste</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $5.95
              </p>
            </div>})}

            {/* <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Aut Luia</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $14.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <a to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></a>
              <h4>Est Eligendi</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $8.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Laboriosam Direva</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $9.95
              </p>
            </div> */}

          </div>
        </div>

        <div className="tab-pane fade" id="menu-breakfast">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Premium</h3>
          </div>

          <div className="row gy-5">

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Magnam Tiste</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $5.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Aut Luia</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $14.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Est Eligendi</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $8.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Laboriosam Direva</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $9.95
              </p>
            </div>

          </div>
        </div>

        <div className="tab-pane fade" id="menu-lunch">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Extra Premium</h3>
          </div>

          <div className="row gy-5">

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Magnam Tiste</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $5.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Aut Luia</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $14.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Est Eligendi</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $8.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Laboriosam Direva</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $9.95
              </p>
            </div>

          </div>
        </div>

        <div className="tab-pane fade" id="menu-dinner">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Custom</h3>
          </div>

          <div className="row gy-5">

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Magnam Tiste</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $5.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Aut Luia</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $14.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Est Eligendi</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $8.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Eos Luibusdam</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $12.95
              </p>
            </div>

            <div className="col-lg-4 menu-item">
              <Link to="details" className="glightbox"><img src="https://themagnifico.net/demo/food-recipe-blog/wp-content/uploads/sites/12/2021/11/healthy2-2.png" className="menu-img img-fluid" alt="" /></Link>
              <h4>Laboriosam Direva</h4>
              <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
              </p>
              <p className="price">
                $9.95
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>

  )
}
