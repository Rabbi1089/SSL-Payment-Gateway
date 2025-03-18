import axios from 'axios';
import React from 'react';

const Main = () => {
    const handleCheckout = () => {
        axios.post("http://localhost:5000/create-payment", {
          amount: 500, 
          currency: 'EUR'
        })
        .then((response) => {console.log(response) 
          const redirectUrl = response.data.paymentUrl
          if (redirectUrl) {
            window.location.replace(redirectUrl)
          }
    
        })
        .catch(error => console.error("Error:", error.response || error.message));
      }
    
    return (
        <div>
                  <div className="flex gap-2">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleCheckout} className="btn btn-active btn-primary m-12">Pay</button>
        </div>
    );
};

export default Main;