import { useState } from "react";
import { useEffect } from "react";

export default function DataBindingComponent(){
   /* var product={
        Name:'Sony TV',
        Price:29000.00,
        Stock:true
    }
    return( 
        <div className="container">
            <h2>Product Details</h2>
            <dl>
                <dt>Name </dt> 
                <dd >{product.Name}</dd> 
                <dt>Price </dt> 
                <dd >{product.Price}</dd>
                <dt>Stock </dt> 
                <dd >{(product.Stock == true)?"Available":"Out of stock"}</dd>
                
            </dl>
        </div>
    )*/
        /*var categories  =["All","Electronics","Footwear","Skirt"]
            
        
        return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    categories.map(categories=>
                        <li>
                            {categories}
                        </li>
                    )
                }
            </ol>
        </div>

        var products=[
            {Name:'Samsung',Price:20},
            {Name:'Sony',Price:3934.32}
        ]
        return(
            <div className="container">
                <h2>Product Table</h2>
                <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product=>
                                    <tr>
                                        <td>{product.Name}</td>
                                        <td>{product.Price}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                </table>
            </div>
           )
          var menu=[
            {Category:"Electronics",Products:["Samsung Tv","Mobile Phone"]},
            {Category:"Footwear",Products:["Nike","Adidad"]}
          ]
        //From here its for nested literals;
         /* 
            <div className="container">
                    <h2>Categories</h2>
                    <ol>
                        {
                            menu.map(item=>
                                <li>
                                    {item.Categories}
                                    <ul>
                                        {
                                        item.Products.map(product=>
                                            <li>
                                                {product}
                                            </li>
                                        )
                                        }
                                    </ul>
                                </li>
                            )
                        }
                    </ol>

            </div>
          
           //this is done by variable:

            return(
                    <div className="container">
                            <h2>
                                Categories
                            </h2>
                            <select>
                               {menu.map(item=>
                                <optgroup key={Category} label={Category}>
                                    {
                                        item.Products.map(product=>
                                            <option key={product}>
                                                {product}
                                            </option>
                                        )
                                    }
                                </optgroup>
                               )}
                               
                                
                            </select>
                    </div>
                )
               
                 //done by state
                 const [product,setProduct]=useState(["Telephone","Mobile","Grammy"]);
                 return(
                    <div className="container">
                        <ol>
                            {
                                product.map(product=>
                                    <li key={product}>{product}</li>
                                )
                            }
                        </ol>
                    </div>
                 )   */
             /*  
                    const [mars,setMars]=useState({});
                     useEffect(()=>  {
                    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
                    .then(response=>    response.json())
                    .then(data=>
                    {
                        setMars(data);

                    }).catch(error=>
                        console.error("error in fetching.")
                        )
                },[]);
                    return(
                       <div className="container">
                           <h2>Mars Photos</h2>
                           <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Photo Id</th>
                                        <th>Camera Name</th>
                                        <th>Rover Name </th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        mars.photos.map(photo=>
                                            <tr>
                                                <td>{photo.id}</td>
                                                <td>{photo.camera.full_name}</td>
                                                <td>{photo.rover.name}</td>
                                                <td>
                                                    <img src={photo.img_src}  width="100" height="100" />
                                                    
                                                  
                                                    
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>

                           </table>
                       </div>
                    )*/
                       const [mars, setMars] = useState({ photos: [] });

                       useEffect(() => {
                           fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
                               .then(response => response.json())
                               .then(data => {
                                   setMars(data);
                               })
                               .catch(error => {
                                   console.error("Error fetching the Mars photos:", error);
                               });
                       }, []);
                   
                       return (
                           <div className="container">
                               <h2>Mars Photos</h2>
                               <table className="table table-hover">
                                   <thead>
                                       <tr>
                                           <th>Photo Id</th>
                                           <th>Camera Name</th>
                                           <th>Rover Name</th>
                                           <th>Preview</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       {mars.photos.length > 0 ? (
                                           mars.photos.map(photo => (
                                               <tr key={photo.id}>
                                                    
                                                   <td>{photo.id}</td>
                                                   <td>{photo.camera.full_name}</td>
                                                   <td>{photo.rover.name}</td>
                                                   <td>
                                                       <img src={photo.img_src} width="100" height="100" alt="Mars" />
                                                   </td>
                                               </tr>
                                           ))
                                       ) : (
                                           <tr>
                                               <td colSpan="4">Loading...</td>
                                           </tr>
                                       )}
                                   </tbody>
                               </table>
                           </div>
                       );
}