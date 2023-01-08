import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function () {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="stats-counter" className="stats-counter">
    <div className="container" data-aos="zoom-out" >

      <div className="row gy-4">

        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">80</span>
            <p>Clients</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">80</span>
            <p>Projects</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter">80</span>
            <p>Hours Of Support</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">10</span>
            <p>Workers</p>
          </div>
        </div>

      </div>

    </div>
  </section>

  )
}
