import React from 'react'
import { Typography, styled } from '@mui/material';
import models from '../images/model-s.jpg'
import arrow from '../images/down-arrow.svg'

const Wrap = styled('div')({
    width: '100vw',
    height: '100vh',
    backgroundImage: `URL(${models})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
})
const ItemText = styled('div')({
    paddingTop: '15vh',
    textAlign: 'center'
})

const ButtonGroup = styled('div')({
    display: 'flex',
    marginBottom: '30px'

})
const LeftButton = styled('div')({
    backgroundColor: 'rgba(23,26,32,0.8)',
    height: '40px',
    width: '256px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100px',
    opacity: '0.85',
    textTransform: 'uppercase',
    fontSize: '15px',
    cursor: 'pointer',
    margin: '2px'


})

const RightButton = styled('div')({
    backgroundColor: 'rgba(23,26,32,0.8)',
    height: '40px',
    width: '256px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100px',
    opacity: '0.85',
    textTransform: 'uppercase',
    fontSize: '15px',
    cursor: 'pointer',
    margin: '2px',
    background: 'white',
    opacity: '0.65',
    color: 'black'


})
const DownArrow = styled('img')({
    height: '40px',
    marginLeft: '230px',
    animation: 'animateDown infinite 1.5s'
})
const Section = () => {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online For Touchless Delivery</p>
            </ItemText>
            <div>
                <ButtonGroup>
                    <LeftButton>
                        custom order
                    </LeftButton>
                    <RightButton>
                        Existing inventory
                    </RightButton>
                </ButtonGroup>
                <DownArrow src={arrow} />
            </div>

        </Wrap>
    )
}

export default Section

