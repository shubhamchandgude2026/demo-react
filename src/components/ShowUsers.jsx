import React from 'react';
import useFetchUsers from '../hooks/useFetchUsers';
import UserCard from './utils/UserCard';

const ShowUsers = () => {
    const [data, loading, error] = useFetchUsers('https://dummyuser.vercel.app/users');

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>Error: {error}</h2>;

    return (
        <div>
            {data && data.length > 0 ? (
                data.map(user => (
                    <UserCard key={user.userid || user.id} user={user} />
                ))
            ) : (
                <h2>No users found</h2>
            )}
        </div>
    );
};

export default ShowUsers;