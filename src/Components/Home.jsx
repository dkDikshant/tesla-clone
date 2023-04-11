import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import model from '../images/model-s.jpg'
import model3 from '../images/model-3.jpg'
import modelx from '../images/model-x.jpg'
import modely from '../images/model-y.jpg'

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description='Order Online For Touchless Delivery'
                backgroundImg={model}
            />
            <Section
                title="Model X"
                description='Order Online For Touchless Delivery'
                backgroundImg={modelx}
            />
            <Section
                title="Model Y"
                description='Order Online For Touchless Delivery'
                backgroundImg={modely}
            />
            <Section
                title="Model 3"
                description='Order Online For Touchless Delivery'
                backgroundImg={model3}
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh
`
