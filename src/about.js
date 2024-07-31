import React from 'react'
import "./about.css"

function About() {
  return (
    <div>
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

                   
                    <p class="more-main"><a class="btn btn-lg btn-primary more-bt" href="#">More Info</a></p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
