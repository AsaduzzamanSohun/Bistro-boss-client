import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";


const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))

    return (
        <div>
            <SectionTitle
                subHeading={"What Our Clients Bay"}
                heading={"Testimonials"}>

            </SectionTitle>

            <div className="">

                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>
                            <div className="mx-24 my-16 text-center space-y-4">

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    className="mx-auto"
                                />

                                <p>{review.details}</p>
                                <h4 className="text-xl uppercase text-yellow-600">{review.name}</h4>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>

            </div>



        </div>
    );
};

export default Testimonial;