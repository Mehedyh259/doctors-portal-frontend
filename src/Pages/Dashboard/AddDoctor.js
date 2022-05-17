import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Services from '../Home/Services';
import Loading from '../Shared/Loading';

const AddDoctor = () => {

    const { data: services, isLoading } = useQuery('serviceName', () => fetch('http://localhost:5000/serviceName').then(res => res.json()))

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = "080450f006025bcb0df7f94055e668b6";





    const onSubmit = async (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        const config = {
            method: 'POST',
            body: formData
        }

        const response = await fetch(url, config);
        const result = await response.json();
        console.log(result);
        if (result.success) {
            const img = result.data.url;
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                image: img
            }
            const res = await fetch('http://localhost:5000/doctor', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            });

            const inserted = await res.json();
            if (inserted.insertedId) {
                toast.success('Doctor added successfully !!');
                reset();
            } else {
                toast.error('Failed to add doctor')
            }
        }

    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-3xl">Add a Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* name input */}
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },

                        }
                        )}
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full "
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                {/* email input */}
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Email</span>
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
                        className="input input-bordered w-full"
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                {/* specialization input */}
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Specialization</span>
                    </label>
                    <select {...register('specialty')} className='select w-full max-w-md input-bordered '>
                        {
                            services.map((service) => <option
                                value={service.name}
                                key={service._id}
                            >{service.name}</option>)
                        }

                    </select>
                </div>
                {/* photo input */}
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Upload Image</span>
                    </label>
                    <input
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            },

                        }
                        )}
                        type="file"
                        placeholder="Image"
                        className=" input input-bordered w-full "
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input type="submit" value={'ADD'} className='btn btn-accent text-white w-full max-w-md mt-3' />
            </form>
        </div>
    );
};

export default AddDoctor;