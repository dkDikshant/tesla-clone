import React, { useState } from 'react'
import { styled, Drawer, Button, List, ListItem, ListItemText } from '@mui/material';
import logo from '../images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
import Fade from 'react-reveal/Fade';

const Container = styled('div')({
    minHeight: '60px',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1

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


const CloseWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer'
})
const Header = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const cars = useSelector(selectCars)
    console.log(cars);
    return (
        <Fade duration={3000} delay={500}>

            <Container>
                <a >
                    <img src={logo} alt="" />
                </a>
                <Menu>
                    {cars && cars.map((car, index) => {

                    })}
                    <a href="#">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                </Menu>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                    <MenuIcon onClick={handleOpen} style={{ cursor: 'pointer' }} />
                </RightMenu>
                <div style={{ transition: 'transform 0.2s ease-in' }} >
                    <Drawer
                        anchor="right"
                        open={open}
                        onClose={handleClose}
                    >
                        <div style={{ width: 300 }}>
                            <CloseWrapper>
                                <CloseIcon onClick={handleClose} />
                            </CloseWrapper>
                            <List>
                                <ListItem onClick={handleClose}>
                                    <ListItemText>Existing Inventory</ListItemText>
                                </ListItem>
                                <ListItem onClick={handleClose}>
                                    <ListItemText>Existing Inventory</ListItemText>
                                </ListItem>
                                <ListItem onClick={handleClose}>
                                    <ListItemText>Existing Inventory</ListItemText>
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>

                </div>

            </Container>
        </Fade>
    )
}

export default Header
