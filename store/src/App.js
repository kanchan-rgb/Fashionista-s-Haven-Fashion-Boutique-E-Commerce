import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Blog from "./Footer Pages/Blog";
import Cancellation from "./Footer Pages/Cancellation";
import Faqs from "./Footer Pages/Faqs";
import Privacy from "./Footer Pages/Privacy";
import Shipping from "./Footer Pages/Shipping";
import Login from "./components/Login";
import PrivateRouteAdminMain from "./Admin_Panel/Prevent Routing/PrivateRouteAdminMain";
import PrivateRouteAdminProductDatabase from "./Admin_Panel/Prevent Routing/PrivateRouteAdminProductDatabase";
import PrivateRouteAddProduct from "./Admin_Panel/Prevent Routing/PriventRouteAddProduct";
import PrivateRoutePayment from "./PrivateRoutePayment";
import GoToTop from "./components/GoToTop";
import FeedBackBtn from "./components/FeedBackBtn";
import PrivateRouteFeedback from "./PrivateRouteFeedback";
import FeedbackForm from "./FeedbackForm";
import SignUp from "./components/SignUp";
import PrivateRouteUpdateProduct from "./Admin_Panel/Prevent Routing/PrivateRouteUpdateProduct";
import PrivateRouteContactUsDatabase from "./Admin_Panel/Prevent Routing/PrivateRouteAdminContactUsDatabase";
import Profile from "./Profile";
import PrivateRouteProile from "./PrivateRouteProile";
import PrivateRouteUserAddress from "./PrivateRouteUserAddress";
import PrivateRouteAddNewUserAddress from "./PrivateRouteAddNewUserAddress";
import PrivateRouteEditUserAddress from "./PrivateRouteEditUserAddress";
import PrivateRouteCart from "./PrivateRouteCart";
import PrivateRouteSelectAddress from "./PrivateRouteSelectAddress";
import PrivateRouteAddNewUserAddress2 from "./PrivateRouteAddNewUserAddress2";
import PrivateRouteEditUserAddressSelect from "./PrivateRouteEditUserAddressSelect";
import PrivateRoutePaymentSuccess from "./PrivateRoutePaymentSuccess";
import PrivateRouteOrder from "./PrivateRouteOrder";
import PrivateRouteInvoice from "./PrivateRouteInvoice";
import PrivateRouteFeedbackDatabase from "./Admin_Panel/Prevent Routing/PrivateRouteFeedbackDatabase"
import PrivateRouteAdminUserOrderView from "./Admin_Panel/Prevent Routing/PrivateRouteAdminUserOrderView";
import ForgottenPass from "./ForgottenPass";
import PrivateRouteUserCartView from "./Admin_Panel/Prevent Routing/PrivateRouteUserCartView";




const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [isAuthenticated2, setIsAuthenticated2] = useState();

  const handleLogin = () => {
    // Logic to set isAuthenticated to true upon successful login
    const userData = sessionStorage.getItem('userlogin');
    const userData2 = sessionStorage.getItem('admin');

    if (userData) {
      setIsAuthenticated(true);
    } else {
      // If user data is not found, set isAuthenticated to false
      setIsAuthenticated(false);
    }

    if (userData2) {
      setIsAuthenticated2(true);
    } else {
      // If user data is not found, set isAuthenticated to false
      setIsAuthenticated2(false);
    }
  };
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <GoToTop />
        <FeedBackBtn />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpass" element={<ForgottenPass />} />
          {/* <Route path="/feedback" element={<FeedbackForm />} /> */}
          <Route
            path="/feedback"
            element={
              <PrivateRouteFeedback isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/admin"
            element={
              <PrivateRouteAdminMain isAuthenticated2={isAuthenticated2} />
            }
          />

          <Route
            path="/admin/orderview/:id"
            element={
              <PrivateRouteAdminUserOrderView isAuthenticated2={isAuthenticated2} />
            }
          />

          <Route
            path="/admin/cartview/:id"
            element={
              <PrivateRouteUserCartView isAuthenticated2={isAuthenticated2} />
            }
          />


          <Route
            path="/admin/adminproductdatabase"
            element={
              <PrivateRouteAdminProductDatabase isAuthenticated2={isAuthenticated2} />
            }
          />

          <Route
            path="/admin/addproduct"
            element={
              <PrivateRouteAddProduct isAuthenticated2={isAuthenticated2} />
            }
          />

          <Route
            path="/admin/update-product/:id"
            element={
              <PrivateRouteUpdateProduct isAuthenticated2={isAuthenticated2} />
            }
          />

          <Route
            path="/admin/feedback"
            element={
              <PrivateRouteFeedbackDatabase isAuthenticated2={isAuthenticated2} />
            }
          />


          <Route
            path="/admin/contactus"
            element={
              <PrivateRouteContactUsDatabase isAuthenticated2={isAuthenticated2} />
            }
          />

          <Route
            path="/profile/:id"
            element={
              <PrivateRouteProile isAuthenticated={isAuthenticated} />
            }
          />



          <Route
            path="/payment"
            element={
              <PrivateRoutePayment isAuthenticated={isAuthenticated} />
            }
          />


          <Route
            path="/address"
            element={
              <PrivateRouteUserAddress isAuthenticated={isAuthenticated} />
            }
          />


          <Route
            path="/add-new-user-address"
            element={
              <PrivateRouteAddNewUserAddress isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/edit-address/:id"
            element={
              <PrivateRouteEditUserAddress isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRouteCart isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/selectaddress"
            element={
              <PrivateRouteSelectAddress isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/s-add-new-user-address"
            element={
              <PrivateRouteAddNewUserAddress2 isAuthenticated={isAuthenticated} />
            }
          />


          <Route
            path="/s-edit-address/:id"
            element={
              <PrivateRouteEditUserAddressSelect isAuthenticated={isAuthenticated} />
            }
          />


          <Route
            path="/payment-success"
            element={
              <PrivateRoutePaymentSuccess isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/order"
            element={
              <PrivateRouteOrder isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/invoice/:id"
            element={
              <PrivateRouteInvoice isAuthenticated={isAuthenticated} />
            }
          />


        </Routes>


      </Router>
    </ThemeProvider>
  );
};

export default App;