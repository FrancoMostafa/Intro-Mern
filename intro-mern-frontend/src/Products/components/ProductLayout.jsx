import React, { useState } from "react";
import Header from "./Header";
import AddButton from "./AddButton";
import Loading from "./Loading";
import { Button } from "react-bulma-components";

const ProductLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Header title="Products App"></Header>
      <AddButton />
      {isLoading ? <Loading /> : "mostrar resultado fetch"}
    </>
  );
};

export default ProductLayout;
