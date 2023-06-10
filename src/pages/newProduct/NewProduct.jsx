import React, { useEffect, useState } from "react";
import { PageLayout } from "../layout/PageLayout";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "./NewProduct.css";
import { Button, Form } from "react-bootstrap";
import app from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/apiCall";
import { getCategory } from "../../redux/category/categoryAction";
const inputes = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Samsung TV.",
    required: true,
  },

  {
    name: "sku",
    label: "Sku",
    type: "text",
    placeholder: "SAM-TV-8",
    required: true,
  },
  {
    name: "slug",
    label: "Slug",
    type: "text",
    placeholder: "SAM-TV-8",
    required: true,
  },
  {
    name: "qty",
    label: "Qty",
    type: "number",
    placeholder: "50",
    required: true,
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    placeholder: "1000",
    required: true,
  },
  {
    name: "salesPrice",
    label: "Sales Price",
    type: "number",
    placeholder: "800",
  },
  {
    name: "salesStartDate",
    label: "Sales Start Date",
    type: "date",
  },
  {
    name: "salesEndDate",
    label: "Sales End Date",
    type: "date",
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    rows: 10,
    placeholder: "write detail information abou the product",
    required: true,
  },
  // {
  //   name: "images",
  //   label: "Images",
  //   type: "file",
  //   multiple: true,
  //   required: true,
  //   accept: "image/*",
  // },
];
export const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const handleCat = (e) => {
    setCat(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;

    const storage = getStorage(app);

    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, images: downloadURL };
          dispatch(addProducts(product));
        });
      }
    );
  };

  return (
    <PageLayout>
      {" "}
      <div className="newProduct">
        <h1>New Product</h1>
        <Form>
          <Form.Group key={"product-form"} className="mb-3" controlId="">
            {inputes.map((item, i) => (
              <>
                <Form.Label key={i + 1} className="bold">
                  {item.name}
                </Form.Label>
                <Form.Control
                  key={i}
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  required
                  onChange={handleChange}
                />
              </>
            ))}
          </Form.Group>
          <Form.Label>Select Category</Form.Label>
          <Form.Group className="mb-3">
            <Form.Select name="parentCat" onChange={handleChange} required>
              <option value={null}>Select Category</option>
              {category.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group key="image-upload" controlId="formFile" className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            Submit
          </Button>
        </Form>
      </div>
    </PageLayout>
  );
};
