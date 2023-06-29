import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const AddBlogs = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("/api/blogs/add", {
        title: inputs.title,
        desc: inputs.description,
        img: inputs.imageURL,
        user: localStorage.getItem("userId"),
      });
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blogs"))
      .catch((error) => console.log(error));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      p={3}
    >
      <Box
        width="100%"
        maxWidth="500px"
        bgcolor="white"
        p={3}
        boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
        borderRadius={10}
      >
        <Typography variant="h4" align="center" color="primary" mb={3}>
          Post Your Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Title</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.title}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <TextareaAutosize
              name="description"
              onChange={handleChange}
              value={inputs.description}
              minRows={5}
              placeholder="   Enter your blog description..."
              sx={{ resize: "none" }}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Image URL</InputLabel>
            <TextField
              name="imageURL"
              onChange={handleChange}
              value={inputs.imageURL}
              variant="outlined"
            />
          </FormControl>
          <Box display="flex" justifyContent="center" marginTop={3}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddBlogs;
