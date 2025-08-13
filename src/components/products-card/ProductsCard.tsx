import { FC } from "react";
import { Product } from "../../types";
import { Button } from "../button";

import "./ProductsCard.css";

interface ProductsCardProps {
  products: Product[];
  onEdit: (product: Product) => void;
}

const ProductsCard: FC<ProductsCardProps> = ({ products, onEdit }) => {
  return (
    <div className="products-container">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p>Rs. {p.price}</p>
          <p>{p.category}</p>
          <p>Stock: {p.stock}</p>
          <Button variant="secondary" onClick={() => onEdit(p)}>Edit</Button>
        </div>
      ))}
    </div>
  );
};

export { ProductsCard };
