import React from "react";
import styled from "styled-components";


const Product = () => {
  return (
    <Wrapper>
      <div className="thumbnail">
        <img src="/images/prod-1.png" alt="" />
      </div>
      <div className="product-details">
        <span className="name">Product name</span>
        <span className="price">Rs.999</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: calc(25% - 1.5rem);
  margin-bottom: 2rem;
  .thumbnail {
    width: 100%;
    height: 35rem;
    background-color: rgba(0, 0, 0, 0.05);
    margin-bottom: 1rem;
    padding: 3rem;
    display: flex;
    align-items: center;

    img {
      transition: all ease 0.5s;
      display: block;
      width: 100%;
    }
  }
  .product-details {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .price {
      font-size: 2.4rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: calc(50% - 1rem);
    .thumbnail {
      padding: 2.5rem;
      height: 18rem;
      img {
      }
    }
    .product-details {
      .name {
        font-size: 1.4rem;
      }
      .price {
        font-size: 1.4rem;
      }
    }
  }
  &:hover {
    .thumbnail {
      img {
        transform: scale(1.2);
      }
    }
  }
`;

export default Product;
