import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setError, setLoading, setProducts } from "../Redux/product/actiontype";


const Product = () => {
  const dispatch = useDispatch();

  const { data ,isLoading ,isError } = useSelector((st) => st.cart);

  function fetchdata() {
    dispatch(setLoading())
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProducts(response.data));
        console.log(response.data)
        
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  }

  useEffect(() => {
    fetchdata()
  }, []);


  // if (isError) return <h2>Error loading products.</h2>;

 
  // if (isLoading) return <h2>Loading...</h2> 



  return (
    <div>
      <h1>Products</h1>
      {isError ? ( <h2>Error loading products.</h2> ) : isLoading ? ( <h2>Loading...</h2> ) : (
      <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)" , gap:"15px"}}>
        {data.map((el) => (
          <div key={el.id}  style={{border: "1px solid gray" , padding:"10px" ,borderRadius:"20px"}}>
            <img src={el.image}  alt={el.title} width="250px"  height="250px"  />
            <h1>{el.id}</h1>
            <h2>{el.title}</h2>
            <p>{el.description}</p>
            <h3>{el.category}</h3>
            <h4>{el.price}</h4>
          </div>
        ))}
      </div>
        )
      }
    </div>
  );
};

export default Product;
