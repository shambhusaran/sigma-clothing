import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cartCloseFunction }) => {
  return (
    <Wrapper>
      <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span
              className="close-btn"
              onClick={() => cartCloseFunction(false)}
            >
              <MdClose />
              <span className="text">Close</span>
            </span>
          </div>
          {/* <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-to-shop" onClick={()=>cartCloseFunction(false)}>RETURN TO SHOP</button>
          </div> */}
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="sub-total">
                <span className="text">Subtotal: </span>
                <span className="text-total">Rs 666</span>
              </div>
              <div className="button">
                <button className="checkout-btn">Check Out</button>
              </div>
            </div>
          </>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cart-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 99;
    .opac-layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .cart-content {
      width: 34rem;
      height: 100%;
      position: relative;
      z-index: 1;
      background: white;
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      transform: translateX(100%);
      animation: cartAnimation 0.3s ease forwards;
      .cart-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 2rem 1.5rem;
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.5);

        .heading {
          flex-grow: 1;
          margin-bottom: 0;
          font-size: 2rem;
          font-weight: 700;
          text-transform: uppercasea;
        }

        .close-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          svg {
            font-size: 1.8rem;
          }

          .text {
            font-size: 1.4rem;
            text-transform: uppercase;

            &:hover {
              opacity: 0.5;
            }
          }
        }
      }
      .empty-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin-top: 10rem;
        span {
          font-size: 1.4rem;
          font-weight: 700;
        }
        svg {
          font-size: 12rem;
          opacity: 0.1;
        }

        .return-to-shop {
          outline: 0;
          border: 0;
          height: 4rem;
          width: 15rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.3rem;
          background: #8e2de2;
          color: white;
          border-bottom: 0.3rem solid #6516aa;
        }
      }

      .cart-footer {
        border-top: 0.1rem solid rgba(0, 0, 0, 0.1);

        .sub-total {
          padding: 2rem 1.5rem;
          border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;

          .text {
            font-size: 2rem;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 0;
          }
          .text-total {
            font-size: 2rem;
            font-weight: 700;

            color: #8e2de2;
          }
        }

        .button {
          padding: 2rem 1.5rem;
          .checkout-btn {
            outline: 0;
          border: 0;
          height: 5rem;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.6rem;
          background: #8e2de2;
          color: white;
          border-bottom: 0.3rem solid #6516aa;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .cart-panel {
      .opac-layer {
      }
      .cart-content {
        width: 100%;
        .empty-cart {
          .return-to-shop {
            font-size: 1.4rem;
            height: 4rem;
          }
        }
        .cart-footer {
          .sub-total {
            .text {
              .text-total {
              }
            }
          }

          .button {
            .checkout-btn {
            }
          }
        }
      }
    }
  }
  @keyframes cartAnimation {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
export default Cart;
