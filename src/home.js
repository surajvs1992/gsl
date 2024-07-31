import React from 'react'
import "./home.css"
import bannerone from "./images/banner-one.png"


function Home() {
  return (
    <div>
        
<section class="banner">

<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="img-fluid" src={bannerone}/>

            <div class="container">
                <div class="carousel-caption text-start col">
                    <h1>cargo and courier service. <br/>
                        better and faster<br/>
                        solution!<br/>
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem
                        Ipsum has been the industry's standard dummy text ever <br/>since the 1500s</p>
                    <p><a class="btn btn-lg btn-primary ban-bt" href="#">Get in touch with us</a></p>
                </div>
            </div>
        </div>
        <div class="carousel-item">
        <img class="img-fluid" src={bannerone}/>

            <div class="container">
                <div class="carousel-caption text-start col">
                    <h1>cargo and courier service.<br/>
                        better and faster<br/>
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem
                        Ipsum has been the industry's standard dummy text ever <br/>since the 1500s</p>
                    <p><a class="btn btn-lg btn-primary ban-bt" href="#">Get in touch with us</a></p>
                </div>
            </div>
        </div>
        <div class="carousel-item">
        <img class="img-fluid" src={bannerone}/>

            <div class="container">
                <div class="carousel-caption text-start col">
                    <h1>cargo and courier service. <br/>
                        better and faster<br/>
                        solution!
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem
                        Ipsum has been the industry's standard dummy text ever<br/> since the 1500s</p>
                    <p><a class="btn btn-lg btn-primary ban-bt" href="#">Get in touch with us</a></p>
                </div>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
</section>

        <section class="about-section">
        <div class="container">
            <div class="row">
                <div class=" about-left col-md-5 col-sm-5 col-xs-12">
                <img className='img-fluid' src='./images/about-left.png'/>
                </div>
                <div class="about-content col-md-6 col-sm-6 col-xs-12">
                    <p><i>Best courier service Company</i></p>
                    <h2>About Company</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s</p>

                    <ul class="points-main">

                        <li>
                            <h5>Lorem Ipsum</h5>
                            <p>We insure you from not doing our job as good as we promise.</p>
                        </li>

                        <li>
                            <h5>Lorem Ipsum</h5>
                            <p>We insure you from not doing our job as good as we promise.</p>
                        </li>

                        <li>
                            <h5>Lorem Ipsum</h5>
                            <p>We insure you from not doing our job as good as we promise.</p>
                        </li>
                    </ul>
                    <p class="more-main"><a class="btn btn-lg btn-primary more-bt" href="#">More Info</a></p>
                </div>
            </div>
        </div>
    </section> 

    <section class="container-fluid track-section">
        
        <div class="container track-search">
            <h1> Track Your Shipment
            </h1>
            <nav class="navbar navbar-light ">
                <div class="col-md-10 col-sm-10 col-xs-12">
                    <form class="d-flex">
                        <input class="form-control me-2 track-plugin" type="search" placeholder="Invoice code"
                            aria-label="Search"/>
                        <button class="btn  col-md-2 col-sm-2 col-xs-12 track-now" type="submit">Track Now</button>
                    </form>
                </div>
            </nav>
        </div>
    </section>

    
    </div>
  )
}

export default Home
