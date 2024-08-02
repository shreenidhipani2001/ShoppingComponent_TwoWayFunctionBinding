import { useState,useEffect } from "react";

export default function TwoWayBinding(){
    const [product,setProduct]=useState({Name:'',Price:0,City:'',Stock:false})
    const [newProduct,setnewProduct]=useState();
    /**
     * 1.user will give name,we have to access
     * we have to write so many functions
     * a.<input type="text" className="form-control " onChange={handleName} />
     */
    
    function handleName(e){//event arg 'e' will collect the handled name
        setProduct(
            {
                Name:e.target.value,
                Price:product.Price,
                City:product.City,
                Stock:product.Stock
                
            }
        )
    }
    function handlePrice(e){
        setProduct(
            {
                Name:product.Name,
                Price:e.target.value,
                City:product.City,
                Stock:product.Stock
                
            })
    }
    function handleCity(e){
        setProduct(
            {
                Name:product.Name,
                Price:product.Price,
                City:e.target.City,
                Stock:product.Stock
                
            })
    }
    function handleStock(e){  
        setProduct(
            {
                Name:product.Name,
                Price:product.Price,
                City:product.City,
                Stock:e.target.checked
                
            })
    }

    function handleRegisterClick(e){
        setnewProduct(product)
        
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl >
                        <dt>Name</dt>
                        <dd>
                            <input type="text" className="form-control " onChange={handleName} />
                        </dd>
                        <dt>Price</dt>
                        <dd>
                            <input type="text" className="form-control" onChange={handlePrice} />
                        </dd>
                        <dt>City</dt>
                        <dd>
                            <select className="form-select" onChange={handleCity}>
                                <option>
                                    Delhi
                                </option>
                                <option>
                                    Mumbai
                                </option>
                                <option>
                                    Bhubaneswar
                                </option>
                                
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input type="checkbox"  className="form-check-input" onChange={handleStock} />Available
                        </dd>
                    </dl>
                    <button onClick={handleRegisterClick} className="btn btn-primary w-100" >Register</button>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{newProduct.Stock}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

