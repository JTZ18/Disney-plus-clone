import { auth, provider } from '../firebase';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { 
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState
} from "../features/user/userSlice"

function Header(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    // this is a hook. this means that this function only runs when
    // the variable userName is updated. (the dependency variable declared at the end)
    // this ensures functions are not continously called but only called when a variable changes
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user)
                history.push('/home')
            }
        });
    }, [userName]);
    
    const handleAuth = () => {
        if (!userName) { 
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
        }
        else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push('/')
            }).catch((err) => alert(err.message))
        }
    }; 

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            })
        );
    };
    return (
        <Nav>
            <Logo src="/images/logo.svg" alt="Disney+"/>

            {   //if username does not exist means user hasnt signed in yet, show login button. else show pfp
                !userName ? (
                    <Login onClick={handleAuth}>Login</Login>
                ) : (
                
                <>
                    <NavMenu>
                        <a>
                            <img src="/images/home-icon.svg" />
                            <span>HOME</span>
                        </a>
                        <a>
                            <img src="/images/search-icon.svg" />
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img src="/images/watchlist-icon.svg" />
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img src="/images/original-icon.svg" />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg" />
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}> Sign Out</span>
                        </DropDown>
                    </SignOut>
                    
                </>
            )}
        </Nav>
            
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    justify-content: space-between;


`

const Logo = styled.img`
    width: 80px;
    //background: red;
    //border: 1px solid white;
`

const NavMenu = styled.div`
    //background-color: red;
    display: flex;
    margin-right: auto; //good way to push everything to the right of this container to the right responsively
    margin-left: 25px;
    align-items: center;

    @media(max-width: 768px) {
        display: none;
    }

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
        height: 20px;
        }

        span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

            &:after {
                height: 2px;
                content: "";
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`

const UserImg = styled.img`
    height: 100%;
`

const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const DropDown = styled.div`
    position: absolute;
    margin-top: 5px;
    top: 48px;
    right: 25px;
    background: rgb(19,19,19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    padding: 10px;
    letter-spacing: 2px;
    width: 100px;
    font-size: 14px;
    align-items: center;
    display: flex;
    justify-content: center;
    opacity: 0;
`

const SignOut = styled.div`
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;

    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`


