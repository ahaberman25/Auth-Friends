import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';

function Friends(props) {
    console.log('friends props: ', props)
    const [friends, setFriends] = useState([]);
    
    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {setFriends(res.data)})
    }, []);

    return (
        <div>
            {friends.map((friend) => (
                <div key={friend.id}>
                    <p>Name: {friend.name}<br />
                    Age: {friend.age}<br />
                    Email: {friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Friends;