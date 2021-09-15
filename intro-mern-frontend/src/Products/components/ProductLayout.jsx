import React, { useEffect, useState } from "react";
import { Container, Modal } from "react-bulma-components";
import Header from "./Header";
import AddButton from "./AddButton";
import ListProduct from "./ListProducts";
import Form from "./Form";
import { saveProducts, getProducts } from "../services";
import Loading from "./Loading";
const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await getProducts();
    if (response.status === 200) {
      setProducts(response.data.products);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (data) => {
    setIsModalOpen(false);
    await saveProducts(data);
    loadProducts();
  };
  return (
    <Container>
      <Header title="Products App"></Header>
      <AddButton onClick={() => setIsModalOpen(true)} />
      {isLoading && <Loading />}
      {!isLoading && products.length === 0 && (
        <h2 className="title has-text-centered">You don't have products</h2>
      )}
      {!isLoading && products.length > 0 && <ListProduct products={products} />}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Header showClose={false}>
            <Modal.Card.Title>Add Product</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Form handleSubmit={handleSubmit} />
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </Container>
  );
};

export default ProductLayout;
