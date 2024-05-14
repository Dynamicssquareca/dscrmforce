import ModelBox from '@/components/ModelBox';
import React from 'react';

const Solution = () => {
    return (
        <>
            <div className='hero-banner-two'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Elevate Your Sales Strategy with Salesforce <span>Sales Cloud</span></h1>
                                <p>Sales Cloud is the ultimate sales tool for modern businesses. From lead management to forecasting, it equips your team with everything they need to drive success.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Demo" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#DDEDF3" d="M51,-48.9C67.1,-34.8,82,-17.4,84.5,2.5C87,22.3,77,44.7,60.8,60.6C44.7,76.5,22.3,86,3.2,82.8C-15.9,79.6,-31.9,63.7,-47.5,47.8C-63,31.9,-78.3,15.9,-78,0.3C-77.8,-15.4,-62,-30.8,-46.4,-44.9C-30.8,-58.9,-15.4,-71.6,1,-72.6C17.4,-73.6,34.8,-62.9,51,-48.9Z" transform="translate(100 100)" />
                        </svg>
                        <div class="elementor-background-overlay">
                            <img src="/img/banner/solutions-banner-1.png" className='bg-top' alt="solutions-banner-1" />
                            <img src="/img/banner/solution-banner-bg-1.png" className='bg-back' alt="solution-banner-bg-1" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Solution;
