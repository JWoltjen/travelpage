import React from 'react'
import {Button} from './Button'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/video/video-2.mp4" autoPlay loop muted /> 
            <h1>Adenture Awaits</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Get Started
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
