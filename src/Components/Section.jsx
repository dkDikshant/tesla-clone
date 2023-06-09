import React from 'react'
import { styled } from '@mui/material';
import arrow from '../images/down-arrow.svg'
import Fade from 'react-reveal/Fade';



const Wrap = styled('div')(({ bgImage }) => ({

    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'

}))


const ItemText = styled('div')({
    zIndex: -1,
    paddingTop: '15vh',
    textAlign: 'center'
})

const ButtonGroup = styled('div')({
    display: 'flex',
    marginBottom: '30px',


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
const Section = ({ title, backgroundImg }) => {

    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>Order Online For Touchless Delivery</p>
                </ItemText>
            </Fade>
            <div>
                <ButtonGroup>
                    <Fade bottom >
                        <LeftButton>
                            custom order
                        </LeftButton>
                        <RightButton>
                            Existing inventory
                        </RightButton>
                    </Fade>
                </ButtonGroup>

                <DownArrow src={arrow} />
            </div>

        </Wrap>
    )
}

export default Section

