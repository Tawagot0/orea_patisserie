import {Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import img from "../images/cookies.jpg";
import img1 from "../images/des1.jpg";
import img2 from "../images/des2.jpg";
import img3 from "../images/des3.jpg";

const HomeCarousel =() => {
    return (
        <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
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
            1024: {
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
            pagination={{
                type: "progressbar"
            }}
            navigation={true}
            className="mySwiper"
            >
            <SwiperSlide>
                <img src={img} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt="dessert"/>
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeCarousel;