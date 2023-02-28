import Navbar from "./components/Navbar";
import Cartcontainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/Cart/cartSlice";
import { useEffect } from "react";

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(calculateTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItems]);
  return (
  <main>
    <Navbar />
    <Cartcontainer />
  </main>
  );
};


export default App;
