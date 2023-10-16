import React from 'react';
import { Link } from 'react-router-dom';

const DonateList = ({List}) => {
    const {
        id,
      image,
      title,
      price,
      category_name,
      category_card_background_color,
      text_color,
    } = List;

    const cardStyle = {
      backgroundColor: category_card_background_color,
    };

    const textColorStyle = {
      color: text_color,
    };

    const bgtextColorStyle = {
      background: List.text_color,
    };

    return (
      <div>
        <div className="hero h-max bg-base-200 rounded-lg " style={cardStyle}>
            <div className="hero-content flex-col lg:flex-row max-h-full">
                <img src={image} className="h-auto w-auto rounded-lg shadow-2xl " />
            <div>
              <button
                className="btn btn-outline btn-success w-1/2"
                style={textColorStyle}
              >
                {category_name}
              </button>
              <h1 className="text-4xl font-bold mt-6">{title}</h1>
              <p className="py-6" style={textColorStyle}>
                {price}
              </p>
              <Link to={`/details/${id}`}>
                <button
                  className="btn btn-primary border-none"
                  style={bgtextColorStyle}
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default DonateList;