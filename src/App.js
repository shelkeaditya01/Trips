import React from "react";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import BookJourney from "./components/BookJourney";
import ConfirmBooking from "./components/ConfirmBooking";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
import Footer from "./components/Footer";
import Bookings from "./components/Bookings";
import Toast from "./components/Toast";



const AppLayout = () =>{
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
            <Toast />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/bookJourney",
                element: <BookJourney />
            }
            ,{
                path: "/confirm-booking",
                element: <ConfirmBooking />
            }
            ,{
                path: "/payment",
                element: <Payment />
            }
            ,{
                path: "/payment-success",
                element: <PaymentSuccess />
            }
            ,{
                path: "/bookings",
                element: <Bookings />
            }
        ],
        errorElement: <Error />

    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ appRouter } />);