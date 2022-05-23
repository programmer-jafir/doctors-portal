import React from 'react';

const Service = ({ service }) => {
  const { img, name, description } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>Service
      </div>
    </div>
  );
};

export default Service;