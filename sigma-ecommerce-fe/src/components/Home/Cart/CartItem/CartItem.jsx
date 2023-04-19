import React from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Wrapper>
      <div className="cart-products">
        <div className="cart-product">
          <div className="img-container">
            <img src="/images/cat-2.png" alt="image" />
          </div>
          <div className="prod-details">
            <span className="product-name">Product Name</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
              <span>-</span>
              <span>5</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>3</span>
              <span>X</span>
              <span>Rs 400</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cart-products {
    flex-grow: 1;
    .cart-product {
      padding: 2rem 1.5rem;
      display: flex;
      gap: 1rem;

      .img-container {
        width: 7rem;
        height: 7rem;
        background-color: rgba(0, 0, 0, 0.05);
        flex-shrink: 0;
        padding: 0.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .prod-details {
        width: 100%;
        overflow: hidden;
        position: relative;
    
        .product-name {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 1.6rem;
            line-height: 1;
            margin-bottom: 1rem;
            font-weight: 600;
            display: block;
            padding-right: 2.5rem;
        }
        .text{
            display: flex;
            align-items: center;
            font-size: 1.4rem;
            gap: 0.5rem;
            font-weight: 600;
            .highlight{
                color: #8e2de2
            }
        }
        svg{
            position: absolute;
            top: 0;
            right: 4px;
            font-size: 2rem;
            cursor: pointer;
        }
        .quantity-buttons {
            width: fit-content;
            display: flex;
            border: 0.2rem solid rgba(0, 0, 0, 0.2);
            margin-right: 2rem;
            height: 4rem;
            span {
              font-size: 1.8rem;
              width: 3rem;
              align-items: center;
              display: flex;
              justify-content: center;
              cursor: pointer;
              color: #6b6b6b;
              font-weight: 700;
              &:nth-child(1) {
                border-right: 0.2rem solid rgba(0, 0, 0, 0.2);
              }
              &:nth-child(3) {
                border-left: 0.2rem solid rgba(0, 0, 0, 0.2);
              }
              &:nth-child(2) {
                width: 4rem;
                font-weight: 700;
              }
              &:hover {
                background-color: rgba(0, 0, 0, 0.03);
              }
            }
          }
      }
    }
  }
`;

export default CartItem;
