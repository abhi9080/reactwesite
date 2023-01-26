import React from 'react'


const Card = (props) =>{
    return(
        <>
            <div className="col-md-4 col-10 mx-auto">
              <div className="card" style={{width:"18rem"}}>
                <img src={props.cimg} className="card-img-top" alt="" style={{height:"12rem"}}/>
                <div className="card-body">
                    <h5 className="card-title text-center fw-bold">{props.cname}</h5>
                </div>
                </div>
              </div>
        </>
    )
}
export default Card;