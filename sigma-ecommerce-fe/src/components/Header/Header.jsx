import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Home/Cart/Cart";
import { AppContext } from "../../utils/context";
import styled from "styled-components";

const Header = () => {
  const [isSticky, setISSticky] = useState(false);

  const [cartIsOpened, setCart] = useState(false);
  const [searchIsOpened, setSearch] = useState(false);

  const handleScroll = () => {
    const offset = scrollY;
    if (offset > 200) {
      setISSticky(true);
    } else {
      setISSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <header className={`main-header ${isSticky ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>

          <div className="center">ΣIGMA</div>
          <div className="right">
            <TbSearch  onClick={()=>setSearch(true)}/>
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setCart(true)}>
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {cartIsOpened && <Cart cartCloseFunction={setCart} />}
      {searchIsOpened && <Search searchCloseFunction={setSearch} />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-header {
    width: 100%;
    padding: 0 2rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 0.01rem solid rgba(0, 0, 0, 0.1);
    z-index: 99;

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 8rem;
      max-width: 80vw;
      margin: 0 auto;
      padding: 0;

      .left {
        list-style-type: none;
        display: flex;
        gap: 2.5rem;

        li {
          font-size: 1.4rem;
          font-weight: 600;
          text-transform: uppercase;
          cursor: pointer;
        }
      }
      .center {
        font-size: 3.4rem;
        font-weight: 700;
        position: absolute;
        cursor: pointer;
        left: 50%;
        transform: translateX(-50%);
      }
      .right {
        display: flex;

        gap: 2.4rem;
        align-items: center;
        svg {
          font-size: 2.2rem;
          cursor: pointer;
        }
        .cart-icon {
          position: relative;
          span {
            font-size: 1rem;
            font-weight: 700;
            min-width: 1.7rem;
            text-align: center;
            background-color: #8e2de2;
            padding: 2.5px;
            position: absolute;
            top: -0.5rem;
            right: -1.2rem;
            line-height: 1.3;
            border-radius: 1rem;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .main-header {
      padding: 0 3rem;
      .header-content {
        padding: 0;

        height: 7rem;

        .left {
          display: none;
        }
        .center {
          position: static;
          transform: none;
        }
      }
    }

    .sticky-header {
      position: fixed;
      top: 0;
      transform: translateY(-7rem);
      animation: stickyheader 0.3s ease forwards;
    }
    @keyframes stickyheader {
      0% {
        transform: translateY(-7rem);
      }
      100% {
        transform: translatey(0);
      }
    }
  }
  .sticky-header {
    position: fixed;
    top: 0;
    transform: translateY(-8rem);
    animation: stickyheader 0.3s ease forwards;
  }
  @keyframes stickyheader {
    0% {
      transform: translateY(-8rem);
    }
    100% {
      transform: translatey(0);
    }
  }
`;

export default Header;
