import React from 'react'
import "./home.css"

function Footer() {
  return (
    <div>
        <section class="container-fluid footer-main">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="about-foot">
                        <img src="./images/footer/foot-logo.png"/>
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua</p>
                    </div>
                    <div class="social-footer">
                        <a href="#"><img src="./images/footer/fb-foot.png"/></a>
                        <a href="#"><img src="./images/footer/tw-foot.png"/></a>
                        <a href="#"><img src="./images/footer/in-foot.png"/></a>
                        <a href="#"><img src="./images/footer/li-foot.png"/></a>
                    </div>

                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="about-foot quick-foot">
                        <h3>Quick View</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Tarck&Trace </a></li>
                            <li><a href="#">Contact Us </a></li>
                        </ul>
                    </div>


                </div>
                <div class="col-md-3 col-sm-3 col-xs-12  address-foot">
                    <h3>Contact Us</h3>
                    <p>Phone: +1 234 567 9332
                    </p>
                    <p>Email: info@company.com
                    </p>
                    <p>Fax: +1 342 422 5314</p>
                    <img src="./images/footer/apple.png"/> <img src="./images/footer/googleplay.png"/><br/>
                    <img class="pay-icon" src="./images/footer/pay_icon.png"/>

                </div>
                <div class="col-md-3 col-sm-3 col-xs-12 address-foot">
                    <h3>Location</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.6509571649!2d54.94755420360506!3d25.075759453986667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1643879662119!5m2!1sen!2sin"
                                 allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center copy-right">
                    <p>© Copyright 2022 GSL, All Right Reserved.Web design | Alwafaa group, Dubai </p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Footer
