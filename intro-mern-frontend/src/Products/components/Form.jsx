import React, { useState, useRef } from "react";
import { Form as BulmaForm, Button } from "react-bulma-components";

const { Field, Control, Label, Input } = BulmaForm;

const Form = ({ handleSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    priceUnitary: "",
    size: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const inputFileRef = useRef();

  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ ...formValues, image: inputFileRef.current.files[0] });
  };
  return (
    <form onSubmit={_handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input
            placeholder="Text imput"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          ></Input>
        </Control>
      </Field>
      <Field>
        <Label>Size</Label>
        <Control>
          <Input
            placeholder="Text imput"
            name="size"
            type="number"
            value={formValues.size}
            onChange={handleChange}
          ></Input>
        </Control>
      </Field>
      <Field>
        <Label>Price Unitary</Label>
        <Control>
          <Input
            placeholder="Text imput"
            name="priceUnitary"
            type="number"
            value={formValues.priceUnitary}
            onChange={handleChange}
          ></Input>
        </Control>
      </Field>
      <Field>
        <Label>Description</Label>
        <Control>
          <Input
            placeholder="Text imput"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          ></Input>
        </Control>
      </Field>
      <Field>
        <Label>Image</Label>
        <Control>
          <input type="file" ref={inputFileRef}></input>
        </Control>
      </Field>
      <Button onClick={_handleSubmit} type="submit" color="primary">
        Save
      </Button>
    </form>
  );
};

export default Form;
