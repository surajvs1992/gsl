
import './App.css';
import "./header.css"
import facebook from "./images/fb.png"
import twitter from "./images/tw.png"
import insta from "./images/insta.png"
import linkedin from "./images/lin.png"
import mainlogo from "./images/main-logo.png"
import { Link, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Track from './track';
import Footer from './footer';


function App() {
  return (
    <div>
       <section className="header-main fixed-top">
         <div className="header-top ">
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <ul className="mail-section">
                            <li><a href="mailto:info@gslxpress.com">Email: info@gslxpress.com</a></li>
                            <li><a href="tel:+13424229029"> Phone: +1 342 422 9029</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="social-media">
                            <ul>
                                <li><a href="#"><img src={facebook}/></a></li>
                                <li><a href="#"><img src={twitter}/></a></li>
                                <li><a href="#"><img src={insta}/></a></li>
                                <li><a href="#"><img src={linkedin}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark bg-theme " aria-label="Eighth navbar example">
                <div class="container">
                    <div class="col">
                        <a class="navbar-brand" href="#"><img src={mainlogo}/></a>
                        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div class="col ">
                        <div class="navbar-collapse collapse float-end" id="navbarsExample07">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li class="nav-item">
                                    <a  class="nav-link active" aria-current="page" href="">
                                        <Link to={"/"}> Home </Link> 
                                      </a>
                                 </li>
                                <li class="nav-item">
                                    <a  class="nav-link" href=""><Link to={"/about"}>About Us</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=""><Link to={"/track"}>Track&Trace</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a  class="nav-link" href=""> <Link to={"/contact"}> Contact US</Link></a>
                                </li>
                              
                                {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown"
                                        aria-expanded="false">Dropdown</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdown07">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>  */}
                            </ul>

                        </div>
                    </div>


                </div>
            </nav>
        </div>
        </section> 
                             <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/track" element={<Track/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                              </Routes>

                                <div>
                                    <Footer/>
                                </div>
                              
 
    </div>
    
  );
}

export default App;
