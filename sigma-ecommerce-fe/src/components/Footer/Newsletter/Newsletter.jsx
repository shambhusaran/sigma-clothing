import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Wrapper>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <span className="small-text">Newsletter</span>
          <span className="big-text">Signup for latest updates and offers</span>
          <div className="form">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>

          <div className="text">
            Will be used in accordance to our Privacy Policy
          </div>
          <div className="social-icons">
          <a  href='https://www.linkedin.com/in/shambhusaran-parajuli-281b331ba/' target='_blank'> 
            <div className="icon">
              <FaFacebookF size={14} />
            </div>
            </a>
            <a  href="https://www.instagram.com/thegoatedloser/"
                target="_blank"> 
            <div className="icon">
              <FaInstagram size={14} />
            </div>
            
            </a>
            <a href='https://www.facebook.com/profile.php?id=100009379336945' target='_blank'> 
            <div className="icon">
              <FaLinkedin size={14} />
            </div>
            </a>
            <a href="https://twitter.com/Shambhu__Saran" target='_blank'> 
            <div className="icon">
              <FaTwitter size={14} />
            </div>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .newsletter-section {
    width: 100%;
    height: 35rem;
    display: flex;
    align-items: center;
    background: #f9f9f9 url("/images/newsletter-bg.jpeg") ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .newsletter-content {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      text-align: center;
      .small-text {
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.5);
      }
      .big-text {
        margin-bottom: 2rem;
        font-size: 2.8rem;
        line-height: 3rem;
        font-weight: 500;
        text-transform: uppercase;
        padding: 0 3rem;
        font-size: 2rem;
      }

      .form {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
        input {
          width: 30rem;
          height: 4rem;
          border-radius: 0;
          border: 1px solid rgb(0, 0, 0, 0.2);
          padding: 0 1.2rem;
          font-size: 1.6rem;
          outline: 0;
        }
        button {
          outline: 0;
          border: 0;
          height: 4rem;
          width: 12rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.6rem;
          color: white;
          background-color: #8e2de2;
          border-bottom: 3px solid #8e2de2;
        }
      }
      .text {
        margin-bottom: 2rem;
        font-size: 1.4rem;
        color: rgba(0, 0, 0, 0.5);
      }
      .social-icons {
        display: flex;
        gap: 1rem;
        .icon {
          width: 3rem;
          height: 3rem;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .newsletter-section {
      .newsletter-content {
        .small-text {
          font-size: 1.5rem;
        }
        .big-text {
          font-size: 2.2rem;
        }

        .form {
          input {
            width: 20rem;
          }
          button {
            width: 10rem;
          }
        }

        .text {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default Newsletter;
