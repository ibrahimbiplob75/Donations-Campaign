import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {
      id,
      image,
      title,
      category_name,
      color,
      category_background_color,
      category_card_background_color,
      text_color,
    } = category;

     const cardStyle = {
       backgroundColor: category_card_background_color,
     };

     const textColorStyle = {
       color: text_color,
     };
    return (
      <div>
        <div className="card w-96  shadow-xl " style={cardStyle}>
          <figure>
            <img className="w-full" src={image} alt="Shoes" />
          </figure>

          <div className="card-body">
            <Link to={`/details/${id}`}>
              <button
                className="btn btn-outline btn-success w-1/2"
                style={textColorStyle}
              >
                {category_name}
              </button>
            </Link>
            <h2 className="card-title " style={textColorStyle}>
              {title}
            </h2>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    );
};

export default Category;