import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Carousel.css";


import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';


function CarouselItem() {
    return (
        <div className = "carousel">
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First Project</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second Project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third Project</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img4}
                    alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    <h3>Fourth Project</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}

export default CarouselItem
