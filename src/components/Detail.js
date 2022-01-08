import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D8AEB7DE234898392BFD20E7D9B112B841E920AF9A3F54CCFB966722AFF3461/scale?width=1920&aspectRatio=1.78&format=jpeg"/>
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF737B93E2F2ABE27C74CBBEB322F18A421E7986129E9989587CEF2295B0447F/scale?width=1344&aspectRatio=1.78&format=png"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                    2018 ・ 7m ・ Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    border: 1px solid red;

    
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    padding-top: 20px;
    //border: 4px solid blue;
    display: flex;
    align-items: center;
    
`

const PlayButton = styled.button`
    margin-right: 22px;
    display: flex;
    align-items: center;
    //border: 2px solid red;
    padding: 0px 24px;
    border-radius: 10px;
    background: white;
    border: none;
    font-size: 15px;
    height: 56px;
    cursor: pointer;
    letter-spacing: 1.8px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgb(0,0,0,0.3);
    border: 1px solid rgb(249,249,249,1);
    //border: 2px solid red;
    color: white;
    text-transform: uppercase;

`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 16px;
    border-radius: 50%;
    background: rgb(0,0,0,0.3);
    border: 1px solid rgb(249,249,249,1);
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    span {
        font-size: 30px;
    }

    &:hover {
        background: rgb(249,249,249,1);
        color: black;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);

    &:hover {
        img {
            filter: brightness(1) invert(1);
        }
    }
`    

const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    margin-top: 16px;
    //border: 1px solid red;
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249,249,249);
`