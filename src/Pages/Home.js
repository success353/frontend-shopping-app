// import modules
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

// import stactic Files
import "./PagesStyles/Home.css";

const Home = () => {
  const title = "Bench - Bench";
  document.title = title;
  const navigate = useNavigate();
  return (
    <>
      <div className="Home">
        <div className="Hero-text">
          <p>ASHWAGANDHA + TUMERIC</p>
          <br />
          <h2>HYDRATING FACE CREAM</h2>
          <br />
          <br />
          <button onClick={() => navigate("/shop")}>DISCOVER MORE</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
