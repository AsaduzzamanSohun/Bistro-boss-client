import featuredImg from '../../assets/home/featured.jpg';
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Checkout = () => {
    return (
        <div className='my-28'>
            <div className="bg-[url('https://i.imgur.com/03Yyyd8.jpg')] bg-fixed">
                <div className='bg-black bg-opacity-50 text-white px-32 py-20'>
                    <SectionTitle
                        subHeading={"Check it out"}
                        heading={"From our menu"}>

                    </SectionTitle>

                    <div className="flex items-center bg gap-12 mt-10">
                        <div>
                            <img className="" src={featuredImg} alt="" />
                        </div>
                        <div className='text-white space-y-4'>
                            <h5 className="text-lg ">March 20, 2023</h5>
                            <h5 className="text-lg uppercase">Where Can I get some</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                            </p>
                            <button className="btn btn-outline border-0 text-white border-b-2">Default</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;