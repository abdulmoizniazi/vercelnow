import React from 'react'

const Hero = () => {
return (
<div>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80)'}}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-myOrange text-myBlackPara hover:text-myOrange hover:bg-myBlackPara hover:border-myOrange border-myOrange rounded-3xl">Get Started</button>
        </div>
        </div>
    </div>
</div>
    )
    }

    export default Hero