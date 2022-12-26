import React from 'react';
import newyork from './new york.jpg';


const OurBlog = () => {


    const BlogArr = [
        {
            img: "../img/cityJapan.jpg",
        },
        {
            img: "../img/mountain.jpg",
        },
        {
            img: "../img/citynewyork.jpg",
        },

    ]

    return (
        <>
            <div className="ourBlog">
                <div className="ourBlogHeading">
                    <p className="explore">Our blog</p>
                    <h4 className="works">News and tips</h4>

                    <div className="container blog-c">
                        <div className="row blog">
                            {BlogArr.map((elem) => {
                                return (
                                    <>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
                                            <div className="blogCard">
                                                <div className="newstips">
                                                    <img src={elem.img} alt="" className='newstipsImg' />
                                                </div>


                                                <p className="healthandcare">HEALTH & CARE</p>
                                                <h2 className='blogdescip'>The Best SPA Salons For Your Relaxation</h2>
                                                <p className="date">October 6, 2020by Steve</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurBlog
