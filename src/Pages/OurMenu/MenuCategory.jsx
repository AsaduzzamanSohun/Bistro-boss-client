import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items, title }) => {

    return (
        <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                {
                    items.map(popularMenu => <MenuItem
                        key={popularMenu._id}
                        popularMenu={popularMenu}>
                    </MenuItem>)
                }
            </div>
            <div className="mb-12 text-center">
                <Link to={`/shop/${title}`}>
                    <button className="btn btn-outline border-0 border-b-2">Order Your Favorite Food</button>
                </Link>
            </div>
        </div>

    );
};

export default MenuCategory;

MenuCategory.propTypes = {
    items: PropTypes.object,
    title: PropTypes.object
}