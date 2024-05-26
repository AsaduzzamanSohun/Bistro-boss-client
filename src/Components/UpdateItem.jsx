import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();

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

            const menuRus = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRus.data);
            if (menuRus.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        console.log(res.data);

    }




    return (
        <div>
            <SectionTitle heading={"Update an Items"}
                subHeading={"Refresh Item"}>
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
                            defaultValue={name}
                            {...register('name', { required: true })}
                            className="input input-bordered w-full" />

                    </label>

                    <div className="flex gap-6">

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Select your category*</span>
                            </div>
                            <select defaultValue={category} {...register('category', { required: true })}
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
                                defaultValue={price}
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
                            defaultValue={recipe}
                            placeholder="Recipe Details"></textarea>

                    </label>

                    <div className="form-control w-full mb-6">
                        <input
                            {...register('image', { required: true })}
                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Update Menu Item
                        <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;