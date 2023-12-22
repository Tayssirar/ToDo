import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios'
import LottieGif from '../Components/LottieGif'
import animationRegister from '../assets/animationRegister.json'

export default function Register() {

  const [firstname, setFirstName] = React.useState("")
  const [lastname, setLastName]= React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword]= React.useState("")
  const navigate = useNavigate();

  const handleSubmit= async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:4000/api/v1/user", { firstname, lastname,email, password })
          .then(response => {
              console.log(response);

              localStorage.setItem('userData',JSON.stringify(response.data.data));
              navigate("/todoPage");
          })
  } catch (error) {
      console.error('There was an error!', error);
  }
  }


  return (
    <div>
    <Navbar/>
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-70">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body ">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-3">Register</p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>

                      <input id="form3Example1c" 
                      className="form-control"
                      placeholder="enter your first name"
                      type="text" 
                      value={firstname}
                      onChange={e => setFirstName(e.target.value)} />
                    </div>
                  </div>


                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example2c">Your Last name</label>
                      <input  id="form3Example2c" 
                      className="form-control"
                      placeholder="enter your last name"
                      type="text" 
                      value={lastname}
                      onChange={e => setLastName(e.target.value)} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                      <input id="form3Example3c" 
                      className="form-control"
                      placeholder="Enter email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                      <input  id="form3Example4c" 
                      className="form-control" 
                      placeholder="*******"
                      type="password" 
                      value={password}
                      onChange={e => setPassword(e.target.value)}/>
                    </div>
                  </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" value="Register" className="btn btn-primary btn-lg">Register</button>
                    </div>
                    <small className="form-text text-muted d-flex justify-content-center"> Have already an account? <a href='/'>Login here</a></small>
                    </form>

                    </div>
                    <div className=" col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center h-100 order-1 order-lg-2">
                    <LottieGif illustration={animationRegister} width={800} height={350}/>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    
    </div>
  );
}
