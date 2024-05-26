import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import featuredImg from '../../assets/menu/banner3.jpg';
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import chefService from "../../assets/home/chef-service.jpg";

const Menu = () => {

    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drink = menu.filter(item => item.category === 'drink');
    const offered = menu.filter(item => item.category === 'offered');

    const subTitle = "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>

            <Cover featuredImg={featuredImg}
                title={"Our Menu"}
                subTitle={"Would you like to try a dish"}
            ></Cover>

            <SectionTitle
                subHeading="Don't miss"
                heading="Today's Offer"
            ></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>


            <Cover featuredImg={chefService}
                title={"desserts"}
                subTitle={subTitle}></Cover>
            <MenuCategory items={desserts} title={"dessert"}></MenuCategory>

            <Cover featuredImg={chefService}
                title={"pizza"}
                subTitle={subTitle}></Cover>
            <MenuCategory items={pizza} title={"pizza"}></MenuCategory>

            <Cover featuredImg={chefService}
                title={"salad"}
                subTitle={subTitle}></Cover>
            <MenuCategory items={salad} title={"salad"}></MenuCategory>

            <Cover featuredImg={chefService}
                title={"soup"}
                subTitle={subTitle}></Cover>
            <MenuCategory items={soup} title={"soup"}></MenuCategory>

            <Cover featuredImg={chefService}
                title={"drink"}
                subTitle={subTitle}></Cover>
            <MenuCategory items={drink} title={"drink"}></MenuCategory>

        </div>
    );
};

export default Menu;