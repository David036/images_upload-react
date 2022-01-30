import React, { useEffect, useState } from "react";
import sketch from "../Images/Icons copy.png";
import design from "../Images/Group 1404.png";
import dfile from "../Images/Group 1403.png";
import rand from "../Images/outline.png";
import anim from "../Images/Group.png";
import Modal from "./Modal";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Home({ color, setColor }) {
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState("jewelery");
  const [product, setProduct] = useState([]);
  const [imagesArray, setImagesArray] = useState([]);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const removeFunction = (id) => {
    const array = [...imagesArray]
    setImagesArray(array.filter((el,index) => {
      return index !== id
    } ))
  }
  const imagesUpload = (obj) => {
    setImagesArray((prev) => {
      return [...prev, obj];
    });
    setTitle('')
    setImages([])
    setModal(!modal)
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const changeModal = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [category]);

  return (
    <div className="home" style={{ backgroundColor: color }}>
      <div className="home-section">
        <h2 className="home-title">Processes</h2>
        <div className="process-section">
          <div className="buttons">
            <div className="step">
              <img src={sketch} alt="" />
              <button className="step-btn"></button>
              <span>Idea Sketch</span>
            </div>
            <div className="step">
              <img src={design} alt="" />
              <button className="step-btn"></button>
              <span>Design</span>
            </div>
            <div className="step">
              <img src={dfile} alt="" />
              <button className="step-btn"></button>
              <span>3D File</span>
            </div>
            <div className="step">
              <img src={rand} alt="" />
              <button className="step-btn"></button>
              <span>Rand</span>
            </div>
            <div className="step">
              <img src={anim} alt="" />
              <button className="step-btn"></button>
              <span>Animation</span>
            </div>

            <div className="color-edit">
              <div className="default-colors">
                <button
                  className="color"
                  onClick={() => {
                    setColor("red");
                  }}
                ></button>
                <button
                  className="color"
                  onClick={() => {
                    setColor("#545662");
                  }}
                ></button>
                <button
                  className="color"
                  onClick={() => {
                    setColor("darkblue");
                  }}
                ></button>
                <button
                  className="color"
                  onClick={() => {
                    setColor("green");
                  }}
                ></button>
              </div>
              <div className="color-select">
                <input
                  type="color"
                  onChange={(e) => {
                    setColor(`${e.target.value}`);
                  }}
                />
              </div>
            </div>

            <button className="complete-step-btn">✔</button>
          </div>
          <div className="process"></div>
        </div>
      </div>
      <div className="new-section">
        <button onClick={changeModal} className="add-btn">
          +ADD
        </button>
      </div>
      <Modal
        title={title}
        setTitle={setTitle}
        imagesUpload={imagesUpload}
        images={images}
        setImages={setImages}
        closeModal={closeModal}
        modal={modal}
      />
      <div className="categories-section">
        <button onClick={() => setCategory("jewelery")}>Jewelery</button>
        <button onClick={() => setCategory("electronics")}>Electronics</button>
        <button onClick={() => setCategory("men's clothing")}>
          Men's clothing
        </button>
        <button onClick={() => setCategory("women's clothing")}>
          Women's colthing
        </button>
      </div>
      <Carousel className="products-section" responsive={responsive}>
        {product.map((e) => {
          return <img src={e.image} />;
        })}
      </Carousel>
      <Carousel className="products-section" responsive={responsive}>
        {imagesArray.map((elem,index) => {
          return (
            <div className="upload-item">
              <img className="image-item" src={elem.img} />
              <p className="title-item">{elem.title}</p>
              <button onClick={() => {removeFunction(index)}}>Remove</button>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
