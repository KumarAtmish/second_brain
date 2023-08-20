"use client";

import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Silder = () => {
    const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item key={1} className="item" interval={10000}>
                <div className="row">
                    <div className="col-md-4 order-md-1 stepCount">
                        Step 1
                    </div>
                    <div className="col-md-4 order-md-3 stepInfo">
                        <div className="stepTitle">Register on App</div>
                        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="col-md-4 order-md-2">
                        <img src="/Step1.png" alt="Second Brain" />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item key={2} className="item" interval={4000}>
                <div className="row">
                    <div className="col-md-4 order-md-1 stepCount">
                        Step 2
                    </div>
                    <div className="col-md-4 order-md-3 stepInfo">
                        <div className="stepTitle">Register on App</div>
                        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="col-md-4 order-md-2">
                        <img src="/Step1.png" alt="Second Brain" />
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Silder;