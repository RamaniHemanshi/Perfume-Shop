import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  findProducts,
  updateProduct,
} from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const ProductsTable = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    title: "",
    category: "",
    price: 0,
    quantity: 0,
    imageUrl:""
  });

  const [productData, setProductData] = useState({
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  // console.log("products ----", products);
  const [filterValue, setFilterValue] = useState({
    availability: "",
    category: "",
    sort: "",
  });

  const searchParams = new URLSearchParams(location.search);
  const availability = searchParams.get("availability");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

  useEffect(() => {
    const data = {
      category: productData.thirdLevelCategory || "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 500,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [productData.thirdLevelCategory, products.deletedProduct, dispatch]);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // console.log("products", products);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    searchParams.set(name, value);
    const query = searchParams.toString();
    navigate({ search: ` ?${query}` });
  };
  
  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setUpdatedProduct({ ...product });
  };

  const handleUpdateProduct = () => {
    dispatch(updateProduct(updatedProduct));
    setIsModalOpen(false);
  };


  const handleDeleteProduct = (productId) => {
    // console.log("delete product ",productId)
    dispatch(deleteProduct(productId));
  };

  const handleThirdLevelCategoryOptions = () => {
    const { topLevelCategory, secondLevelCategory } = productData;

    if (topLevelCategory === "women" && secondLevelCategory === "fragrances") {
      return ["neroli", "rose", "lavender", "sandalwood", "musk", "mint"];
    } else if (
      topLevelCategory === "men" &&
      secondLevelCategory === "fragrances"
    ) {
      return ["freesia", "aromatic", "aquatic", "noir","rouge"];
    } else if (secondLevelCategory === "type") {
      return [
        "floral",
        "oceanic",
        "oriental",
        "fruity",
        "green",
      ];
     
    } else if (
      topLevelCategory === "women" &&
      secondLevelCategory === "brands"
    ) {
      return ["gucci", "dior", "zara", "burberry", "chanel", "victoria secret"];
    } else if (topLevelCategory === "men" && secondLevelCategory === "brands") {
      return ["calvin_klein", "gues","boss","bvlgari","signature","bella_vitta", "armani"];
    } else {
      return [];
    }
  };

  return (
    <div className="p-5">
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader
          title="All Products"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <Grid container spacing={2} style={{ marginBottom: "30px" }}>
          <Grid item sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleFilterChange}
                label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                {/* <MenuItem value="kids">Kids</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleFilterChange}
                label="Second Level Category"
              >
                <MenuItem value="brands">Brands</MenuItem>
                <MenuItem value="fragrances">Fragrances</MenuItem>
                <MenuItem value="type">Type</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleFilterChange}
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
        </Grid>
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.8)" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>

                <TableCell align="left">Delete</TableCell>
                <TableCell align="left">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.title}
                  </TableCell>
                  {/* <TableCell variant="caption">{item.brand}</TableCell> */}
                  <TableCell align="left">{item.category?.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteProduct(item._id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleUpdateClick(item)}
                      variant="outlined"
                    >
                      update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={updatedProduct.title}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            name="category"
            value={updatedProduct.category?.name}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={updatedProduct.price}
            onChange={handleFieldChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            name="quantity"
            value={updatedProduct.quantity}
            onChange={handleFieldChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image URL"
            name="imageUrl"
            value={updatedProduct.imageUrl}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdateProduct}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductsTable;
