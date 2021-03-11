import React, { useContext } from 'react';
import { CategoryContext } from '../../App'

const Shipment = () => {
    const [category,setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h2>This is shipment component: {category}</h2>
            <button onClick={()=>setCategory(category+1)}>Increase button from header</button>
        </div>
    );
};

export default Shipment;