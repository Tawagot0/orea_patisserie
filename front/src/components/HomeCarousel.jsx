import {EffectCoverflow, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import img from "../images/cookies.jpg";
import img1 from "../images/brownies.jpg";
import img2 from "../images/Tarte.jpg";
import img3 from "../images/Entremets.jpg";
import img4 from "../images/Number cake.jpg";
import img5 from "../images/Réducs.jpg";

const HomeCarousel =() => {
    return (
        <Swiper
            modules={[EffectCoverflow, Autoplay, Navigation]}
            speed={1500}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            effect={"coverflow"}
            breakpoints={{
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
                },
            950: {
                slidesPerView: 3,
                spaceBetween: 50,
                },
            }}
            grabCursor={true} 
            loop={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: true
            }}
            navigation={true}
            className="mySwiper"
            >
            <SwiperSlide>
                <img src={img2} alt="Tarte"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img} alt="cookies"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="entremets"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt="brownies"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="cake"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="réducs"/>
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeCarousel;