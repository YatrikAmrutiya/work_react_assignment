import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function FeaturesArt() {
  const responsive = {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
    },
  };

  let Artsdata = require("../data/Arts.json");

  const items = Artsdata.map((art) => {
    return <div class="item" >
      <a href="artlist-b-login.html">
        <div class="art-text">
          <img src={require(`../assets/images/${art.image}`)} alt="" />
          <div class="feature-text justify-content-start">
            <div class="d-flex flex-column align-items-start featured-text">
              <h3>{art.gallery_name}</h3>
              <p>{art.Art_name}</p>
              <p>{art.category}</p>
              <h5>{art.price}</h5>
            </div>
          </div>
        </div>
      </a>
    </div>
  })


  return (
    <div>
      <div className="container-fluid  ">
        <div className="feature-all">
          <div className="featured-content">
            <h2>Featured Art</h2>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <OwlCarousel
          className="owl-theme"
          loop
          nav
          margin={35}
          dots={false}
          lazyLoad={true}
          autoplay={true}
          responsive={responsive}
        >
          {items}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default FeaturesArt;
