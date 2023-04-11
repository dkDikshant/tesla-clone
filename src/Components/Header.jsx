import React from 'react'
import { styled } from '@mui/material';
import logo from '../images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';


const Container = styled('div')({
    minHeight: '60px',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    top: 0,
    left: 0,
    right: 0

})
const Menu = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    '& a': {
        fontWeight: 600,
        textTransform: 'uppercase',
        padding: '0 10px',
        flexWrap: 'nowrap'
    }

})
const RightMenu = styled('div')({
    display: 'flex',
    alignItems: 'center',
    '& a': {
        fontWeight: 600,
        textTransform: 'uppercase',
        padding: '0 10px',
        flexWrap: 'nowrap'
    }

})


const Header = () => {
    return (
        <Container>
            <a >
                <img src={logo} alt="" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <MenuIcon />
            </RightMenu>

        </Container>
    )
}

export default Header
