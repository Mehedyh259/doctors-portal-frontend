import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = async () => {

        const url = `http://localhost:5000/user/admin/${email}`;

        const config = {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }

        const response = await fetch(url, config);
        // const data = await response.json();
        if (response.status === 200) {
            const data = await response.json();
            if (data.result.modifiedCount > 0) {
                toast.success('Successfully made an admin');
                refetch();
            }
        } else {
            toast.error('Failed to make an admin !!');
        }


        // fetch(`http://localhost:5000/user/admin/${email}`, {
        //     method: 'PUT',
        //     headers: {
        //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //     }
        // })
        //     .then(res => {
        //         if (res.status === 403) {
        //             toast.error('Failed to make an admin !!')
        //         }
        //         return res.json()
        //     })
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             refetch();
        //             toast.success('Successfully made an admin');
        //         }
        //     })

    }
    return (
        <tr>
            <td>1</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs text-white'>Make Admin</button>}</td>
            <td><button className='btn btn-xs text-white'>Remove User</button></td>

        </tr>
    );
};

export default UserRow;