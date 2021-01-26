import React, { useState } from 'react';
import Logo from '../logo1.png';
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button";

const TopNav = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand " href="/">
        <img src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" />
      </a>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <a className="nav-link navbarText1" href="/about">about</a>
        <a className="nav-link navbarText1" href="/portfolio">portfolio</a>
        <a className="nav-link navbarText1" href="/kindwords">kind words</a>
        <a className="nav-link navbarText1" href="/products">shop</a>
        <a className="nav-link navbarText1" href="/contact">contact</a>
        <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className ="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
        </div>
    </nav>
  );
}

export default TopNav;