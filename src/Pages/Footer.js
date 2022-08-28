// import static Files

import "./PagesStyles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="company-intro">
        <h4 className="footer-head">BENCH.</h4>
        <br />
        <p className="footer-text">Copyright &copy; Bench.</p>
        <br />
        <p className="footer-text">
          © 2021 True and Natural Company OÜ.
          <br />
          All rights reserved.
        </p>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="about-us">
        <h4 className="footer-head">ABOUT</h4>
        <br />
        <p className="footer-text">SHIPPING AND RETURNS</p>
        <br />
        <p className="footer-text">BLOG</p>
        <br />
        <p className="footer-text">CONTACT US</p>
        <br />
        <br />
        <br />
      </div>
      <div className="policies">
        <h4 className="footer-head">POLICIES</h4>
        <br />
        <p className="footer-text">PRIVACY POLICY</p>
        <br />
        <p className="footer-text">TERMS AND CONDITIONS</p>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="hey">
        <h4 className="footer-head">HEY!</h4>
        <br />
        <p className="footer-text">
          Enter your email to stay in the loop
          <br />
          on new collections, pop-up shows
          <br />
          and more.
        </p>
        <br />
        <form>
          <input
            type="email"
            placeholder="Enter your email address"
            className="footer-input"
          />
          <br />
          <br />
          <input type="submit" value="SUBMIT" className="footer-submit" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
