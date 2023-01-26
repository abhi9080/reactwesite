import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) =>{
  return(
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
              <div className="col-10 mx-auto">
                <div className="row"> 
                  <div className="col-md-6 pt-5 pt-lg-0 order-2  order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                        {props.headName}
                        <strong className="brand-name">TechVerse</strong>
                    </h1>
                    <h2 className="my-3">We provide various courses</h2>
                    <div className="mt-3">
                      <NavLink to={props.btnLink} className="btn btn-outline-primary">{props.btnName}
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 img_div">
                      <img src={props.imgSrc} className="img-fluid" alt="comman img"/>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common;