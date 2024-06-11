// import { RowingSharp } from "@mui/icons-material";
import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ProductsTableView=()=>{
  const location = useLocation();
  // const navigate = useNavigate();
  const dispatch=useDispatch();
    const {products}=useSelector((store)=>store);

    console.log("products ----",products)

    
    const searchParams = new URLSearchParams(location.search);
    const availability = searchParams.get("availability");
    const category = searchParams.get("category");
    const sort = searchParams.get("sort");
    const page = searchParams.get("page");
    
    useEffect(()=>{
      const data={
        category:"",
        colors:[],
        sizes:[],
        minPrice:0,
        maxPrice:100000,
        minDiscount:0,
        sort:"price_low",
        pageNumber:1,
        pageSize:200,
        stock:""
      }
      dispatch(findProducts(data))
    },[category,products.deletedProduct])

    return(
        <div className="p-5">

<Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader
          title="Recent Products"
          // sx={{
          //   pt: 2,
          //   alignItems: "center",
          //   "& .MuiCardHeader-action": { mt: 0.6 },
          // }}
        />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {products?.products?.content?.slice(0,5).map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left"><Avatar src={item.imageUrl}></Avatar></TableCell>
              <TableCell align="left" scope="row">
                {item.title}
              </TableCell>
              {/* <TableCell variant="caption">{item.brand}</TableCell> */}
              <TableCell align="left">{item.category?.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Card>
        </div>
    )
}

export default ProductsTableView;