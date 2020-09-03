import React from 'react';
import Data from '../../Data/Data.json'
import { useState } from 'react';
import './DEtails.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart'



const Details = () => {
    const first10=Data.slice(0,10);
    const [courses, setcourses] = useState(first10);
    const[cart,setCart]=useState([]);

    const handleCourses=(courses)=>{
        
        const newCart=[...cart,courses];
        setCart(newCart);

    }

    
    return (
        <div className="detailsContainer">
        <div className="courseContainer">
        {   
            
            courses.map(cs => <Course
                handleCourses={handleCourses}
                course={cs}></Course>)
        }
        </div>
        <div className="cartContainer">
            <Cart cart={cart}></Cart>
        </div>
        
        
       
    </div>
    );
};

export default Details;