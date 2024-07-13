import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NoRouteFound from "./NoRouteFound";
const Todo = lazy(() => import("projects/todolist"));
const Weather = lazy(() => import("projects/weather-app"));
const Pagination = lazy(() => import("projects/pagination"));
const LoginForm = lazy(() => import("projects/loginForm"));
const Login = lazy(() => import("projects/loginForm/components/Login"));
const Signup = lazy(() => import("projects/loginForm/components/Signup"));
const Home = lazy(() => import("projects/loginForm/components/Home"));
const Welcome = lazy(() => import("projects/loginForm/components/Welcome"));
const CountdownTimer = lazy(() => import("projects/countdownTimer"));
const Modal = lazy(() => import("projects/modal"));
const DragDropMain = lazy(() => import("projects/dragDrop"));
const ChatMain = lazy(() => import("projects/chat-application"));
const DropDownMain = lazy(() => import("projects/dropDown"));
const FormValidationMain = lazy(() => import("projects/form-validation"));
const Carousel = lazy(() => import("projects/carousel"));
const ResponsiveLayout = lazy(() => import("projects/responsiveLayout"));
const ReduxStore = lazy(() => import("projects/reduxStore"));
const InfiniteScrollMain = lazy(() => import("projects/infiniteScroll"));
const Quiz = lazy(() => import("projects/quiz-application"));
const Calculator = lazy(() => import("projects/calculator"));
const ShoppingKart = lazy(() => import("projects/e-commerce"));
const ProductsList = lazy(() => import("projects/e-commerce/components/list"));
const HomePage = lazy(() => import("projects/e-commerce/components/Homepage"));
const ItemPage = lazy(
  () => import("projects/e-commerce/components/product-pages")
);
const EcommerceCart = lazy(() => import("projects/e-commerce/components/cart"));
const EcommerceCheckout = lazy(
  () => import("projects/e-commerce/components/checkout")
);
const ShimmerUI = lazy(() => import("projects/shimmer-ui"));
const ImageEditor = lazy(() => import("projects/image-editor"));
const LiftElevator = lazy(() => import("projects/lift-elevator"));

const basename = process.env.PUBLIC_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <NoRouteFound />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/login-form",
        element: <LoginForm />,
        children: [
          {
            path: "/login-form/",
            element: <Home />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "home",
            element: <Welcome />,
          },
        ],
      },
      {
        path: "/timer",
        element: <CountdownTimer />,
      },
      {
        path: "/modal",
        element: <Modal />,
      },
      {
        path: "/drag-drop",
        element: <DragDropMain />,
      },
      {
        path: "/chat",
        element: <ChatMain />,
      },
      {
        path: "/dropdown",
        element: <DropDownMain />,
      },
      {
        path: "/form-validation",
        element: <FormValidationMain />,
      },
      {
        path: "/carousel",
        element: <Carousel />,
      },
      {
        path: "/responsiveLayout",
        element: <ResponsiveLayout />,
      },
      {
        path: "/redux",
        element: <ReduxStore />,
      },
      {
        path: "/infinite-scroll",
        element: <InfiniteScrollMain />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/e-commerce",
        element: <ShoppingKart />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "list/:type",
            element: <ProductsList />,
          },
          {
            path: "cart",
            element: <EcommerceCart />,
          },
          {
            path: ":name",
            element: <ItemPage />,
          },
          {
            path: "checkout",
            element: <EcommerceCheckout />,
          },
        ],
      },
      {
        path: "/shimmer-ui",
        element: <ShimmerUI />,
      },
      {
        path: "/image-editor",
        element: <ImageEditor />,
      },
      {
        path: "/lift-elevator",
        element: <LiftElevator />,
      },
    ],
  },
], {basename});

export default router;
