import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "./RelatedProduct/RelatedProducts";

const SingleProduct = () => {
  return (
    <Wrapper>
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img src="/images/cat-2.png" alt="image" />
            </div>
            <div className="right">
              <span className="name">Product Name</span>
              <span className="price">Rs 666</span>
              <span className="desc">Product Description</span>
              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span>-</span>
                  <span>5</span>
                  <span>+</span>
                </div>
                <button className="add-to-cart-btn">
                  <FaCartPlus size={20} className="cart-logo" /> ADD TO CART
                </button>
              </div>
              <span className="divider" />
              <div className="info-item">
                <span className="text-bold">
                  Category: <span> Headphones</span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className="socialmedia-icons">
                    <FaFacebook size={16} />
                    <FaTwitter size={16} />
                    <FaInstagram size={16} />
                    <FaLinkedin size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <RelatedProducts  />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* max-width: 120rem; */
  /* margin: 5rem auto; */
  .single-product-main-content {
    margin: 7.5rem 0;

    .layout {
      max-width: 120rem;
      margin: 0 auto;

      .single-product-page {
        display: flex;
        flex-direction: row;
        margin-bottom: 4rem;

        .left {
          width: 50rem;
          height: 50rem;
          flex-shrink: unset;
          background-color: rgba(0, 0, 0, 0.05);
          img {
            width: 100%;
            display: block;
            padding: 8rem;
          }
        }

        .right {
          margin:0 2rem;
          display: flex;
          flex-direction: column;
          padding-top: 3.5rem;
          .name {
            font-size: 2.4rem;
            line-height: 3.2rem;
            margin-bottom: 2rem;
          }
          .price {
            font-size: 2.4rem;
            line-height: 3.2rem;
            margin-bottom: 2rem;
          }
          .desc {
            font-size: 1.6rem;
            line-height: 2.4rem;
            margin-bottom: 2rem;

            color: #6b6b6b;
          }
        }
        .cart-buttons {
          display: flex;
          margin-top: 3rem;

          .quantity-buttons {
            width: fit-content;
            display: flex;
            border: 0.2rem solid rgba(0, 0, 0, 0.2);
            margin-right: 2rem;
            height: 5rem;
            span {
              font-size: 1.8rem;
              width: 4rem;
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
                width: 6rem;
                font-weight: 700;
              }
              &:hover {
                background-color: rgba(0, 0, 0, 0.03);
              }
            }
          }
          .add-to-cart-btn {
            outline: 0;
            border: 0;
            height: 5rem;
            width: 18rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 1.6rem;
            background: #8e2de2;
            color: white;
            border-bottom: 0.3rem solid #6516aa;

            .cart-logo {
              margin-right: 1rem;
            }
          }
        }
        .divider {
          margin: 2rem 0;
          height: 0.1rem;
          background-color: rgba(0, 0, 0, 0.1);
          width: 100%;
        }
        .info-item {
          .text-bold {
            font-size: 1.8rem;
            font-weight: 500;
            display: block;
            &:nth-child(1) {
              margin-bottom: 2rem;
            }
            span {
              font-size: 1.6rem;
              font-weight: 400;
              cursor: pointer;
              color: #6b6b6b;
            }
            svg {
              margin: 0 0.5rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .single-product-main-content {
      margin: 2rem 0;
      .layout {
        max-width: calc(100% - 2rem);
        .single-product-page {
          flex-direction: column;
          .left {
            height: unset;
            width: 100%;
            flex-shrink: 0;
            img {
              padding: 3rem;
            }
          }
          .right {
            padding-top: 2rem;
            .name {
              font-size: 2rem;
              line-height: 2.8rem;
            }
            .desc {
              font-size: 1.4rem;
              line-height: 2rem;
            }
          }
          .cart-buttons {
            margin-top: unset;
            justify-content: space-between;
            .quantity-buttons {
              height: 4rem;
              span {
                font-size: 1.5;
                width: 3rem;
                &:nth-child(2) {
                  width: 5rem;
                }
              }
            }
            .add-to-cart-btn {
              font-size: 1.4rem;
              height: 4rem;
            }
          }
          .info-item{
            .text-bold{
              &:nth-child(1){
                margin-bottom: 1.4rem;
              }

            }

          }
        }
      }
    }
  }
`;
export default SingleProduct;
