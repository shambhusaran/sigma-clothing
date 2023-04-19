import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Wrapper>
      <div className="hero-banner">
        <div className="content">
          <div className="text-content">
            <h1 className="h1-for-desktop">ΣIGMA</h1>
            <p>
              ΣIGMA Clothing is a fashion-forward brand that offers high-quality
              clothing for men and women. With a focus on sustainability and
              ethical production, their collections feature stylish and
              comfortable pieces that are made to last.
            </p>

            <div className="ctas">
              <div className="banner-cta">Read More</div>
              <div className="banner-cta v2">Shop Now</div>
            </div>
          </div>
          <img
            className="banner-img"
            src="./images/bannerImg.png"
            alt="image"
          />
          <h1 className="h1-for-mbl">ΣIGMA</h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero-banner {
    padding: 4rem 0%;
    /* position: relative; */
    background-image: ${({ theme }) => theme.colors.gradient};
    height: calc(100vh - 8rem);

    .content {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      max-width: 80vw;
      margin: 0 auto;
    }
    .h1-for-mbl {
      display: none;
    }
    .banner-img {
      position: relative;

      margin-right: 6rem;
      margin-top: 5rem;
      margin-bottom: 0;
    }

    .text-content {
      color: ${({ theme }) => theme.colors.white};
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;

      top: 50%;
      transform: translateY(-50%);

      .ctas {
        display: flex;
        justify-content: center;
        gap: 2rem;
        .banner-cta {
          text-transform: uppercase;
          font-weight: 500;
          font-size: 1.6rem;
          border: 2px solid ${({ theme }) => theme.colors.white};
          padding: 1rem 2rem;
          cursor: pointer;

          &:hover {
            opacity: 0.6;
          }
        }
        .v2 {
          background-color: white;
          color: black;
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .hero-banner {
      height: calc(100vh - 5rem);
      padding: 0%;
      .h1-for-mbl {
        display: inline;
        text-align: center;
        /* justify-content: center; */
        /* padding-bottom: 3rem; */
        position: absolute;
       top: 8rem;
       left: 50%;
       transform: translateX(-50%);
        
       
      }
      .content {
        .h1-for-desktop {
          display: none;
          top: 30%;
       
        }

        max-width: none;
        flex-direction: column-reverse;
        justify-content: center;
        .text-content {
          position: static;
          transform: translateY(-0%);
          p {
            margin-top: 0;
            margin-bottom: 2rem;
            text-align: justify;
            padding: 0 2.5rem;
          }
        }
        .banner-img {
          margin-top: 1rem;
          /* z-index: 9; */
          margin-right: 10%;
          width: 22rem;
          align-self: center;
          position: static;

        }
        .ctas {
          /* padding-bottom: 9rem; */

    
        }

      }
    }
  }
`;

export default Banner;
