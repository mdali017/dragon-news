import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from '../EditorInsight/EditorInsight';

const News = () => {
    const newsDetails = useLoaderData();
    const { _id, title, details, image_url, category_id, author, total_view, rating } = newsDetails;
    return (
        <>
        <Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                 <Link to={`/category/${category_id}`}><Button variant="primary"><FaArrowLeft></FaArrowLeft> <span className='ms-3'>All news in this category</span></Button></Link>
            </Card.Body>
        </Card>
        <EditorInsight></EditorInsight>
        </>
    );
};

export default News;