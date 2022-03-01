import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer " style={{ position: "relative" }}>
        <div className="container">
          <div className="footer-main">
            <div className="footer-icon-content">
              <h2>NFT Gallery</h2>
              <p className="mt-2">
                <span className="pr-2">&copy;</span>2003 NFT Gallery
              </p>
            </div>
            <div className="footer-list-content">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="footer-titles">
                    <h2 className="mb-2">Our Platform</h2>
                    <div className="footer-links">
                      <ul>
                        <li>
                          <a href="aboutus.html">About us</a>
                        </li>
                        <li>
                          <a href="blogs.html">Blogs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="footer-titles">
                    <h2 className="mb-2">Connect with us</h2>
                    <div className="footer-links">
                      <ul>
                        <li>
                          <a href="#">Instagram</a>
                        </li>
                        <li>
                          <a href="#">Facebook</a>
                        </li>
                        <li>
                          <a href="#">Youtube</a>
                        </li>
                        <li>
                          <a href="#">Linkedin</a>
                        </li>
                        <li>
                          <a href="#">Twitter</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="footer-titles">
                    <h2 className="mb-2">LEGAL</h2>
                    <div className="footer-links">
                      <ul>
                        <li>
                          <a href="guidline.html">Community Guidelines</a>
                        </li>
                        <li>
                          <a href="service.html">Terms of services</a>
                        </li>
                        <li>
                          <a href="policy.html">Price Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="footer-titles">
                    <h2 className="mb-2">Contact</h2>
                    <div className="footer-links">
                      <ul>
                        <li>
                          <a href="mailto:nftgallery@gmail.com">
                            nftgallery@gmail.com
                          </a>
                        </li>
                        <li>
                          <a href="support.html">Support</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
