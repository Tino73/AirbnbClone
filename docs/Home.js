import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import card1 from "./card1.jpg"
import card2 from "./card2.jpg"
import card3 from "./card3.jpg"
import card4 from "./card4.jpg"
import card5 from "./card5.jpg"
import card6 from "./card6.jpg"


function Home() {
    return (
        <div classname='home'>
            <Banner />
            <div className="home__section">
                <Card 
                src={card1}
                title="Explore"
                description="Experience life, try new things!"
                />
                 <Card 
                src={card2}
                title="Amazing Rooms"
                description="You will feel the most comfortable with us!
                Beautiful rooms with minimalist designs!"
                />
                 <Card 
                src={card3}
                title="Unique Experiences"
                description="Spaces that are more than a place to sleep,
                amazing views starting at your yard!"
                />
            </div>
            <div className="home__section">
                <Card 
                src={card4}
                title="Entire Homes"
                description="Comfortable private places, with room for friends or
                family" 
                />
                 <Card 
                src={card5}
                title="Everything Starts Online"
                description="Find the perfect place for your vacation now!" 
                />
                 <Card 
                src={card6}
                title="Indoor-Outdoor"
                description="Bohemian style indoors for nature lovers." 
                />
            </div>
        </div>
    )
}

export default Home
