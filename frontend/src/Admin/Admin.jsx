import { InboxIcon } from "@heroicons/react/24/outline";
import { Avatar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HailIcon from '@mui/icons-material/Hail';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminDashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomerTable from "./components/CustomerTabel";
import AddressTable from "./components/AddressTable";
import { deepPurple } from "@mui/material/colors";
import { logout } from "../State/Auth/Action";


const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <ShoppingBasketIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <HailIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <ListAltIcon /> },
    { name: "Address", path: "/admin/address", icon: <ListAltIcon /> },
    // {name:"Total Earnings",path:"/admin"},
    // {name:"Weekly Overview",path:"/admin"},
    // {name:"Monthly Overview",path:"/admin"},
    { name: "Add Product", path: "/admin/product/create", icon: <AddCircleOutlineIcon /> },
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();
      const dispatch=useDispatch();
      const {auth}=useSelector(store=>store);

    const handleLogout = () => {
        // handleCloseUserMenu();
        dispatch(logout());
        navigate("/")
      };

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // border:"1px solid blue",
                height:"100%"
            }}
        >
            <>
            {/* {isLargeScreen && <Toolbar />} */}
            <List>
                {menu.map((item, index) => (
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            </>

            <List>
                <ListItem onClick={handleLogout} disablePadding >
                    <ListItemButton>
                        {/* <ListItemText>Account</ListItemText> */}
                        <Avatar
                            className="text-white"
                            onClick={handleLogout}

                            sx={{
                                bgcolor: deepPurple[500],
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            {auth.user?.firstName[0].toUpperCase()}
                        </Avatar>
                        <ListItemText className="ml-5" primary={"Logout"} />
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );



    return (
        
            <div className="relative flex h-[100vh]">
        <CssBaseline />

        <div className="shadow-lg shadow-gray-600 w-[15%] border border-r-gray-300 h-full fixed top-0"
        
        >
          {drawer}
        </div>
        <div className="w-[85%] h-full ml-[15%]">
            <Routes>
                <Route path="/" element={<AdminDashboard/>}></Route>
                <Route path="/product/create" element={<CreateProductForm/>}></Route>
                <Route path="/products" element={<ProductsTable/>}></Route>
                <Route path="/orders" element={<OrdersTable/>}></Route>
                <Route path="/customers" element={<CustomerTable/>}></Route>
                <Route path="/Address" element={<AddressTable/>}></Route>
            </Routes>
        </div>
      </div>
    
    );
};

export default Admin;