import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PageLayout } from "../layout/PageLayout";
import { useLocation } from "react-router-dom";
import { addCatSuccess } from "../../redux/category/categorySlice";
import { useDispatch } from "react-redux";
import { getCategory, postCategory } from "../../redux/category/categoryAction";
import CategoryList from "../../components/categoriesList/CategoryList";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const formInput = [
  {
    name: "name",
    type: "string",
    placeholder: "Category Name",
    required: "true",
  },
  {
    id: 2,
    name: "slug",
    type: "string",
    placeholder: "SKU Qnique Name",
    required: "true",
  },
  {
    id: 3,
    name: "image",
    type: "file",

    required: "true",
  },
];
const Categories = () => {
  const [category, setCategory] = useState({});
  const [modal, setModal] = useState(false);
  const formRef = useRef(null);
  const [file, setFile] = useState(null);
  const { pathname } = useLocation();
  const param = pathname.substring(1, pathname.length);

  const handleReset = () => {
    setCategory({});
    formRef.current.reset();
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setCategory({ ...category, [name]: value });
  };

  const dispatch = useDispatch();
  const handlefile = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };
  const handleonSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage();
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
          const catImg = { ...category, image: downloadURL };
          dispatch(postCategory(catImg));
          handleReset();
        });
      }
    );
  };
  return (
    <PageLayout>
      <h1>{param.toUpperCase()}</h1>
      <div className="container mt-5">
        <Form ref={formRef} key="categoryform" onSubmit={handleonSubmit}>
          <Form.Group
            key="categoryformGroup"
            className=" d-flex flex-column align-item-center gap-3"
          >
            {formInput.map((item, i) => (
              <>
                <Form.Label key={i}>{item.name}</Form.Label>
                <Form.Control
                  key={i + 1}
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  required={true}
                  onChange={
                    item?.name === "image" ? handlefile : handleOnchange
                  }
                />
              </>
            ))}
            <Button className="primary mt-3" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
        <CategoryList />
      </div>
    </PageLayout>
  );
};

export default Categories;
