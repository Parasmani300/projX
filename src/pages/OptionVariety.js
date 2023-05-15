import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLocation } from 'react-router-dom';
import { decrement, increment } from '../reducer/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    count: state.count,
    economy_birthday: state.economy_birthday,
    premium_birthday: state.premium_birthday,
    luxurious_birthday: state.luxurious_birthday,
    economy_anniversary: state.economy_anniversary,
    premium_anniversary: state.premium_anniversary,
    luxurious_anniversary: state.luxurious_anniversary
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (payload) => dispatch(increment(payload)),
    decrement: (payload) => dispatch(decrement(payload))
  }
}

function OptionVariety(props) {

  const location = useLocation();
  const {type,name} = location.state;

  const fetchType = (eType,eName) => {
    if(eType === 'birthday'){
      if(eName === 'economy'){
          return props.economy_birthday
      }else if(eName === 'premium'){
        return props.premium_birthday
      }else if(eName === 'luxurious'){
        return props.luxurious_birthday
      }
    }else if(eType === 'anniversary'){
      if(eName === 'economy'){
        return props.economy_anniversary
      }else if(eName === 'premium'){
        return props.premium_anniversary
      }else if(eName === 'luxurious'){
        return props.luxurious_anniversary
      }
    }
  }

  
    useEffect(()=>{
        AOS.init();
    },[]);

  return (
    <div className='container' style={{marginTop:"120px"}}>
        <div className='row'>
        <div className="section-header">
        <h2>Our Plans</h2>
        <p>Select from <span>our {name} {type} Basket</span></p>
      </div>
        {fetchType(type.toLowerCase(),name.toLowerCase()).map((item,k) =>{
            return <div key={k} className="col-lg-4 menu-item">
              <Link to="/details" state={{check:"working",item:item}}  className="glightbox"><img src={item.logo_url} className="menu-img img-fluid" alt="" style={{"height":"200px","width":"400px"}} /></Link>
              <h4>{item.name}</h4>
              <p className="ingredients">
                {item.tags[0]}
              </p>
              <p className="price">
                {item.price}
              </p>
            </div>})}
        </div>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(OptionVariety);
