import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../assets/data";

function ProductList() {
  return (
    <>
    <div className={styles.foodsContainer}>
       {
         products.map((product) =>{
           const {id, title, img, price, desc } = product;

           return (
            <ProductCard
            key={id}
            title={title}
            img={img}
            price={price}
            desc={desc}
            
            />
           )
         })

       }
    </div>
    </>
  )
}

export default ProductList;
