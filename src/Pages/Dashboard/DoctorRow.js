import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={doctor.image} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{doctor.name}</td>
            <td>{doctor.specialty}</td>
            <td>

                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-sm modal-button">Delete</label>

            </td>

        </tr>
    );
};

export default DoctorRow;