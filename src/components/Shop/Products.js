import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "k1",
    price: 20,
    title: "Pani-Puri",
    description: "Tikhi Tikhi Pani-Puri:>",
  },
  {
    id: "k2",
    price: 30,
    title: "Sev-Puri",
    description: "Khati Mithi Sev-Puri:>",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
