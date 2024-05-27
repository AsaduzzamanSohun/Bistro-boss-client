import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRus = await axiosSecure.post('/menu', menuItem);
            console.log(menuRus.data);
            if (menuRus.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        console.log(res.data);

    }

    return (
        <div>
            <SectionTitle
                heading="Add an Item"
                subHeading="What's new">
            </SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            className="input input-bordered w-full" />

                    </label>

                    <div className="flex gap-6">

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Select your category*</span>
                            </div>
                            <select defaultValue={'default'} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value={"default"}>Select a Category</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>

                        </label>

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Recipe Name"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />

                        </label>

                    </div>

                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea
                            {...register('recipe', { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details"></textarea>

                    </label>

                    <div className="form-control w-full mb-6">
                        <input
                            {...register('image', { required: true })}
                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item
                        <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;