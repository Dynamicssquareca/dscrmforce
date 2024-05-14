import ModelBox from '@/components/ModelBox';
import React from 'react';
import Image from 'next/image';
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
                        <div class="elementor-background-overlay">
                            <Image src="/img/icons/cloud-hero-bg.png" alt='cloud-hero-bg' className='bg-top' width={434} height={313} />
                            <Image src="/img/banner/solutions-banner-1.png" className='bg-mid' alt="solutions-banner-1" width={993} height={278} />
                            <Image src="/img/banner/solution-banner-bg-1.png" className='bg-back' alt="solution-banner-bg-1" width={1696} height={298} />
                        </div>
                    </div>
                </div>

            </div>

            <section className='bg-white'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Key Features of Salesforce Sales Cloud</span>
                                <h2>Equips your team with the tools they need to drive sales success</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div className='service-box-three'>
                                       <div className='contant-innr'>
                                        <h3>Lead Management</h3>
                                        <p>Capture, nurture, and convert leads seamlessly.</p>
                                       </div>
                                       <div className='contant-innr'>
                                        <h3>Lead Management</h3>
                                        <p>Capture, nurture, and convert leads seamlessly.</p>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Solution;
