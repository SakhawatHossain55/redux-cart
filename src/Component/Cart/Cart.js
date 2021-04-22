import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/cartActions";

const Cart = (props) => {
  // console.log(props);
  const {cart, removeFromCart} = props;

  return (
    <div>
      <h3>This is Card</h3>
      {cart.map((pd) => (
        <li key={pd.cartId}>
          {pd.name} <button onClick={() => removeFromCart(pd.cartId)}>x</button>
        </li>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
