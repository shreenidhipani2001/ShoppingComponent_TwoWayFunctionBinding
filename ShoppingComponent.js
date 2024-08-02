import React, { useState, useEffect } from 'react';

export default function ShoppingComponent() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]); // Initialize products as an array
    //for adding the products to cart:
    const [cartItems,setCartItems]=useState([]);//its an array cuz we can add multiple items into the cart
    const [itemsCount,setItemsCount]=useState(0);
    
    function loadCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {
                data.unshift('All');
                setCategories(data);
            })
            .catch(error => console.error('Error fetching categories:', error));
    }

    function loadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data); // Ensure the fetched data is an array
            })
            .catch(error => console.error('Error fetching products:', error));
    }

    useEffect(() => {
        loadCategories();
        loadProducts('https://fakestoreapi.com/products'); // Fetch products when the component mounts
    }, [cartItems.length]);


    function handlecategoryChange(e){
        if(e.target.value=='All'){
            loadProducts('https://fakestoreapi.com/products');
        }else{
            loadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function handleAddTocart(e){
        //alert(e.target.id);
        alert("Item Is Added");
        fetch(`https://fakestoreapi.com/products/${e.target.id }`)
        .then(response=> response.json())
        .then(data=> {
            cartItems.push(data);
            GetCartItemsQuantity();
        })  
        
    }

    //this function will display how many items are there in the cart:
    function GetCartItemsQuantity(e){
        //const [itemsCount,setItemsCount]=useState(0);
        setItemsCount(cartItems.length);
    }
    return (
        <div className="container">
            <header>
                <h1 className="bg-danger text-white text-center p-2">
                    <span className="bi bi-cart"></span>
                    Shopping Home
                </h1>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label>Select a Category</label>
                    </div>
                    <select onChange={handlecategoryChange} className="form-select">
                        {
                            categories.map(category =>
                                <option key={category}>
                                    {category}
                                </option>
                            )
                        }
                    </select>
                </nav>
                <main className="col-6 d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-2 p-2 " style={{width:'200px'}}>
                                <img src={product.image} className="card-img-top" height={150} alt={product.title} />
                                <div className="card-header" style={{height:160}}>
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate}<span>[{product.rating.count}]</span>
                                        </dd>
                                    </dl>
                                </div>
                               
                                <div className='card-footer'>
                                        <button id={product.id} onClick={handleAddTocart} className='btn btn-danger w-100' >
                                            <span className='bi bi-cart4 '>Add To Cart</span>
                                        </button>
                                </div>
                            </div>
                        )
                    }
                </main>

                <aside className='col-4'>
                    <button className='btn btn-warning w-100'>
                        <span className="bi bi-cart3"></span>[{itemsCount}]
                    </button>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(items=>
                                    <tr key={items.id}>
                                        <td>{items.title}</td>
                                        <td>{items.price}</td>
                                        <td>
                                            <img src={items.image} width="50" height="50" />
                                        </td>
                                        <td>
                                            <button className='btn btn-danger '>
                                                <span className='bi bi-trash'></span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </aside>
            </section>
        </div>
    );
}
