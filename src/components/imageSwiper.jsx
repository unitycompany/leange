import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import styled from "styled-components";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const StyledImage = styled.img`
    width: 90%;
    margin-left: 5%;
    height: 70vh;
    border-radius: 30px;
    object-fit: cover;

    @media (max-width: 768px){
        border-radius: 15px;
    }
`;

const StyledTextOverlay = styled.div`
    position: absolute;
    top: 5%;
    left: 7%;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 10px 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    font-family: var(--font--comfortaa);
    font-size: 0.7rem;

    @media (max-width: 768px){
        left: 40px;
        top: 20px;
        background-color: var(--color--white);
        color: var(--color--black);
        border-radius: 10px;
        box-shadow: none;
    }
`;

const ImageSwiper = ({ images }) => {
    const autoplayDelay = 1500; 

    return (
        <Swiper 
            spaceBetween={10} 
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ position: "relative" }}>
                    <StyledImage src={image.src} alt={`Atração ${index + 1}`} />
                    <StyledTextOverlay>
                        <h3>{image.text}</h3> 
                    </StyledTextOverlay>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSwiper;
