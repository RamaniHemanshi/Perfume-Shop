import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../customer/Pages/HomePage/HomePage';
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/navigation/Navigation';
import Footer from '../customer/components/Footer/Footer';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetails from '../customer/components/Order/OrderDetails';
import PaymentSuccess from '../customer/components/PaymentSuccess/PaymentSuccess';
import AboutUs from '../customer/Pages/AboutUs';
import RateProduct from '../customer/ReviewProduct/RateProduct';
import Blog from '../customer/Pages/Blog';
import ContactUs from '../customer/Pages/ContactUs';
import UserProfileContainer from '../customer/components/profile/UserProfileContainer';


const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />

            </div>
            <Routes>

                <Route path='/login' element={<HomePage />}></Route>
                <Route path='/register' element={<HomePage />}></Route>

                <Route path='/' element={<HomePage />}></Route>
                <Route path='/aboutUs' element={<AboutUs />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/profile' element={<UserProfileContainer/>}></Route>
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/account/order' element={<Order />}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
                <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
                <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
                <Route path="/blogPage" element={<Blog />}></Route>
                <Route path="/contactPage" element={<ContactUs />}></Route>

            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters