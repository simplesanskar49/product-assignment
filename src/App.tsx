import { useState } from "react";
import { Product } from "./types";
import { PRODUCTS_DATA } from "./data";
import { Button, Modal, Pagination, ProductList, ProductsCard, ProductsForm, SearchBar, Toggle } from "./components";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);
  const [view, setView] = useState<"list" | "grid">("list");
  const [searchValue, setSearchValue] = useState<string>("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSave = (product: Product): void => {
    setProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? product : p));
      } else {
        return [...prev, product];
      }
    });

    const exists = products.find((p) => p.id === product.id);
    if (exists) {
      toast.success("Product Edited");
    } else {
      toast.success("Product Added");
    }

    setEditingProduct(null);
  };

  const createNewProduct = (): void => {
    setEditingProduct({
      id: Date.now(),
      name: "",
      price: 0,
      category: "",
      stock: 0,
      description: "",
    })
  }

  return (
    <div>
      <h1>Products</h1>
      <Button onClick={() => createNewProduct()}>
        Add Product
      </Button>
      <SearchBar
        onSearch={(value) => {
          setSearchValue(value);
          setCurrentPage(1);
        }}
      />
      <Toggle view={view} onToggle={setView} />

      {view === "list" ? (
        <ProductList products={paginated} onEdit={setEditingProduct} />
      ) : (
        <ProductsCard products={paginated} onEdit={setEditingProduct} />
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      <Modal
        title={editingProduct?.id ? "Edit Product" : "Add Product"}
        isOpen={!!editingProduct}
        onClose={() => setEditingProduct(null)}
      >
        {editingProduct && (
          <ProductsForm
            initialData={editingProduct}
            onSave={handleSave}
            onCancel={() => setEditingProduct(null)}
          />
        )}
      </Modal>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export { App }