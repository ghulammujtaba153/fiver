import React, { useReducer, useState } from 'react'
import './add.scss'

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { INITIAL_STATE, gigReducer } from '../../../reducers/gigReducer';
import newRequest from '../../../utils/newRequest';
import upload from '../../../utils/upload';

const Add = () => {
    const [singleFile, setSingleFile] = useState(undefined);
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading]=useState(false)
  
    const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);
  
    const handleChange = (e) => {
      dispatch({
        type: "CHANGE_INPUT",
        payload: { name: e.target.name, value: e.target.value },
      });
    };
    const handleFeature = (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_FEATURE",
        payload: e.target[0].value,
      });
      e.target[0].value = "";
    };
  
    const handleUpload = async () => {
      setUploading(true);
      try {
        const cover = await upload(singleFile);
  
        const images = await Promise.all(
          [...files].map(async (file) => {
            const url = await upload(file);
            return url;
          })
        );
        setUploading(false);
        dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
      } catch (err) {
        console.log(err);
      }
    };
  
    const navigate = useNavigate();
  
    const queryClient = useQueryClient();
  
    const mutation = useMutation({
      mutationFn: (gig) => {
        return newRequest.post("/gigs", gig);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["mygigs"]);
      },
    });
  
    const handleSubmit = (e) => {
        setLoading(true)
      e.preventDefault();
      mutation.mutate(state);
      setLoading(false)
      navigate("/gigs/my")
    };
  
    return (
      <div className="add">
        <div className="container">
          <h1>Add New Gig</h1>
          <div className="sections">
            <div className="info">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g. I will do something I'm really good at"
                onChange={handleChange}
              />
              <label htmlFor="">Category</label>
              <select name="category" id="cat" onChange={handleChange}>
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
              <div className="images">
                <div className="imagesInputs">
                  <label htmlFor="">Cover Image</label>
                  <input
                    type="file"
                    onChange={(e) => setSingleFile(e.target.files[0])}
                  />
                  <label htmlFor="">Upload Images</label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </div>
                <button onClick={handleUpload}>
                  {uploading ? "uploading" : "Upload"}
                </button>
              </div>
              <label htmlFor="">Description</label>
              <textarea
                name="desc"
                id=""
                placeholder="Brief descriptions to introduce your service to customers"
                cols="0"
                rows="16"
                onChange={handleChange}
              ></textarea>
              <button onClick={handleSubmit}>{loading? "loading" : "Create"}</button>
            </div>
            <div className="details">
              <label htmlFor="">Service Title</label>
              <input
                type="text"
                name="shortTitle"
                placeholder="e.g. One-page web design"
                onChange={handleChange}
              />
              <label htmlFor="">Short Description</label>
              <textarea
                name="shortDesc"
                onChange={handleChange}
                id=""
                placeholder="Short description of your service"
                cols="30"
                rows="10"
              ></textarea>
              <label htmlFor="">Delivery Time (e.g. 3 days)</label>
              <input type="number" name="deliveryTime" min={1} onChange={handleChange} />
              <label htmlFor="">Revision Number</label>
              <input
                type="number"
                name="revisions"
                onChange={handleChange}
                min={0}
              />
              <label htmlFor="">Add Features</label>
              <form action="" className="add" onSubmit={handleFeature}>
                <input type="text" placeholder="e.g. page design" />
                <button type="submit">add</button>
              </form>
              <div className="addedFeatures">
                {state?.features?.map((f, index) => (
                  <div className="item" key={index}>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FEATURE", payload: f })
                      }
                    >
                      {f}
                      <span>X</span>
                    </button>
                  </div>
                ))}
              </div>
              <label htmlFor="">Price</label>
              <input type="number" onChange={handleChange} name="price" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Add;