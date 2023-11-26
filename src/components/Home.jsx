import React from "react";
import Products from "./Products";

const Home = () => {

    return (
        <div className="hero">

            <div className="card bg-dark text-white border-0">
                <img className="card-img" src="/asset/bag.jpg" alt="Backround" height="550 px" />
                <div className="card-img-overlay d-flex flex-column justify-content-around">
                    <div className="container">
                    <h5 className="card-title text-black display-3 fw-bolder mb-0"  >NEW SEASON FRIK</h5>
                    <p className="card-text text-black lead fs-2"> 
                    CHECK OUT ALL THE TRENDS
                    </p> 
                     
                    </div>
                    
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home;