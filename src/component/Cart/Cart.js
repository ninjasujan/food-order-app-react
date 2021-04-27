import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItem = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  return (
    <Modal onClose={props.onClose}>
      {
        <ul className={classes["call-items"]}>
          {cartItem.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      }
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
