import React from 'react'
import {useNavigate} from "react-router-dom"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "../styles/Login.css"
import axios from 'axios'
import LottieGif from '../Components/LottieGif'
import animation_login from '../assets/animation_login.json'

export default function Login() {


  const [email, setEmail] = React.useState("")
  const [password, setPassword]= React.useState("")
  const navigate = useNavigate();

  const handleSubmit= async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {

      await axios.post("http://localhost:4000/api/v1/login", { email, password })              
              .then(response => {
               
                // Store the user's Data in localStorage
                localStorage.setItem('userData',JSON.stringify(response.data.data)); 
                navigate("/todoPage");
            })
             
          } catch (error:any) {
            console.error('There was an error!', error);
                alert(error.response.data.message);
            
        }
      }
  return (
    <div className="Login" style={{ backgroundColor: '#eee' ,backgroundSize: "cover", minHeight: "100vh" }}>
      <Navbar/>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-2">
                  <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <img
                            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                            alt="profile-img"
                            className="profile-img"
                          />
                          <p className="text-center h1 fw-bold mb-3">Sign In</p>
                          <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                            <div className="form-group  ">
                              <label >Email address</label>
                              <input className="form-control" placeholder="Enter email"
                              type="email"
                              value={email}
                              onChange={e => setEmail(e.target.value)}>
                              </input>
                              <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group ">
                              <label >Password</label>
                              <input className="form-control"  placeholder="Password"
                              type="password" 
                              value={password}
                              onChange={e => setPassword(e.target.value)}>
                              </input>
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" value="Login" className="btn btn-primary " >Submit</button>
                            </div>
                            <small className="form-text text-muted d-flex justify-content-center">Not a member? <a href="/Register">Register</a> </small>
                            
                          </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <LottieGif illustration={animation_login} width={500} height={500}/>
                        </div>
                      
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}



