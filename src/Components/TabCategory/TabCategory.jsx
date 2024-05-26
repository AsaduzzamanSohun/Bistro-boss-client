import FoodCard from "../FoodCard/FoodCard";
import PropTypes from "prop-types";

const TabCategory = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                items.map(dessert => <FoodCard
                    key={dessert._id}
                    items={dessert}
                >
                </FoodCard>)
            }
        </div>
    );
};

export default TabCategory;

TabCategory.propTypes = {
    items: PropTypes.object
}