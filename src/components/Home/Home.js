import React from 'react'
import CarouselItem from '../Carousel/Carousel'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return (
        <div className = "home">
            <div className="home__container">
                <div className = "mission">
                    <h2>OUR MISSION</h2>
                    <br />
                    <p> In recent years, humanists in many disciplines have been using 3D digital technologies to capture and model their objects of study, 
                        from humble artifacts such as vases or furniture to entire cities such as ancient Rome.
                    </p>
                    <br />
                    <p> 3D has become a new and powerful form of scholarly expression and communication. The mission of the Virtual World Heritage Laboratory is to apply these new tools not
                        only as interactive illustrations but also as heuristic instruments of discovery. The scope of our interests, as implied by the phrase “World Heritage,” includes the
                        entire human record. The focus of our investigations, as is suggested by the phrase “Virtual World," is the 3D scientific simulation and how it can make possible
                        experiences and experiments that – short of time travel – would otherwise not be possible.
                    </p>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <h2>CURRENT PROJECTS</h2>
                </div>
                <div className = "carousel">
                    <CarouselItem />
                </div>
            </div>
        </div>
    )
}

export default Home
