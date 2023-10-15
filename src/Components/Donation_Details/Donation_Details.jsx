import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Donation_Details = () => {
    const details=useLoaderData();
    const {id}=useParams();
    const detail=details.find(detail=> detail.id==id);
    console.log(detail);

    <style>
       
    </style>

    return (
      <div className="flex flex-col">
        <div
          className="image-container "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            className="image-wrapper flex flex-col"
            style={{
              width: "80%",
              borderRadius: "0 0 8px 8px",
              background: "rgba(11, 11, 11, 0.50)",
              zIndex: "inherit",
            }}
          >
            <img src={detail.image} alt="" style={{ width: "100%" }} />

            <div className="">
              <button className="btn btn-secondary m-10 text-xl">
                Donate - {detail.price}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 ml-48 w-4/5">
          <h2 className="text-4xl font-bold ">{detail.title}</h2>
          <p className='mt-6 mb-10'>{detail.description}</p>
        </div>
      </div>
    );
};

export default Donation_Details;