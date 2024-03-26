import React from 'react'
import Link from 'next/link'
import { Navbar } from 'react-bootstrap'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const NavComp = () => {
    const session = false;
    const [providers, setPrevious] = useEffect(null);

    useEffect(() => {
        function async initProviders() {
            
        }
        //const initProvider = await getProviders();
        //setProviders(initProvider);
        //console.log(initProvider);
    }, [])
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="primary">
                <Container>
                    <Link
                        className="btn btn-primary me-5"
                        href="/"
                        style={{ fontSize: "22px" }}
                    >
                        BLOG APP
                    </Link>
                    <Nav>
                        <Link className="btn btn-primary me-5" href="/">
                            Posts
                        </Link>
                        <div className="btn btn-primary me-5">
                            Create Post
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavComp;
