import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navi() {
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const navigate = useNavigate()
    function handleSignOut() {
        setisAuthenticated(false)
        navigate("/")
    }
    function handleSignIn() {
        setisAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed>
                <Container>
                    <Menu.Item
                        as={NavLink} to="/" name='Ana Sayfa'
                    />
                    <Menu.Item
                        name='İletişim'
                    />
                    <Menu.Item
                        name='Hakkımızda'
                    />
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div >
    )
}
