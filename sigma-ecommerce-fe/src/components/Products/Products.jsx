import React from "react";
import styled from "styled-components";
import Product from "./Product/Product";


const Products = ({innerPage, sectionTitle}) => {
  return (
    <Wrapper>
      <div className="products-container">
       {!innerPage &&  <div className="sec-heading">{sectionTitle}</div>}
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products-container {
    max-width: 5rem 0;
    .sec-heading {
      margin-bottom: 3.5rem;
      font-size: 2.4rem;
      font-weight: 500;
      text-transform: uppercase;
      &:after {
        content: "";
        display: block;
        margin-top: 1rem;
        width: 5rem;
        height: 0.3rem;
        background-color: #8e2de2;
      }
    }
    .products {
      display: flex;

      flex-flow: wrap;
      gap: 2rem;
    }
   
  }

  @media (max-width: ${({ theme }) => theme.media.media}) {
    .products-container {
      margin: 7.5rem 0;
      .sec-heading {
        margin-bottom: 2rem;
        font-size: 1.8rem;
        &:after {
          margin-top: 0.5rem;
        }
      }
      .products {
        gap: 1rem;
      }
    }
  }
`;
export default Products;
