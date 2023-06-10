import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { PageLayout } from "../layout/PageLayout";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryById,
  updateCategory,
} from "../../redux/category/categoryAction";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const EditCategory = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  const cat = category.find((item) => item._id === id);

  const formRef = useRef(null);
  const [file, setFile] = useState(null);
  const [formvalue, setFormvalue] = useState(cat);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
    console.log(formvalue);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    console.log(file, "gile");
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
          setFormvalue({ ...formvalue, image: downloadURL });
          console.log(formvalue);
          console.log(downloadURL);
        });
      }
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Perform category update action

    dispatch(updateCategory(formvalue));
  };

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <PageLayout>
      <h1>Edit Category</h1>
      <div className="container mt-5">
        <Form ref={formRef} onSubmit={handleOnSubmit}>
          <Form.Group className="d-flex flex-column align-item-center gap-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formvalue.status}
              onChange={handleOnChange}
            >
              <option>Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Form.Select>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Category Name"
              value={formvalue.name}
              onChange={handleOnChange}
              required
            />

            <Form.Label>Slug</Form.Label>
            <Form.Control
              name="slug"
              type="text"
              placeholder="Slug"
              value={formvalue.slug}
              disabled
              readOnly
            />

            <Form.Label>Image</Form.Label>
            <Form.Control name="image" type="file" onChange={handleFile} />
            <Image
              style={{ height: "500px", width: "500px" }}
              src={`${formvalue.image}`}
              rounded
              fluid
            />
            <Button className="primary mt-3" type="submit">
              Update Category
            </Button>
          </Form.Group>
        </Form>
      </div>
    </PageLayout>
  );
};

export default EditCategory;
