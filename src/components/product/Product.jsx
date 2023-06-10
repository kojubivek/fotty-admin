import React, { useEffect, useMemo, useState } from "react";
import { PageLayout } from "../../pages/layout/PageLayout";
import "./Product.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Chart } from "../chart/Chart";
import { productData } from "../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../../helper/userRequests";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { updateProducts } from "../../redux/apiCall";
export const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  console.log(productId);
  const product = useSelector((state) =>
    state.products.product.find((p) => p._id === productId)
  );
  const [inputs, setInputs] = useState(product);
  const [file, setFile] = useState(null);

  const [pstats, setPstats] = useState([]);
  const dispatch = useDispatch();
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest("/order/income/?pid=" + productId);

        res.data.income.map((item) => {
          setPstats((prevStats) => [
            ...prevStats,
            { name: MONTHS[item._id], Sales: item.total },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);
  const handleFile = (e) => {
    setFile(e.target.files[0]);
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
          setInputs({ ...inputs, images: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProducts(inputs));
  };
  return (
    <PageLayout>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Edit Product</h1>
          <Link to="/newProduct">
            <Button variant="success">Create</Button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart data={pstats} datakey="Sales" title="Sales Performance" />
          </div>
          <div className="productTopRight shadow ">
            <div className="productInfoTop ">
              <img
                src={product.images[0]}
                alt="product-img"
                className="productInfoImg"
              />
              <span className="productName">{product.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id: </span>
                <span className="productInfoValue">{product._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Name </span>
                <span className="productInfoValue">{product.name}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Price:</span>
                <span className="productInfoValue">{product.price}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Active:</span>
                <span className="productInfoValue">{product.status}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Sales:</span>
                <span className="productInfoValue">0</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Stock:</span>
                <span className="productInfoValue">{product.qty}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom shadow">
          <h1>Edit Product</h1>
          <Form className="productEditForm" onSubmit={(e) => handleSubmit(e)}>
            <div className="formLeft">
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  name="name"
                  label="active"
                  placeholder={product.name}
                  id="disabledSelec"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  name="description"
                  label="active"
                  placeholder={product.desc}
                  id="disabledSelect"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  label="active"
                  id="disabledSelec"
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="active">Active</option>
                  <option value="inactive">In active</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="price"
                  label="active"
                  placeholder={product.price}
                  id="disabledSelec"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="formRight">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  Upload Your Image
                  <span>
                    <img
                      src={product.images[0]}
                      alt="productimage"
                      width="200px"
                      height="200px"
                    />
                  </span>
                </Form.Label>

                <Form.Control type="file" onChange={handleFile} />
              </Form.Group>
              <Button type="submit" vairant="dark">
                Update
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </PageLayout>
  );
};
