import { Parallax, } from 'react-parallax';
import PropTypes from "prop-types";

const Cover = ({ featuredImg, title, subTitle }) => {
    return (
        <div>

            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={featuredImg}
                bgImageAlt="The Menu"
                strength={-200}
            >

                <div className="hero h-[700px]">
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="px-36 py-20 uppercase bg-black bg-opacity-50">
                            <h1 className="mb-5 text-7xl font-bold">{title}</h1>
                            <p className="mb-5">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </Parallax>


        </div>
    );
};

export default Cover;

Cover.propTypes = {
    featuredImg: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.subTitle
}