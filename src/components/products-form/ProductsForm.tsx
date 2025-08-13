import React, { useState, useEffect, FC } from "react";
import type { Product } from "../../types";
import { TextField } from "../text-field";
import { Button } from "../button";

import "./ProductsForm.css";

interface ProductsFormProps {
  initialData?: Product;
  onSave: (product: Product) => void;
  onCancel: () => void;
}

const ProductsForm: FC<ProductsFormProps> = ({ initialData, onSave, onCancel }) => {
  const [form, setForm] = useState<Product>({
    id: Date.now(),
    name: "",
    price: 0,
    category: "",
    stock: 0,
    description: "",
  });
  const [errors, setErrors] = useState<{ [K in keyof Product]?: string }>({});

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSave(form);
  };

  const validate = () => {
    const newErrors: { [K in keyof Product]?: string } = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (form.price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }
    if (!form.category.trim()) {
      newErrors.category = "Category is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Product name"
        error={errors.name}
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        required
        placeholder="Enter price"
        error={errors.price}
      />
      <TextField
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
        required
        placeholder="Enter category"
        error={errors.category}
      />
      <TextField
        label="Stock"
        name="stock"
        type="number"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock quantity"
        error={errors.stock}
      />
      <TextField
        label="Description"
        name="description"
        value={form.description || ""}
        onChange={handleChange}
        placeholder="Description"
      />

      <div className="form-actions">
        <Button type="submit" variant="save">Save</Button>
        <Button
          onClick={onCancel}
          variant="cancel"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export { ProductsForm };
