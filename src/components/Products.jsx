import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import {  NavLink,} from "react-router-dom";


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loding, setLoding] = useState(false);

    let componentMounted = true;

    useEffect(() => {

        const getProudcts = async () => {
            setLoding(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setfilter(await response.json());
                setLoding(false);
                console.log(filter);

            }

            return () => {
                componentMounted = false;
            }
        }
        getProudcts();

    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">

                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">

                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">

                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">

                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProduct=(cat)=>{
        const updateListe=data.filter((x)=>x.category===cat);
        setfilter(updateListe);
    }

    const ShowProducts = () => {

        return (
            <div>


              
                <div className="row">
                {filter.map((product) => {
                    return (
                        <>
                        
                            <div className="col-md-3">

                                <div class="card h-100 text-center p-4" key={product.id} >
                                    <img class="card-img-top" src={product.image} alt={product.title} height="250 px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bold"> ${product.price} </p>
                                        <NavLink to={`/products/${product.id} `} className="btn btn-outline-dark"> Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                         
                        </>
                    )
                }   )} 
                </div>
              
                


            </div>
        )
    }

    return (

        <div>

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">  Later Products</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loding ? <Loading /> : < ShowProducts />}
                </div>
            </div>
        </div>
    )
}
export default Products;