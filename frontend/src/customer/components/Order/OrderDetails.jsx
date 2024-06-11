import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Button, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import StarIcon from "@mui/icons-material/Star";

const OrderDetails = () => {
    const dispatch = useDispatch();
    const location=useLocation();
  const {orderId} = useParams();
  console.log("orderId",orderId);
    const {order} = useSelector((store) => store);
    // const searchParams=new URLSearchParams(location.search);
    // const orderId= searchParams.get("order_id");

    // console.log("rfrerfrfr",order)

    useEffect(()=>{
        dispatch(getOrderById(orderId))
      },[]);
    // console.log("order",order.order)
    // console.log("etisha")

    // useEffect(() => {
    //     dispatch(getOrderById(orderId));
    //   }, [dispatch,orderId]);
    
      const navigate = useNavigate();
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard  />
            </div>

            {/* <div className='py-20'>
                <OrderTraker activeStep={3} />
            </div> */}
        
            <div className='py-20'>
                <OrderTraker activeStep={
                order.order?.orderStatus === "PLACED"
                  ? 1
                  : order.order?.orderStatus === "CONFIRMED"
                  ? 2
                  : order.order?.orderStatus === "SHIPPED"
                  ? 3
                  : order.order?.orderStatus === "DELIVERED" ? 4 : 5
              }/>
            </div>

  <Grid item>
           {order.order?.orderStatus==="DELIVERED" && <Button sx={{ color: ""}} color="error" variant="text" >
              RETURN
            </Button>}

            {order.order?.orderStatus!=="DELIVERED" && <Button sx={{ color: deepPurple[500] }} variant="text">
              cancel order
            </Button>}
          </Grid>

            {/* <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=> 
                <Grid item container className='shadow-xl rounded-md p-5 border'
                    sx={{ alignItems: "center", justifyContent: 'space-between' }}>

                    <Grid item xs={6}>

                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="images/navigation/perfume.jpg" alt="" />

                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>men perfume</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Size : 100 ml</span></p>
                                <p>Seller : rose</p>
                                <p>₹1099</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item>

                        <Box sx={{ color: deepPurple[500] }}>

                            <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2' />
                            <span>Rate & Review Product</span>

                        </Box>

                    </Grid>


                </Grid> )}

            </Grid> */}

<Grid container className="space-y-5">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  {/* <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: {item.size}</span>
                  </p> */}
                  <p>Seller: {item.product.brand}</p>
                  <p>₹{item.price} </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  onClick={() => navigate(`/account/rate/${item.product._id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>


        </div>
    )
}

export default OrderDetails