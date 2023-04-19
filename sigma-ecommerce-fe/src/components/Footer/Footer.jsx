import React from "react";
import styled from "styled-components";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="footer-content">
          <div className="col about-col">
            <div className="title">About</div>
            <div className="text about-text">
              ΣIGMA Clothing is a fashion-forward brand that offers high-quality
              clothing for men and women. With a focus on sustainability and
              ethical production, their collections feature stylish and
              comfortable pieces that are made to last.
            </div>
          </div>
          <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
              <FaLocationArrow />
              <div className="text">
                SINGHA DURBAR Kathmandu, Durbar Margha, 44600
              </div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone: +977 9845534223</div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email: Sigmaclothingnepal@gmail.com</div>
            </div>
          </div>
          <div className="col categories-col">
            <div className="title">Categories</div>
            <span className="text">T-shirts</span>
            <span className="text">Hoodies</span>
            <span className="text">Shirts</span>
            <span className="text">Shorts</span>
            <span className="text">Joggers</span>
            <span className="text">Pants</span>
          </div>
          <div className="col pages-col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Categories</span>
            <span className="text">Contact us</span>
            <span className="text">Terms & Conditions</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              SIGMA Clothing 2023 CREATED BY SHAMBHUSARAN PARAJULI, ECOM
            </div>
            <img src="/images/payments.png" alt="image" />
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer {
    width: 100%;
    .footer-content {
      padding: 5rem 0;
      max-width: 125rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-flow: wrap;
      gap: 2rem;
      .col {
        max-width: 30rem;
        .title {
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        .text {
          color: rgba(0, 0, 0, 0.5);
          font-size: 1.4rem;
        }
        .c-item {
          display: flex;
          margin-bottom: 1rem;
          svg {
            flex-shrink: 0;
            font-size: 1.4rem;
            margin-right: 1rem;
            margin-top: 0.4rem;
            color: rgba(0, 0, 0, 0.5);
          }
        }
        span {
          display: block;
          margin-bottom: 1rem;
          cursor: pointer;
        }
      }
      .about-text {
        text-align: justify;
      }
    }

    .bottom-bar {
      border-top: 0.1rem solid rgba(0, 0, 0, 0.1);

      justify-content: center;
      padding: 0;

      .bottom-bar-content {
        height: 6rem;
        /* padding: 0 14rem; */
        display: flex;
        max-width: 120rem;
        margin: 0 auto;

        align-items: center;
        flex-direction: row;
        text-align: left;
        justify-content: space-between;
        gap: 4rem;
        .text {
          font-size: 1.5rem;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .footer {
      .footer-content {
        justify-content: none;
        padding: 5rem 2.5rem;
        /* .categories-col {
          padding-left: 3rem;
        }
        .pages-col {
          padding-right: 3rem;
        } */
        .col{
          max-width: 100vw;
        }
        gap: 2rem;

        
      }

      .bottom-bar {

        .bottom-bar-content {
          padding: 0 2rem;
          
          text-align: center;
          display: block;

         
          .text {
            font-size: 1rem;
            padding: 1rem 0;
          }
        }
      }
    }
  }
`;

export default Footer;
