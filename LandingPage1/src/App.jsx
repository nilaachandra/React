import "./App.css";

const App = () => {
  return (
    <div className="main">
      <nav>
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png"
            alt="logo"
          ></img>
        </div>
        <div className="links">
          <a href="#">Menu</a>
          <a href="#">Location</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <button>Login</button>
      </nav>
      <div className="container">
        <div className="left">
          <div className="heading"><h1>YOUR FEET DESERVE THE BEST</h1></div>

          <div className="paragraph"><p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p></div>
          <div className="btn">
            <button id="one">Shop Now</button>
            <button id="two">Get Offers</button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ab894b27c85c41768a40af830083f6ef_9366/CYBERRUN_SHOES_Green_GC0916_01_standard.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default App;
