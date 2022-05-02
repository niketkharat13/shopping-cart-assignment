import { lazy, Suspense, useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import "./App.css"
import { useLocation } from 'react-router-dom';
// const Toaster = lazy(() => import('./Components/Toaster/Toaster'));
const SignUp = lazy(() => import('./Pages/SignUp/SignUp'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Home = lazy(() => import('./Pages/Home/Home'));
const ProductListPage = lazy(() => import('./Pages/ProductListPage/ProductListPage'));
const Cart = lazy(() => import('./Components/Cart/Cart'));
function App() {
  const [isCartFullScreen, setIsCartFullScreen] = useState(false);
  const [isCartDisable, setIsCartDisable] = useState(true);
  const url = useLocation();
  console.log(url);
  useEffect(() => {
    setIsCartFullScreen(window.screen.width < 769);
   
  }, [])
  useEffect(() => {
    if (url.pathname.toLocaleLowerCase() === '/product-list-page') {
      setIsCartDisable(false)
    }
  }, [url.pathname])
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () =>  setIsCartOpen(!isCartOpen);    
  return (
    <div className="App">
      <Header
        toggleCart={toggleCart}
        isCartDisable={isCartDisable}
      />
      <Routes>
        <Route 
          path='/sign-up' 
          element={
            <Suspense fallback={<div>Loading</div>}>
              <SignUp />
            </Suspense>
          } 
        />
        <Route 
          path='/log-in' 
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Login />
            </Suspense>
          } 
        />
        <Route 
          path='/home' 
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Home />
            </Suspense>
          } 
        />
         <Route 
          path='/product-list-page' 
          element={
            <Suspense fallback={<div>Loading</div>}>
              <ProductListPage isCartOpen={isCartOpen} />
            </Suspense>
          } 
        />
      </Routes>
      {!isCartFullScreen && !isCartOpen && <Footer/>}
      {
        isCartOpen ? <Suspense fallback={<div>Loading</div>}><Cart isCartFullScreen={isCartFullScreen} toggleCart={toggleCart}  /></Suspense> : null
      }
      {/* <Suspense fallback={<div>Loading</div>}>
        <Toaster/>
      </Suspense> */}
    </div>
  );
}

export default App;
