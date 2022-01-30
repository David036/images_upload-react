import React, { useState } from "react";
import { ImageUpload } from "./ImageUpload";

export default function Modal(props) {
  return (
    <div className={`modal ${props.modal ? "new-class" : ""}`}>
      <button onClick={props.closeModal} className="close-btn">
        X
      </button>
      <ImageUpload  images={props.images} setImages={props.setImages} />
      <p>Name</p>
      <input onChange={(e) => {props.setTitle(e.target.value)}} value={props.title} type="text" name="" id="" />
      <button onClick={() => {props.imagesUpload({img:props.images[0].data_url,title:props.title})}} className="save-btn">Save</button>
    </div>
  );
}
