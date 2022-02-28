import React from "react";

function FilterSection() {

  let Artsdata = require("../data/Arts.json")

  const items = []

  for (const [index, art] of Artsdata.entries()) {
    items.push(
      <div className="col-lg-3 col-md-4 col-12">
        <a href="art-details-bli.html">
          <div className="art-text">
            <img src={`img/${art.image}`} alt="" />
            <div className="feature-text">
              <h3>
                {art.gallery_name}
              </h3>
              <p>
                {art.Art_name}
              </p>
              <p>
                {art.category}
              </p>
              <h5>{art.price}</h5>
            </div>
          </div>
        </a>
      </div>
    )
  }



  return (
    <>
      <div className="container-fluid main mb-0 pb-0">
        <div className="row">
          <div className="col-lg-12" >
            <div className="d-flex pb-3 pt-0 justify-content-between align-items-center ">
              <h2 className="filter-menu d-none d-desk-block">Filter </h2>
              <div className="filter-menu  d-desk-none" >
                <button className="btn">Filter by<i className="fa fa-filter" style={{ "margin-left": "2px" }} aria-hidden="true"></i></button>
              </div>
              <div className="accordion_select">
                <span id="whoFollow" className="general_text selectbox">
                  <select className="accordion_selectbox">
                    <option>Sort by</option>
                    <option>Recently added</option>
                    <option>Price: High to Low</option>
                    <option>Price: Low to High</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-3 col-md-4 sidebar  pb-5" id="filter">
            <div className="accordion" id="accordionExample">
              <div className="filter-by-close-menu  d-desk-none d-flex justify-content-between">
                <button type="" className="btn btn-primary">Apply</button>
                <button className="btn btn-secondary"><i className="fa fa-close" aria-hidden="true"></i></button>
              </div>
              <div className="d-flex pb-3 pt-0 justify-content-end">
                <div className="view-all">
                  <a href="#">Clear all</a>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingOne">
                  <h2 className="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Price
                  </h2>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="range-slider">
                      {/* <span className="rangeValues"></span> */}
                      <input value="1000" min="1000" max="50000" step="500" type="range" />
                      <input value="50000" min="1000" max="50000" step="500" type="range" />
                      <div className="d-flex justify-content-between pt-3">
                        <p>500</p>
                        <p>1000</p>
                      </div>
                    </div>
                    <div className="input-boxs">
                      <div className="range-box">
                        <label for="">Min Price</label>
                        <input type="text" name="" />
                      </div>
                      <div className="range-box">
                        <label for="">Max Price</label>
                        <input type="text" name="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingTwo">
                  <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Artist
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="form-group has-search">
                      <span className="fa fa-search form-control-feedback"></span>
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <div className="input_field checkbox_option">
                      <input type="checkbox" id="cb1a" />
                      <label for="cb1a" className="d-flex align-items-center">
                        <p className="mb-0">Artist 1</p>
                      </label>
                    </div>
                    <div className="input_field checkbox_option">
                      <input type="checkbox" id="cb2a" />
                      <label for="cb2a" className="d-flex align-items-center">
                        <p className="mb-0">Artist 1</p>
                      </label>
                    </div>
                    <div className="input_field checkbox_option">
                      <input type="checkbox" id="cb3a" />
                      <label for="cb3a" className="d-flex align-items-center">
                        <p className="mb-0">Artist 1</p>
                      </label>
                    </div>
                    <div className="input_field checkbox_option">
                      <input type="checkbox" id="cb4a" />
                      <label for="cb4a" className="d-flex align-items-center">
                        <p className="mb-0">Artist 1</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingThreeo">
                  <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThreeo" aria-expanded="false" aria-controls="collapseThree">
                    Rarity
                  </h2>
                </div>
                <div id="collapseThreeo" className="collapse" aria-labelledby="headingThreeo" data-parent="#accordionExample">
                  <div className="card-body">
                    fff
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingThreei">
                  <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThreei" aria-expanded="false" aria-controls="collapseThree">
                    Medium
                  </h2>
                </div>
                <div id="collapseThreei" className="collapse" aria-labelledby="headingThreei" data-parent="#accordionExample">
                  <div className="card-body">
                    fff
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingThreeu">
                  <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThreeu" aria-expanded="false" aria-controls="collapseThree">
                    Size
                  </h2>
                </div>
                <div id="collapseThreeu" className="collapse" aria-labelledby="headingThreeu" data-parent="#accordionExample">
                  <div className="card-body">
                    fff
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingThreet">
                  <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThreet" aria-expanded="false" aria-controls="collapseThree">
                    Ways to buy
                  </h2>
                </div>
                <div id="collapseThreet" className="collapse" aria-labelledby="headingThreet" data-parent="#accordionExample">
                  <div className="card-body">
                    fff
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingThreer">
                  <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThreer" aria-expanded="false" aria-controls="collapseThree">
                    Materials
                  </h2>
                </div>
                <div id="collapseThreer" className="collapse" aria-labelledby="headingThreer" data-parent="#accordionExample">
                  <div className="card-body">
                    fff
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingThreee">
                  <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThreee" aria-expanded="false" aria-controls="collapseThree">
                    Artist location
                  </h2>
                </div>
                <div id="collapseThreee" className="collapse" aria-labelledby="headingThreee" data-parent="#accordionExample">
                  <div className="card-body">
                    fff
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingThreea">
                  <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThreea" aria-expanded="false" aria-controls="collapseThree">
                    Time period
                  </h2>
                </div>
                <div id="collapseThreea" className="collapse" aria-labelledby="headingThreea" data-parent="#accordionExample">
                  <div className="card-body">
                    fff
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingb">
                  <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseb" aria-expanded="false" aria-controls="collapseThree">
                    Color
                  </h2>
                </div>
                <div id="collapseb" className="collapse" aria-labelledby="headingb" data-parent="#accordionExample">
                  <div className="card-body">
                    fff
                  </div>
                </div>
                <div className="card">
                  <div className="card-head pb-0" id="headingbd">
                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapsebd" aria-expanded="false" aria-controls="collapseThree">
                      Galleries or Art fairs
                    </h2>
                  </div>
                  <div id="collapsebd" className="collapse" aria-labelledby="headingbd" data-parent="#accordionExample">
                    <div className="card-body">
                      fff
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8" >
            <div className="row" id="sideimg">

              {items}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
