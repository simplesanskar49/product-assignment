import { FC } from "react";
import { Product } from "../../types";
import { Button } from "../button";

import "./ProductsList.css"

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
}
const ProductList: FC<ProductListProps> = ({ products, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Price</th><th>Category</th><th>Stock</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>Rs. {p.price}</td>
            <td>{p.category}</td>
            <td>{p.stock}</td>
            <td><Button variant="secondary" onClick={() => onEdit(p)}>Edit</Button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { ProductList }