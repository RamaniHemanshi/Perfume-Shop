import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    FormControl,
    Grid,
    InputLabel,
    Menu,
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
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder, updateOrderStatus } from "../../State/Admin/Order/Action";
import { useLocation, useNavigate } from "react-router-dom";


const OrdersTable = () => {
    const navigate = useNavigate();
  const location = useLocation();

  const [filterValue, setFilterValue] = useState({
    orderStatus: "",
  });
  const [formData, setFormData] = useState({ status: "", sort: "" });
  const [orderStatus, setOrderStatus] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const availability = searchParams.get("category");

    const [anchorEl, setAnchorEl] = useState([]);
    const open = Boolean(anchorEl);

    const handleClick = (event,index) => {
        const newAnchorElArray=[...anchorEl];
        newAnchorElArray[index]=event.currentTarget;
        setAnchorEl(newAnchorElArray);
    };
    const handleClose = (index) => {
        const newAnchorElArray=[...anchorEl];
        newAnchorElArray[index]=null;
        setAnchorEl(newAnchorElArray);
    };
    const dispatch = useDispatch();
    const { adminOrder } = useSelector((store) => store);

    useEffect(() => {
        dispatch(getOrders());
    }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered,adminOrder.deletedOrder]);

    console.log("admin orders ", adminOrder);

    const handleUpdateOrderStatus = (orderId, status) => {
        // Dispatch the updateOrderStatus action with the orderId and status
        dispatch(updateOrderStatus(orderId, status));
        dispatch(getOrders(adminOrder));
        
      };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setFormData({ ...formData, [name]: value });
      };

    const handleShippedOrder = (orderId, index) => {
        dispatch(shipOrder(orderId));
        handleClose(index);
        setOrderStatus("ShIPPED");
        handleUpdateOrderStatus(orderId, "SHIPPED");
      };
    
      const handleConfirmedOrder = (orderId, index) => {
        dispatch(confirmOrder(orderId));
        handleClose(index);
        setOrderStatus("CONFIRMED");
        handleUpdateOrderStatus(orderId, "CONFIRMED");
      };
    
      const handleDeliveredOrder = (orderId, index) => {
        dispatch(deliveredOrder(orderId));
        handleClose(index);
        setOrderStatus("DELIVERED");
        handleUpdateOrderStatus(orderId, "DELIVERED");
      };
    
      const handleDeleteOrder = (orderId) => {
        handleClose();
        dispatch(deleteOrder(orderId));
      };
    

    return (
        <div className="p-10">
            <Card className="mt-2 bg-[#1b1b1b]">
                {/* <CardHeader
                    // title="All Orders"
                sx={{
                  pt: 2,
                  alignItems: "center",
                  "& .MuiCardHeader-action": { mt: 0.6 },
                }}
                /> */}

<Grid container spacing={2}>
          {/* <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.orderStatus}
                label="Category"
                onChange={(e) => handleChange(e, "orderStatus")}
              >
                <MenuItem value={"CONFIRMED"}>CONFIRMED</MenuItem>
                <MenuItem value={"SHIPPED"}>SHIPPED</MenuItem>
                <MenuItem value={"PLACED"}>PLACED</MenuItem>
                <MenuItem value={"PENDING"}>PENDING</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          {/* <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.sort}
                label="Sort By"
                onChange={handleChange}
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Older"}>Older</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
        </Grid>
      </Card>
      <Card className="mt-2">
        <CardHeader
          title="All Orders"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Update</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.map((item,index) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">
                                        <AvatarGroup max={3} sx={{ justifyContent: 'start' }}>
                                            {item.orderItems.map((orderItem) => <Avatar src={orderItem.product?.imageUrl} />)}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="left" scope="row">
                                        {item.orderItems.map((orderItem) => <p>{orderItem.product?.title}</p>)}
                                    </TableCell>
                                    {/* <TableCell variant="caption">{item.brand}</TableCell> */}
                                    <TableCell align="left">{item?._id}</TableCell>
                                    <TableCell align="left">{item.totalPrice}</TableCell>
                                    <TableCell align="left"><span className={`text-white px-5 py-2 rounded-full
                                        ${item.orderStatus === "CONFIRMED" ? "bg-[#369236]" :
                                            item.orderStatus === "SHIPPED" ? "bg-[#4141ff]" :
                                                item.orderStatus === "PLACED" ? "bg-[#02B290]" :
                                                    item.orderStatus === "PENDING" ? "bg-[gray]" :
                                                        "bg-[#025720]"}`}>
                                        {item.orderStatus}</span>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            id="basic-button"
                                            aria-haspopup="true"
                                            onClick={(event)=>handleClick(event,index)}
                                            aria-controls={`basic-menu-${item._id}`} 
                                            aria-expanded={Boolean(anchorEl[index])}
                                        >
                                            Status
                                        </Button>
                                        <Menu
                                            id={`basic-menu-${item._id}`}
                                            anchorEl={anchorEl[index]}
                                            open={Boolean(anchorEl[index])}
                                            onClose={()=>handleClose(index)}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                            sx={{
                                                '& .MuiPaper-root': {
                                                    boxShadow: 'shadow-lg shadow-gray-600',
                                                    border: 'none',
                                                    borderRadius: 0
                                                }
                                            }}
                                        >
                                            <MenuItem onClick={() => handleConfirmedOrder(item._id)}>Confirmed Order</MenuItem>
                                            <MenuItem onClick={() => handleShippedOrder(item._id)}>Shipped Order</MenuItem>
                                            <MenuItem onClick={() => handleDeliveredOrder(item._id)}>Delivered Order</MenuItem>
                                        </Menu>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => handleDeleteOrder(item._id)} 
                                        variant="outlined">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div >
    )
}

export default OrdersTable;