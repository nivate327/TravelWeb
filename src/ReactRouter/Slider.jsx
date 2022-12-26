import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

import { Navigation } from "swiper";
import tiger from "./profile.jpg"


const Slider = () => {
    return (
        <>
            <div className="sliderSection">
                <div className="ourSlider">
                    <p className="explore">Our client testimonials</p>
                    <h4 className="works">What our client say</h4>
                </div>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <p class="slideText">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Porro, accusamus
                            consequuntur officiis non,<br />
                            mollitia fuga reiciendis temporibus ipsa ad aspernatur a delectus dolor,
                            facere voluptate <br /> nulla odio culpa qui quae! </p>

                        <div class="commentBy">
                            <img src={tiger} alt="" class="commenter" />

                            <div class="profile">
                                <p class="name">Oliva Jems</p>
                                <p class="skill">UX Developer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p class="slideText">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Porro, accusamus
                            consequuntur officiis non,<br />
                            mollitia fuga reiciendis temporibus ipsa ad aspernatur a delectus dolor,
                            facere voluptate <br /> nulla odio culpa qui quae!</p>

                        <div class="commentBy">
                            <img src={tiger} alt="" class="commenter" />

                            <div class="profile">
                                <p class="name">Oliva Jems</p>
                                <p class="skill">UX Developer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Slider
