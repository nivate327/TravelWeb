import React from 'react'

const FeaturedCatgories = () => {



    const FeatureArr = [
        {
            icon: "fa-bed",
            service: "Leaving Hotel",
            description: "Must explain your how this keind denoun pleasure"
        },
        {
            icon: "fa-champagne-glasses",
            service: "Night Life",
            description: "Must explain your how this keind denoun pleasure"
        },
        {
            icon: "fa-house",
            service: "Culture Place",
            description: "Must explain your how this keind denoun pleasure"
        },
        {
            icon: "fa-bell-concierge",
            service: "Resturent",
            description: "Must explain your how this keind denoun pleasure"
        },
    ]

    return (
        <>
            <div className="feuturedCatgories">
                <div className="featuredHeading">
                    <p className="explore">We are offering for you</p>
                    <h4 className="works">Featured Categories</h4>
                </div>

                <div className="container">
                    <div className="row featurecrdmain">
                        {
                            FeatureArr.map((elem) => {
                                return (
                                    <>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-10 featurecrdmain">
                                            <div className="card featureCard">
                                                
                                                    <i class={`fa-solid ${elem.icon} featureIcon`}></i>
                                                    <h3 className="service">{elem.service}</h3>
                                                    <p className="service_description">{elem.description}</p>
                                                    <button className='btn viewDetails'>View Detail</button>
                                                
                                                    <div className="feature"></div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedCatgories
