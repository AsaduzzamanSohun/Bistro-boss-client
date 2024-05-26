import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import Checkout from "./Checkout";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Checkout></Checkout>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;