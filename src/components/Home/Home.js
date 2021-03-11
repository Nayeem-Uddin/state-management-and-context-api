import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div style={{border:'2px solid salmon'}}>
            <h2>This is Home Component : {category}</h2>
            <Categories></Categories>
        </div>
    );
};

export default Home;