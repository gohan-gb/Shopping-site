import React from 'react';
import "../styles/mainFirst.css";
import "../styles/mainSecond.css";
import "../styles/mainMid.css";
import imageOne from "../assets/art-2.jpg";
import imageTwo from "../assets/art-3.jpeg";
import imageMid from "../assets/art-4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <main class='mainOne'>
        <div class='gradient'>
        <section>
          <p class='mainFirstPOne'> <noBr> Be Creative  With  Your Art </noBr> </p>
          <p class='mainFirstPTwo'> Use the best art supplies that levels your works up !</p>
          <Link to='/shop'><button class='mainFirstBtn'> visit shop </button></Link>
        </section>
        </div>
      </main>

      <main class='mainMid'>
          <section>
            
            <p class='p1'>
            "Whether you're a seasoned professional or a budding enthusiast, our selection caters to all skill levels and preferences. Dive into a world of possibilities with our high-quality brushes, canvases, sketchbooks, and more, carefully curated to elevate your artistic journey."
            </p>
          </section>
          <section>
            <img src={imageMid} alt="Artist" />
          </section>
          <section>
          <Link to='/aboutus'><button class="mainMidBtn"> about us </button></Link>
          <p class='p2'>
          "Indulge in the freedom of creation and let your imagination run wild. With our superior quality and affordable prices, there's no limit to what you can achieve.

          Visit us today and unleash the artist within!"
          </p>
          </section>
        </main>

        <main class='mainTwo'>
        <div class='imageOne'>
          <img src={imageOne} alt="art" />
        </div>
        <article>
          <h1>"Unlock Your Creativity : Explore Our Premium Art Supplies Collection!"</h1>
          <p>
            Discover the joy of self-expression with our exquisite range of art supplies. From vibrant acrylic paints to delicate watercolors, we offer everything an artist needs to bring their imagination to life.
          </p>
          <Link to='/contact'><button class="mainTwoBtn"> contact </button> </Link>
        </article>
        <img class='imageTwo' src={imageTwo} alt="art" />
        </main>
    </div>
  )
}

export default Home