import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h6>This is category detail component: {category}</h6>
            <p>Your selected category: {category}</p>
        </div>
    );
};

export default CategoryDetail;