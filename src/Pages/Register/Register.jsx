import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log("logged: ", loggedUser);
                console.log("Name: ", data.name);
                console.log("PhotoURL: ", data.photoURL);
                const name = data.name;
                const photo = data.photoURL

                updateUser(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        setUser({ photoURL: photo, displayName: name });

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("User added to the Server");
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });

                                    navigate('/');
                                }
                            })

                    })




            })

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body py-24">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" name='name' placeholder="name" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input {...register("photoURL", { required: true })} type="url" name='photoURL' placeholder="url" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Photo url is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" name='email' placeholder="email" className="input input-bordered" />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })} type="password" name='password' placeholder="password" className="input input-bordered" />
                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password has must be at least 6 characters</span>}
                    {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must not has more than 20 characters </span>}
                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have at least one uppercase, lowercase, number and special characters</span>}


                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Sign Up" />
                </div>
                <div className='text-center pb-8'>
                    <p>Are you new? Please <Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </form>


        </>
    );
};

export default Register;