// import static Files
import Footer from "./Footer";
import "./PagesStyles/About.css";

const About = () => {
  const title = "OUR STORY - Bench";
  document.title = title;
  return (
    <div className="About">
      <h3>OUR STORY</h3>
      <div className="story-flex">
        <img
          src="https://cdn.shopify.com/s/files/1/0498/8764/1749/files/233_600x.png?v=1615903867"
          alt="Bench Image"
        />
        <div className="story-text">
          <h4>BENCH</h4>
          <p>
            Everyday life got complicated, so we at <strong>Bench</strong>{" "}
            strive for <strong>simplicity</strong>. We made a conscious decision
            to go back to the basics with our products: natural, non-toxic
            ingredients that are integral to Ayurveda (based on over five
            thousand years of science that we really believe in).
            <br /> We want you to be able to focus on the most important things
            in your life and trust us to give you{" "}
            <strong>
              the most natural, simple and effective skincare products.
            </strong>{" "}
            Our promise is that we will always be honestand transparent.
            <br />
            <br />
            Our name <strong>Bench (नलिन) means lotus in sanskrit.</strong> The
            lotus flower has strong symbolism of purity inIndian culture and its
            flower blooms even in muddy and dirty water.{" "}
            <strong>
              Nalen Ayurveda products protect and nourish your skin to ensure
              it’s always cherished no matter what the external environment,
              just like the lotus flower.
            </strong>
          </p>
        </div>
      </div>
      <div className="founders-div">
        <h3>OUR FOUNDERS</h3>
        <p className="founders-text">
          Valentina Santamaria and Namrata Sandhu are the founders of Nalen
          Ayurveda. They previously lived in London where they met and formed
          Nalen Ayurveda out of a mutual passion for helping people live a
          healthy, balanced and happy life.
        </p>
        <img
          src="https://cdn.shopify.com/s/files/1/0498/8764/1749/files/founders-01_6f4dad78-1cee-4ce0-90a0-d68de2a2e158_2048x2048.png?v=1615906038"
          alt="First Founder"
        />
        <div className="founders-text-div">
          <p className="first">
            Valentina grew up in Caracas, Venezuela and has previously lived in
            the U.K. and currently lives in Barcelona.
            <br />
            <br />
            She is a practicing Cardiac Physiologist. She is extremely
            interested in the cross-section of healthy living in disease
            prevention.
            <br />
            <br />
            As a specialist in cardiovascular imaging and rehabilitation, she
            wanted to complement western medicine with holistic treatments and
            found a love for Ayurvedic healing and skincare.
            <br />
            <br />
            She brings her extensive knowledge in medicine and disease
            prevention.
          </p>
          <p className="second">
            Namrata is from India and has spent time living in the United
            States, London, Madrid and currently lives in Berlin.
            <br />
            Growing up in India, Ayurveda was an integral part of her life from
            skin care to diet and lifestyle.
            <br />
            <br />
            She has spent her career working in sustainability and wanted to
            find a way to connect her roots from India and her knowledge of
            building better businesses.
            <br />
            <br />
            She brings 17 years of experience working in sustainability helping
            brands and companies build more ethical and sustainable businesses.
          </p>
        </div>
        <hr className="founders-line" />
        <div className="final-text">
          We wanted the colours and products to bring you the feeling of
          balance, harmony and tranquillity, the way we want you to feel, every
          day and every single time you pick up a Bench product.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
