import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
// import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";



const initialSizes = [
  { name: "30ml", quantity: 0 },
  { name: "50ml", quantity: 0 },
  { name: "100ml", quantity: 0 },
  { name: "125ml", quantity: 0 },
];

const CreateProductForm = () => {

  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    // color: "",
    discountedPrice: "",
    price: "",
    discountedPersent: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
  });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")

  const handleThirdLevelCategoryOptions = () => {
    const { topLevelCategory, secondLevelCategory } = productData;

    if (topLevelCategory === "women" && secondLevelCategory === "fragrances") {
      return ["neroli", "rose", "lavender", "sandalwood", "musk", "mint"];
    } else if (topLevelCategory === "men" && secondLevelCategory === "fragrances") {
      return ["Citron", "Musk", "Freesia", "Aromatic", "Aquatic", "Noir"];
    } else if (secondLevelCategory === "type") {
      return ["floral", "woody", "citrus", "oriental", "fruity", "green", "spicy"];
    } else if (topLevelCategory === "women" && secondLevelCategory === "brands") {
      return ["gucci", "dior", "zara", "burberry", "chanel","victoria secret"];
    } else if (topLevelCategory === "men" && secondLevelCategory === "brands") {
      return ["calvin klein", "bella vitta", "guess", "chanel"];
    } else {
      return [];
    }
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setProductData(prevData => ({
  //       ...prevData,
  //       imageUrl: imageUrl
  //    }));
  //   }
  // };

  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     // Assuming you have a server endpoint '/upload-image' that handles image uploads
  //     const formData = new FormData();
  //     formData.append('image', file);
  
  //     try {
  //       const response = await fetch('/images', {
  //         method: 'POST',
  //         body: formData
  //       });
  
  //       if (!response.ok) {
  //         throw new Error('Failed to upload image');
  //       }
  
  //       const imageUrl = await response.text();
        
  //       // Assuming imageUrl will be something like '/images/women_brand/dior/d1.jpg'
  //       setProductData(prevData => ({
  //         ...prevData,
  //         imageUrl: imageUrl
  //       }));
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //       // Handle error appropriately, e.g., show a message to the user
  //     }
  //   }
  // };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? name = "quantity" : name = e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  //   const handleAddSize = () => {
  //     const sizes = [...productData.size];
  //     sizes.push({ name: "", quantity: "" });
  //     setProductData((prevState) => ({
  //       ...prevState,
  //       size: sizes,
  //     }));
  //   };

  // const handleRemoveSize = (index) => {
  //   const sizes = [...productData.size];
  //   sizes.splice(index, 1);
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     size: sizes,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData))
    console.log("productData",productData);
  };

  // const handleAddProducts=(data)=>{
  //   for(let item of data){
  //     const productsData={
  //       data:item,
  //       jwt,
  //     }
  //     dispatch(createProduct(productsData))
  //   }
  // }

  return (
    <div className="p-10">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              // type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              // type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              // type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountedPersent"
              value={productData.discountedPersent}
              onChange={handleChange}
              // type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                {/* <MenuItem value="kids">Kids</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="type">Type</MenuItem>
                <MenuItem value="fragrances">Fragrances</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>

            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                {handleThirdLevelCategoryOptions().map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3} >
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  // type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid> </Grid>

          ))}
          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
            {/* <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20 ml-10"
              size="large"
              onClick={()=>handleAddProducts(dressPage1)}
            >
              Add Products By Loop
            </Button> */}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProductForm;
