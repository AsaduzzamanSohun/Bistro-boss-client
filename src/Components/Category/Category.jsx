import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';



const Category = () => {
    return (
        <div className='my-24'>

            <SectionTitle
            heading={'Order Online'}
            subHeading={'From 11:00am to 10:pm'}>

            </SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-16"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slide1} className='w-full' alt="" />
                        <h3 className='text-4xl uppercase absolute right-1/3 bottom-10 text-white'>Salad</h3>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slide2} className='w-full' alt="" />
                        <h3 className='text-4xl uppercase absolute right-1/3 bottom-10 text-white'>Pizza</h3>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slide3} className='w-full' alt="" />
                        <h3 className='text-4xl uppercase absolute right-1/3 bottom-10 text-white'>Soup</h3>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slide4} className='w-full' alt="" />
                        <h3 className='text-4xl uppercase absolute right-1/3 bottom-10 text-white'>Dessert</h3>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slide5} className='w-full' alt="" />
                        <h3 className='text-4xl uppercase absolute right-1/3 bottom-10 text-white '>Salad</h3>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;