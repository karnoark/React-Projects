import React from "react";
import hotel from "../../assets/hotels/hotel-1.jpeg";
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Card = ({card}) => {
  console.log("get list2.imgSrc")
  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{card.title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{card.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
      </p>
    </div>
  );
};

export default Card;

// const Card = () => {
//   return (
//     <div className='card-box'>
//         <img src={hotel} className= 'card-img'/>
//         <div className='card-info-flex'>
//             <h3 className='card-title'>Place</h3>
//             <div className='card-rating'>
//                 <StarRateRoundedIcon />
//                 <p>4.88</p>
//             </div>
//         </div>
//         <p style={{ margin:0, color:"var(--font-grey)"}}>Beach and sea views</p>
//         <p style={{ margin:0, color:"var(--font-grey)"}}>19-25 May</p>
//         <p style={{ margin:"0.2rem", fontSize:"1rem", color:"var(--black)"}}><span style={{fontWeight: "600"}}>₹2000</span> night</p>
//     </div>
//   )
// }

// export default Card
