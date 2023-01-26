import React, { useState } from "react";


const Contact = () => {
  const[inputData, setInputData] = useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })

  const changeInput = (event) =>{
    const{name, value} = event.target;
    setInputData((preVal)=>{
      return {...preVal, [name]:value}
    })
  }

  const formSubmit = (event)=>{
    event.preventDefault();
    console.log(`${inputData.name} ${inputData.email} ${inputData.phone} ${inputData.message}`)
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" name="name" onChange={changeInput} value={inputData.name} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" name="email" onChange={changeInput} value={inputData.email} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" name="phone" onChange={changeInput} value={inputData.phone} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={changeInput} value={inputData.message}></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;