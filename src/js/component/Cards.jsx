import React from "react";

import { infoCards } from './data.js';

export const Cards = () => {
    const cardStyle = {
        height: "100%",
    }
    const listCards = infoCards.map(card =>
        <div key={crypto.randomUUID()} className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
            <div className="card text-center p-0" style={cardStyle}>
                <img src={card.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                </div>
                <div className="card-footer">
                    <a href={card.buttonUrl} className="btn btn-primary">{card.buttonLabel}</a>
                </div>
            </div>
        </div>
    );
    return (<div className="row">{listCards}</div>)
};