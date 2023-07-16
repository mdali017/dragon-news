import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftBottom from './LeftBottom/LeftBottom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories, 5)

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4 '>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary fs-5 nav-link active'>{category.name}</Link>
                    </p>)
                }
            </div>
            <LeftBottom></LeftBottom>
        </div>
    );
};

export default LeftNav;