import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <Wrapper>
      <div className="shop-by-category">
        <div className="categories">
          <div className="category">
            <img src="./images/cat-1.png" alt="image" />
          </div>
          <div className="category">
            <img src="./images/cat-2.png" alt="image" />
          </div>
          <div className="category">
            <img src="./images/cat-3.png" alt="image" />
          </div>
          <div className="category">
            <img src="./images/cat-4.png" alt="image" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .shop-by-category {
    margin: 5rem 0;

    .categories {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      gap: 1rem;

      .category {
        /* background-color: rgb(128,128,128, 0.6); */
        background-color: rgba(0, 0, 0, 0.5);
        width: calc(25% - 12rem);
        cursor: pointer;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          display: block;
          padding: 1.2rem;
          display: block;
          transition: all ease 0.5s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .shop-by-category {
      margin: 2.5rem 0;

      .categories {
        .category {
          width: calc(50% - 2rem);
          img {
            width: 100%;

            display: block;
            transition: all ease 0.3s;

            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
`;

export default Category;
