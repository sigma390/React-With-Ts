import { addToCart, CartItem, removeItem } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

export default function CartItems() {


  // step 21
  const cartItems = useCartSelector(state => state.cart.items)
  const dispatch = useCartDispatch();
  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.qty,
    0
  );
  const formattedTotalPrice = totalPrice.toFixed(2); //limit to 2 decimal
  
  //step 2 functions

  function handleAddToCart(item:CartItem){
    dispatch(addToCart(item))
    
  }
  function handleRemoveFromCart(id:string){
    dispatch(removeItem(id))
    
  }
  
  return (
    <div id="cart">
      {cartItems.length === 0 && <p>No items in cart!</p>}

      <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>

      <p id="cart-total-price">
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
