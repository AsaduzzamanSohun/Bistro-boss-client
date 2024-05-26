import PropTypes from 'prop-types';

const MenuItem = ({ popularMenu }) => {

    const { image, name, recipe, price } = popularMenu;

    return (
        <div>
            <div className='flex gap-4'>
                <img className='w-[100px] rounded-b-[200px] rounded-e-[200px]' src={image} alt="" />

                <div>
                    <div className='flex justify-between uppercase space-y-2'>
                        <h4 className='text-xl'>{name}_____________</h4>
                        <p className='text-xl text-yellow-600'>${price}</p>
                    </div>
                    <p>{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

MenuItem.propTypes = {
    popularMenu: PropTypes.object
}