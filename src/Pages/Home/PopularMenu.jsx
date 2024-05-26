import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();

    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div>

            <SectionTitle
                subHeading={"Popular Menu"}
                heading={"From Our Menu"}>
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">

                {
                    popular.map(popularMenu => <MenuItem
                        key={popularMenu._id}
                        popularMenu={popularMenu}>
                    </MenuItem>)
                }

            </div>

        </div>
    );
};

export default PopularMenu;