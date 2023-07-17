import React from 'react'

const Footer = () => {
  return <footer>
    <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
    </div>
    <div>
        <h5>Follow us</h5>
        <div>
            <a class="social-icon" href="https://www.youtube.com/channel/UCwhBkxDNjW7Ax2FL4XRsdXw" target={"blank"}>
            <ion-icon name="logo-youtube"></ion-icon>
                </a>
            <a class="social-icon"href="https://www.linkedin.com/in/aditya-kumar-929902217/" target={"blank"}>
            <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            <a class="social-icons" href="https://github.com/adi0193" target={"blank"}>
            <ion-icon name="logo-github"></ion-icon>
                </a>
        </div>
    </div>
  </footer>
};

export default Footer;