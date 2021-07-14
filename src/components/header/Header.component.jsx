import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="/">
                    <img src="/images/home-icon.svg" alt="Home" />
                    <span>HOME</span>
                </a>
                <a href="/">
                    <img src="/images/search-icon.svg" alt="Search" />
                    <span>Search</span>
                </a>
                <a href="/">
                    <img src="/images/watchlist-icon.svg" alt="Watchlist" />
                    <span>Watchlist</span>
                </a>
                <a href="/">
                    <img src="/images/original-icon.svg" alt="Originals" />
                    <span>Originals</span>
                </a>
                <a href="/">
                    <img src="/images/movie-icon.svg" alt="Movies" />
                    <span>Movies</span>
                </a>
                <a href="/">
                    <img src="/images/series-icon.svg" alt="Series" />
                    <span>Series</span>
                </a>
            </NavMenu>
            <UserAvatar src="/images/profile.jpg" />
        </Nav>
    )
}

export default withRouter(Header)

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;
        color: white;
        cursor: pointer;

        img {
            height: 25px;
        }

        span {
            font-size: 14px;
            letter-spacing: 1.5px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left:0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`