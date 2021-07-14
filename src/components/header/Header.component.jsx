import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

function Header() {
    return (
        <Nav>
            <Logo src="" />
            <NavMenu>

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

`
