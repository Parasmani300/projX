import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment } from 'firebase/database';
import { decrement } from '../reducer/actions';

const mapStateToProps = (state) => {
  return {
    avaiableOption: state.avaiableOption
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (payload) => dispatch(increment(payload)),
    decrement: (payload) => dispatch(decrement(payload))
  }
}


function MenuItems(props) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="menu" className="menu">
    <div className="container" data-aos="fade-up" >

      <div className="section-header">
        <h2>Our Plans</h2>
        <p>Select from <span>our Basket</span></p>
      </div>

      <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200" >

        <li className="nav-item">
          <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
            <h3 className='text-primary'>Birthday</h3>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
            <h3 className='text-primary'>Anniversary</h3>
          </a>
        </li>
      </ul>

      <div className="tab-content" data-aos="fade-up" data-aos-delay="300" >

        <div className="tab-pane fade active show" id="menu-starters">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Birthday</h3>
          </div>

          <div className="row gy-5">
            {props.avaiableOption['birthday'].map((item) =>{
            return <div className="col-lg-4 menu-item">
              <Link to="/options" state={{check:"working",type:item.type,name:item.name}}  className="glightbox"><img src={item.logo_url} className="menu-img img-fluid" alt="" /></Link>
              <h4>{item.name}</h4>
              <p className="ingredients">
                {item.tags[0]}
              </p>
            </div>})}
          </div>
        </div>

        <div className="tab-pane fade" id="menu-breakfast">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Anniversary</h3>
          </div>

          <div className="row gy-5">

            {props.avaiableOption['anniversary'].map((item) => { return <div className="col-lg-4 menu-item">
              <Link to="/options" state={{check:"working",type:item.type,name:item.name}} className="glightbox"><img src={item.logo_url} className="menu-img img-fluid" alt="" /></Link>
              <h4>{item.name}</h4>
              <p className="ingredients">
                {item.tags[0]}
              </p>
            </div>})}
          </div>
        </div>

      </div>

    </div>
  </section>

  )
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuItems)