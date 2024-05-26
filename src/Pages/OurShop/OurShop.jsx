import { useState } from "react";
import Cover from "../../Shared/Cover";
import pic from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import TabCategory from "../../Components/TabCategory/TabCategory";
import { useParams } from "react-router-dom";

const OurShop = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)

    const [index, setIndex] = useState(initialIndex);

    const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>

            <Cover
                featuredImg={pic}
                title={"Our Shop"}
                subTitle={"Would you like to try a dish?"}
            ></Cover>

            <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <TabCategory
                    items={desserts}></TabCategory>
                </TabPanel>
                <TabPanel>
                    <TabCategory
                    items={pizza}></TabCategory>
                </TabPanel>
                <TabPanel>
                    <TabCategory
                    items={salad}></TabCategory>
                </TabPanel>
                <TabPanel>
                    <TabCategory
                    items={soup}></TabCategory>
                </TabPanel>
                <TabPanel>
                    <TabCategory
                    items={drinks}>

                    </TabCategory>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default OurShop;