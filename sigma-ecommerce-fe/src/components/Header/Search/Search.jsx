import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const Search = ({ searchCloseFunction }) => {
  return (
    <Wrapper>
      <div className="search-model">
        <div className="form-field">
          <input type="text" autoFocus placeholder="Search For Products" />
          <MdClose
            className="close-btn"
            onClick={() => searchCloseFunction(false)}
          />
        </div>
        <div className="search-result-content">
          <div className="search-results">
            <div className="search-result-item">
              <div className="img-container">
                <img src="/images/cat-3.png" alt="" />
              </div>
              <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="desc">Product Description</span>
              </div>
              <div className="price">Rs 300</div>
            </div>
            <div className="search-result-item">
              <div className="img-container">
                <img src="/images/cat-3.png" alt="" />
              </div>
              <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="desc">Product Description</span>
              </div>
              <div className="price">Rs 300</div>
            </div>
            <div className="search-result-item">
              <div className="img-container">
                <img src="/images/cat-3.png" alt="" />
              </div>
              <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="desc">Product Description</span>
              </div>
              <div className="price">Rs 300</div>
            </div>
            <div className="search-result-item">
              <div className="img-container">
                <img src="/images/cat-3.png" alt="" />
              </div>
              <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="desc">Product Description</span>
              </div>
              <div className="price">Rs 300</div>
            </div>
            <div className="search-result-item">
              <div className="img-container">
                <img src="/images/cat-3.png" alt="" />
              </div>
              <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="desc">Product Description</span>
              </div>
              <div className="price">Rs 300</div>
            </div>
            <div className="search-result-item">
              <div className="img-container">
                <img src="/images/cat-3.png" alt="" />
              </div>
              <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="desc">Product Description</span>
              </div>
              <div className="price">Rs 300</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .search-model {
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    transform: translateY(100%);
    animation: slideSearchWindow 0.5s ease forwards;

    .form-field {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 2rem 0;

      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
      position: relative;
      input {
        width: 100%;
        max-width: 120rem;
        height: 8rem;
        text-align: center;
        font-size: 4.8rem;
        font-weight: 600;
        color: #212121;
        outline: none;
        border: none;
        text-transform: uppercase;
      }
      .close-btn {
        position: absolute;
        font-size: 5rem;
        right: 4rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
    .search-result-content {
      max-width: 80rem;
      margin: 0 auto;
      .search-results {
        height: calc(100vh - 16rem);
        overflow: auto;
        margin: 2rem 0;
        .search-result-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
          cursor: pointer;
          .img-container {
            background-color: rgba(0, 0, 0, 0.05);
            width: 9rem;
            height: 9rem;
            flex-shrink: 0;
            img {
              padding: 1.3rem;
              height: 100%;
              width: 100%;
            }
          }
          .prod-details {
            overflow: hidden;
            .name {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              font-size: 1.8rem;
              line-height: 1;
              margin-bottom: 1rem;
              font-weight: 600;
              display: block;
            }
            .desc {
              font-size: 1.7rem;
              line-height: 1;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              color: rgba(0, 0, 0, 0.5);
            }
          }
          .price {
            position: absolute;
            top: 1.5rem;
            right: 3.5rem;
            font-size: 1.44rem;
            color: #8e2de2;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .search-model {
      .form-field {
        padding: 1rem 2rem;
        input {
          font-size: 1.5rem;
          height: 5rem;
          position: relative;
          text-transform: capitalize;
          ::placeholder {
            position: absolute;
            font-size: 1.8rem;
            left: 0;
            top: calc(100% / 2);
            transform: translateY(-50%);
          }
        }
        .close-btn {
          font-size: 2.5rem;
          right: 2rem;
        }
      }
      .search-result-content {
        max-width: calc(100% - 2rem);
        height: calc(100vh - 7.8rem);
        .search-results {
          height: calc(100vh - 7.8rem);
         
          .search-result-item {
            .img-container {
              width: 6rem;
              height: 6rem;
            }
            .prod-details {
              .name {
              }
              .desc {
              }
            }
          }
        }
      }
    }
  }
  @keyframes slideSearchWindow {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default Search;
