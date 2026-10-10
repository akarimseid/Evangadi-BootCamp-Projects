import styles from "./ProductCard.module.css";

function ProductCard(props) {

    const {title, category, price, img, desc} = props;
  return (
    <>
      <div>
        <div className={styles.singleFood}>
          <div className={styles.image}>
            <img src={img} alt="food" />
          </div>

          <div className={styles.titlePrice}>
            <h3> {title} </h3>
           <h3> {category} </h3>
            <p> {price}</p>
          </div>

          <div className={styles.foodDesc}>
            {desc}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard