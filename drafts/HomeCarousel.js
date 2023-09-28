import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade]);

function HomeCarousel() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      effect="fade"
      loop
      onSlideChange={(swiper) => console.log(swiper.realIndex)}
      className="home-carousel"
    >
      <SwiperSlide>
        <div className="relative">
          <Image
            src={require("../public/img/online-devices.jpg")}
            alt=""
            placeholder="blur"
          />
          <div className="absolute top-0 left-0 w-8/12 z-10 p-6">
            <h2 className="text-3xl">Power and Intel</h2>
            <p className="text-xl">
              Power to the cloud. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Alias eligendi eum incidunt, laborum modi
              possimus quia quisquam sint sunt tempore. Commodi dolores eaque
              esse fugit impedit laudantium libero optio possimus!
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <Image
            src={require("../public/img/business-people.jpg")}
            alt=""
            placeholder="blur"
          />
          <div className="absolute bottom-2 left-0 w-1/2 z-10 p-6">
            <h2 className="text-3xl">Connected</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              accusamus amet autem consectetur cum debitis et exercitationem
              labore laboriosam, modi non numquam pariatur quaerat quia
              recusandae rem tenetur vel voluptatum!
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <Image
            src={require("../public/img/people-in-cloud.jpg")}
            alt=""
            placeholder="blur"
          />
          <div className="absolute bottom-0 z-10 p-6">
            <h2 className="text-3xl">Available</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque id nesciunt nihil! Architecto culpa eius eveniet
              expedita fuga, illum inventore non odit porro qui quia quibusdam
              rerum sed tempore velit.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeCarousel;
