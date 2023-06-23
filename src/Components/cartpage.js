import React, { useState } from 'react';
import './cartpage.css';
import HomePage from './Homepage';
import Account from './Account';
import PaymentPage from './Payment';
const CartPage = (props) => {

 props.book.quantity=1;
 props.books.quantity=1;
 
  const [cartItems, setCartItems] = useState([props.book]);
  const [homeclickbutton,sethomeclick]=useState(false);
  const [userpage,setuserpage]=useState(false);
  const [paypage,setpaypage]=useState(false);
  const books=props.books;
  const removeitem=(item)=>{
       
       setCartItems((book)=>cartItems.filter((item1)=>item1!==item));
  }
  const addToCart = (book) => {
   
    const existingItem = cartItems.find((item) => item.title === book.volumeInfo.title);

    if (existingItem) {
      // If the book is already in the cart, increase the quantity
      const updatedCartItems = cartItems.map((item) =>
        item.title === book.volumeInfo.title ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the book is not in the cart, add it with a quantity of 1
      const temp=book.volumeInfo
    
      setCartItems([...cartItems, {title:temp.title,authors:temp.authors,quantity:1}]);
    }

  };
  const payment=(items)=>{
    setpaypage(true);
  }
  if(paypage){
    return <PaymentPage items={cartItems} />
  }
  if(homeclickbutton){
    return <HomePage />
  }
  if(userpage){
    return <Account />
  }
  const homeclick=()=>{
  sethomeclick(true);
  }
  return (
    <div>
    <header>
        <nav>
          <ul className="menu">
            <li onClick={()=>homeclick()}>Home</li>
            <li style={{backgroundColor:'#4caf50',borderRadius:'5px',padding:'3px'}}>Cart</li>
            <li onClick={()=>setuserpage(true)}>User Account</li>
          </ul>
        </nav>
      </header>
      <center><h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Author: {item.authors?item.authors:'Not Available'}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={()=>removeitem(item)}>Remove Item</button>
            </li>
          ))}
        </ul>
        <button onClick={()=>payment(cartItems)}>
                 Pay now
                </button>
        </div>
        
      )}
      
      <div className="book-list">
        <h2>Available Books</h2>
        <ul>
        
            { 
             books.map((item)=>(
                <li>
                <h3>{item.volumeInfo.title}</h3>
                <p>Author: {item.volumeInfo.authors?item.volumeInfo.authors:'Not Available'}</p>
                <button onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </li>
            ))
             
            }
            
          
        </ul>
      </div>
      </center>
    </div>
  );
};

export default CartPage;
