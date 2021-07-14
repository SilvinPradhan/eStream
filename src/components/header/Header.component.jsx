import React from 'react'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'

function Header() {
    return (
        <Nav>
            <Logo src="" />
            <NavMenu>
                <Link to="/">
                    <img src="" alt="home" />
                    <span>Home</span>
                </Link>
            </NavMenu>
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

    Link {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
        }
    }
`
