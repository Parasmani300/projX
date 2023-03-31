import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function MenuItems() {
  useEffect(() => {
    AOS.init();
  }, [])

  const avaiableOption = {
    birthday:[
      {
        name:"Economy",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/1.png?alt=media&token=cdcd102c-d3ba-47fe-9886-c3662179a22d",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/1.png?alt=media&token=cdcd102c-d3ba-47fe-9886-c3662179a22d",
          tags:["Cake,Candal,Decorations"]
      },
      {
        name:"Premium",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/3.png?alt=media&token=e440e72f-fd6e-497b-b3aa-7d0607df0786",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/3.png?alt=media&token=e440e72f-fd6e-497b-b3aa-7d0607df0786",
          tags:["Cake,Candal,Decorations"]
      },
      {
        name:"Luxurious",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/4.png?alt=media&token=c03fe6d4-b535-4a2d-aeb1-d625587f7048",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/4.png?alt=media&token=c03fe6d4-b535-4a2d-aeb1-d625587f7048",
          tags:["Cake,Candal,Decorations"]
      }
    ],
    anniversary:[
      {
        name:"Economy",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/1.png?alt=media&token=cdcd102c-d3ba-47fe-9886-c3662179a22d",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/1.png?alt=media&token=cdcd102c-d3ba-47fe-9886-c3662179a22d",
          tags:["Cake,Candal,Decorations"]
      },
      {
        name:"Premium",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/3.png?alt=media&token=e440e72f-fd6e-497b-b3aa-7d0607df0786",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/3.png?alt=media&token=e440e72f-fd6e-497b-b3aa-7d0607df0786",
          tags:["Cake,Candal,Decorations"]
      },
      {
        name:"Luxurious",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/4.png?alt=media&token=c03fe6d4-b535-4a2d-aeb1-d625587f7048",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/4.png?alt=media&token=c03fe6d4-b535-4a2d-aeb1-d625587f7048",
          tags:["Cake,Candal,Decorations"]
      }
    ]
  }



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
            {avaiableOption['birthday'].map((item) =>{
            return <div className="col-lg-4 menu-item">
              <Link to="/details" state={{check:"working",item:item}}  className="glightbox"><img src={item.logo_url} className="menu-img img-fluid" alt="" /></Link>
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

        <div className="tab-pane fade" id="menu-breakfast">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Anniversary</h3>
          </div>

          <div className="row gy-5">

            {avaiableOption['anniversary'].map((item) => { return <div className="col-lg-4 menu-item">
              <Link to="/details" state={{check:"working",item:item}} className="glightbox"><img src={item.logo_url} className="menu-img img-fluid" alt="" /></Link>
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

      </div>

    </div>
  </section>

  )
}
