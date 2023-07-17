import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechnoTrail</h1>
            <p>Solution to all your problems</p>
        </main>
        </div>

        <div className="home2">
          <img src={vg} alt="Graphics" />
          <div>
            <p>We are your one and only one solution to use tech problems you face everyday.
              We are leading tech company whose aim is to increase the problem solving ability iin children.</p>
          </div>
        </div>

        <div className="home3" id='about'>
          <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vero quos minima fuga cupiditate corrupti. Veniam architecto ut laudantium earum nostrum autem esse, tenetur obcaecati omnis in impedit quas fuga?</p>

          </div>
        </div>


        <div className='home4' id='brands'>
          <div>
            <h1>Brands</h1>

            <article>
              <div style={{
                animationDelay:"0.3s",
              }
              }>
                {/* <AiFillGoogleCircle/> */}
                <p><a href="https://www.google.com/" target='blank'><AiFillGoogleCircle/></a></p>

              </div>

              <div style={{
                animationDelay:"0.5s",
              }
              }>
                {/* <AiFillInstagram/> */}
                <p><a href="https://www.instagram.com/" target='blank'><AiFillInstagram/></a></p>

              </div>


              <div style={{
                animationDelay:"0.7s",
              }
              }>
                {/* <AiFillAmazonCircle/> */}
                <p><a href="https://www.amazon.in/primeday?ref_=PD23_FT_ACQ_H1_PC&pf_rd_r=AJEZ2Z2GC07XDJFD9VHQ&pf_rd_p=2da44a63-2c85-4656-b59d-e888718de86a&pd_rd_r=6b8cab7c-1b82-433e-8b96-516ed02a46f3&pd_rd_w=vhjqa&pd_rd_wg=1wssB&tag=googmantxtmob170-21&ascsubtag=_k_Cj0KCQjwqs6lBhCxARIsAG8YcDhon2sdGiWWzxfHzriHcaOUqbJfY-oE5mgPo3gnoqGRAK1LasxsIdsaAr7LEALw_wcB_k_&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDhon2sdGiWWzxfHzriHcaOUqbJfY-oE5mgPo3gnoqGRAK1LasxsIdsaAr7LEALw_wcB" target="blank"><AiFillAmazonCircle/></a></p>
              </div>

              <div style={{
                animationDelay:"0.8s",
              }
              }>
                {/* <AiFillYoutube/> */}
                <p><a href="https://www.youtube.com/" target="blank"><AiFillYoutube/></a></p>

              </div>
            </article>
          </div>
        </div>
        </>
        
  );
};

export default Home 