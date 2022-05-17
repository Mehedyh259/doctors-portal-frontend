import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;

    const handleDelete = async () => {
        const url = `http://localhost:5000/doctor/${email}`;
        const config = {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }

        fetch(url, config)
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    toast.success(`doctor: ${name} is deleted.`);
                    refetch();
                    setDeletingDoctor(null)
                }
            })
    }

    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className=" text-lg text-red-600">Are you sure you want to delete <span className='font-bold text-secondary'>{name} ?</span></h3>

                    <div className="modal-action">
                        <button onClick={handleDelete} className='btn btn-error'>delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;