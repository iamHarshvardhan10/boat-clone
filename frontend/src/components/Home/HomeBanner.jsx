import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { homeBanners } from "../../utils/constant";

const HomeBanner = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="homeSwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {homeBanners.map((banner) => (
          <SwiperSlide key={banner.id} className="homeBanner_swiperSlide">
            <img src={banner.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeBanner;
