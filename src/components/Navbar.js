import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import icon from '../logo2.png';
import styled from "styled-components";
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
    render () {
        return (
            
            <NavWrapper className="navbar  black  px-sm-5 ">
                
                <Link to="/" className="navbarText1">
                  |  f  |

                </Link>
                <ul className = "navbar-nav ">
                    <li className="nav-item ml-3">
                        <Link to="/about" className="navbarText">
                            about
                        </Link>
                    </li>
                </ul>
                <ul className = "navbar-nav">
                    <li className="nav-item ml-3">
                        <Link to="/portfolio" className="navbarText">
                            portfolio
                        </Link>
                    </li>
                </ul>
                <ul className = "navbar-nav">
                    <li className="nav-item ml-3">
                        <Link to="/kindwords" className="navbarText">
                            reviews
                        </Link>
                    </li>
                </ul>
                <ul className = "navbar-nav">
                    <li className="nav-item ml-3">
                        <Link to="/products" className="navbarText">
                            shop
                        </Link>
                    </li>
                </ul>
                <ul className = "navbar-nav">
                    <li className="nav-item ml-3">
                        <Link to="/contact" className="navbarText">
                            contact
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className ="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: transparent;
    position: fixed,
    bottom: 0,
    .nav-link{
        color: var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize;
    
    }
`;
