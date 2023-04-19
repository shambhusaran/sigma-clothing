import React from "react";
import styled from "styled-components";

import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  return (
    <Wrapper>
      <div>
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category />
            <Products sectionTitle= "Popular Products"/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-content {
    max-width: 120rem;
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .main-content {
      max-width: calc(100% - 2rem);
    }
  }
`;
export default Home;
