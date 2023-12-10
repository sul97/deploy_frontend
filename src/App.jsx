import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://deploy-back-sooty.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div>
      {products.length >= 0 &&
        products.map((product) => (
          <article key={product._id}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
          </article>
        ))}
    </div>
  );
};
export default App;