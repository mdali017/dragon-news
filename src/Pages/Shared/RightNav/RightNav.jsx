import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'



const RightNav = () => {
    return (
        <div>
            <h2 className='fw-bold mb-4'>Log With</h2>
            <div className='gap-3'>
                <Button variant="outline-primary mb-2 w-75"> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-secondary w-75"> <FaGithub></FaGithub> Login With github</Button>
            </div>
            <div className='mt-4'>
                <h2>Find Us On</h2>
                <ListGroup variant="flush" className='border'>
                    <ListGroup.Item> <FaFacebookF className='border rounded fs-4'></FaFacebookF> <span className='ms-5'>Facebook</span> </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='border rounded fs-4'></FaTwitter> <span className='ms-5'>Twitter</span> </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='border rounded fs-4'></FaInstagram> <span className='ms-5'>Instagram</span> </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='rounded'>
                <img src={bg} className='rounded position-absolute' alt="" />
                <div className='position-relative text-white p-3 text-center '>
                    <h3 className='mt-5 mb-5'>Create an Amazing Newspaper</h3>
                    <p className='fs-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="warning mt-5">Learn More</Button>
                </div>

            </div>
        </div>
    );
};

export default RightNav;