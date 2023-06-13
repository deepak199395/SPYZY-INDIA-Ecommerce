import React, { useState, useEffect } from "react";
import Layout from '../component/Layout/Layout';
import { useCard } from '../context/card';
import { useAuth } from '../context/auth';
import  { useNavigate } from 'react-router-dom';
import DropIn from "braintree-web-drop-in-react";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import "../../src/styles/CardStyles.css"


const CardPage = () => {
  const [auth, setAuth] = useAuth();
  const [card, setCard] = useCard();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

//total price
const totalPrice = () => {
    try {
      let total = 0;
      card?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-IN", {
        style: "currency",
        currency: "NRI",
      });
    } catch (error) {
      console.log(error);
    }
  };
    //delete items//
    const removeCardItem=(pid)=>{
        try {
           let myCard =[...card] 
           let index = myCard.findIndex(item => item._id === pid)
           myCard.splice(index,1)
           setCard(myCard);
           localStorage.setItem('card',JSON.stringify(myCard));
        } catch (error) {
            console.log(error)
            
        }
    };
     //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const {data} = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        card,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCard([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Layout>
    <div
    className="cart-page">
    <div className="row">
    <div className="col-md-12">
    <h1 className="text-center bg-light p-2 mb-1">
    {!auth?.user
      ? "Hello Guest"
      : `Hello  ${auth?.token && auth?.user?.name}`}
        <p className='text-center'>
            {card?.length 
            ? `you have  ${card.length} Items in your cart ${
                auth?.token? "": "please login to cheakout"
                }`
            :"your card is empty"}
        </p>
        </h1>
    </div>
    </div>
    <div className="container ">
    <div className="row ">
    <div className="col-md-7  p-0 m-0">
       {card?.map((p) => (
        <div className="row card flex-row" key={p._id}>
              <div className="col-md-4">
                            <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    width="100pxß"
                    height={'130px'}
                  />
                 </div>
                <div className="col-md-4">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0,30)}</p>
                    <p>price :{p.price}</p>
                    </div>
                    <div className="col-md-4 cart-remove-btn">

                    <button
                     className='btn btn-danger' 
                    onClick={()=>removeCardItem(p._id)}
                    >
                    REMOVE
                    </button>
                </div>
                </div>
                ))}
                </div>
                <div className="col-md-5 cart-summary ">

                <h2> CART SUMMARY </h2>
                <p> Total | cheakout | payment </p>
                <hr/>
                <h4>Total :{totalPrice()}</h4>
                {auth?.user?.address ?(
                  <>
                  <div className="mb-3">
                    <h4>Current Address</h4>
                    <h5>{auth?.user?.address}</h5>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                  </>
                ):(
                  <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Plase Login to checkout
                    </button>
                  )}
                </div>
                )}
                
              <div className="md-2">
              {!clientToken || !auth?.token || !card?.length ? (
                  ""
                ) : (
                  <>
                <DropIn
                options={{
                    authorization:clientToken,
                    paypal:{
                      flow:"vault",
                    },
                  }}
                  onInstance={instance=>setInstance(instance)}
                />
                 <button
                      className="btn btn-primary"
                      onClick={handlePayment}
                      disabled={loading || !instance || !auth?.user?.address}
                    >
                      {loading ? "Processing ...." : "Make Payment"}
                    </button>

                  </>
                )}
              </div>
            </div>
           </div>
         </div>
        </div>
    </Layout>
  )}

export default CardPage
