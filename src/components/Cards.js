import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img-9.jpg'
                        text="Explore this amazing waterfall"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        text="Relax on a tropical island"
                        label="Luxury"
                        path="/services"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img-1.jpg'
                        text="Take a sunrise mountain hike"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src='images/img-3.jpg'
                        text="Set sail across the Atlantic"
                        label="Adventure"
                        path="/services"
                        />
                         <CardItem
                        src='images/img-4.jpg'
                        text="Participate in island soccer"
                        label="Sport"
                        path="/services"
                        />
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default Cards
