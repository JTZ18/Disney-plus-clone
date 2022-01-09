import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { 
    selectRecommend,
    selectNewDisney,
    selectOriginal,
    selectTrending
} from "../features/movie/movieSlice"

function Movies() {
    const recommend = useSelector(selectRecommend);
    const newDisney = useSelector(selectNewDisney);
    const trending = useSelector(selectTrending);
    const original = useSelector(selectOriginal);

    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                {
                    recommend && recommend.map((movie, key) => (
                        <Wrap key={key}>
                            <Link to={`/detail/` + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
            
            <h4>New to Disney+</h4>
            <Content>
                {
                    newDisney && newDisney.map((movie, key) => (
                        <Wrap key={key}>
                            <Link to={`/detail/` + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>

            <h4>Trending</h4>
            <Content>
                {
                    trending && trending.map((movie, key) => (
                        <Wrap key={key}>
                            <Link to={`/detail/` + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>

            <h4>Originals</h4>
            <Content>
                {
                    original && original.map((movie, key) => (
                        <Wrap key={key}>
                            <Link to={`/detail/` + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>

    )
}

export default Movies

const Container = styled.div`
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 25px;
    


`

const Wrap = styled.div`
        border-radius: 10px;
        border: 3px solid rgba(249, 249, 259, 0.1);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        cursor: pointer;
        overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        inset: 0px;
        display: block;
        z-index: 1;

        
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    }
`