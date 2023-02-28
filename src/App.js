import Navbar from "./components/Navbar";
import Cartcontainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/Cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const {cartItems, isLoading} = useSelector((store) => store.cart);
  const {isOpen} = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(calculateTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItems]);

  useEffect(()=> {
    dispatch(getCartItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if(isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
  <main>
    {isOpen && <Modal />}
    <Navbar />
    <Cartcontainer />
  </main>
  );
};


export default App;
