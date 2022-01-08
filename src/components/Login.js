import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login

//when adding background image to entire website, use the before method
// same as in home page of Home.js
// notes: bad habit of not defining width of components
const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before {
        content: "";
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/images/login-background.jpg');
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0.7;
    }
`
const CTA = styled.div`
    margin-top: 150px;
    //border: 1px solid red;
    max-width: 750px;
    padding: 80px 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    color: #f9f9f9;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 17px 0px;
    background: #0063e5;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1.5px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    margin-top: 8px;
    margin-bottom: 12px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        background: #0483ee;
    }

`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`