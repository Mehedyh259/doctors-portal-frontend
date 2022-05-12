import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';



const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInErrorMessage = '';

    if (loading || gLoading) {
        return <Loading />
    }

    if (gError || error) {
        signInErrorMessage = <p className='p-2 text-center rounded-lg text-white bg-red-500'>{gError?.message || error?.message}</p>
    }


    const onSubmit = async (data) => {
        signInErrorMessage = "";
        await signInWithEmailAndPassword(data.email, data.password);
    }




    return (
        <div className='h-[calc(100vh-100px)] flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-accent">Login</h2>
                    {signInErrorMessage}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* email input */}
                        <div class="form-control w-full max-w-md">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                        message: 'Valid Email is needed'
                                    }
                                }
                                )}
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* password input */}
                        <div class="form-control w-full max-w-md">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 characters or longer"
                                    }
                                }
                                )}
                                type="password"
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input type="submit" value={'Login'} className='btn btn-accent text-white w-full max-w-md mt-3' />
                    </form>

                    <p className="text-center my-2">New to doctors portal? <Link to='/signup' className='text-primary'>Create an account</Link> </p>

                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >CONTINUE WITH GOOGLE
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;