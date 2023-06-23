import React, { useState, useEffect } from 'react';
import './Payment.css';
import HomePage from './Homepage';
const Spinner = ({items}) => {
  const [loading, setLoading] = useState(true);
  const [showTick, setShowTick] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [homepage,gohomepage]=useState(false);
  useEffect(() => {
    // Simulating a loading delay of 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const tickTimer = setTimeout(() => {
        setShowTick(true);
      }, 500);
      return () => clearTimeout(tickTimer);
    }
  }, [loading]);

  useEffect(() => {
    if (showTick) {
      const paymentTimer = setTimeout(() => {
        setPaymentDone(true);
      }, 500);
      return () => clearTimeout(paymentTimer);
    }
  }, [showTick]);
 if(homepage){
    return <HomePage />
 }
  const Receipt = () => {
    return (
      <div className="receipt">
        <h2>Receipt</h2>
        <p>Thank you for your purchase! Please Show this and get your books from the library counter</p>
        {
            items.map((item)=>(
                <div>
                <p>Book : {item.title}</p>
                <p>Author : {item.authors}</p>
                <p>Qty : {item.quantity}</p>
                </div>
            ))

  }
   <button onClick={()=>gohomepage(true)}>Return to home page</button>
      </div>
    );
  };

  return (
    <div className="container">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className={`tick-container ${showTick ? 'show' : ''}`}>
          <span className="tick">&#10003;</span>
          {showTick && paymentDone && <p className="payment-message">Payment done</p>}
          {paymentDone && <Receipt />}
        </div>
      )}
    </div>
  );
};

export default Spinner;
