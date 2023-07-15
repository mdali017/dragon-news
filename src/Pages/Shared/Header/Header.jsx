import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavBar from '../../../components/Navber/NavBar';

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary rounded p-2 mb-3'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-white' speed={120}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <NavBar></NavBar>
        </Container>
    );
};

export default Header;