function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
