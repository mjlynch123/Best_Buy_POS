import react, { useState, useEffect } from 'react';
import "../CSS/search-bar.css";

export default function UserLookup() {
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [user, setUsers] = useState({});

    const users = [
        {
            "user_id": 1,
            "user_name": "John Doe",
            "user_email": "johndoe123@gmail.com",
            "phone_number": "1234567890",
            "street": "123 Main St",
            "city": "New York",
            "state": "NY",
            "zip": "10001",
            "member": true,
            "member_id": 123456,
            "member_expiration": "2023-12-31",
            "member_points": 1000,
            "rewards_id": 98326,
        },
        {
            "user_id": 2,
            "user_name": "Jane Smith",
            "user_email": "janesmite12@yahoo.com",
            "phone_number": "1234567890",
            "street": "456 Elm St",
            "city": "Los Angeles",
            "state": "CA",
            "zip": "90001",
            "member": false,
            "member_id": null,
            "member_expiration": null,
            "member_points": 0,
            "rewards_id": 64528,
        },
        {
            "user_id": 3,
            "user_name": "Bob Johnson",
            "user_email": "bobfjohnson@hotmail.com",
            "phone_number": "1231231234",
            "street": "789 Oak St",
            "city": "Chicago",
            "state": "IL",
            "zip": "60007",
            "member": true,
            "member_id": 654321,
            "member_expiration": "2023-12-31",
            "member_points": 500,
            "rewards_id": 24532,
        },
        {
            "user_id": 4,
            "user_name": "Jake Doe",
            "user_email": "jakedoe123@gmail.com",
            "phone_number": "1234567890",
            "street": "123 Main St",
            "city": "New York",
            "state": "NY",
            "zip": "10001",
            "member": true,
            "member_id": 123458,
            "member_expiration": "2023-12-31",
            "member_points": 1020,
            "rewards_id": 98324,
        },
        {
            "user_id": 5,
            "user_name": "James Doe",
            "user_email": "jakedoe123@gmail.com",
            "phone_number": "1234567890",
            "street": "123 Main St",
            "city": "New York",
            "state": "NY",
            "zip": "10001",
            "member": true,
            "member_id": 123451,
            "member_expiration": "2023-12-31",
            "member_points": 1020,
            "rewards_id": 98332,
        },
    ]

    const found_users = [];

    const closeOut = () => {
        document.location.href = "/";
    }

    const getUserByPhoneNumber = (event) => {
        event.preventDefault();
        const matchedUsers = users.filter(user => user.phone_number === userPhoneNumber);
        setUsers(matchedUsers);
        console.log(matchedUsers);
    }

    return (
        <>
            <div className="user-search-container" id="search-page">
                <div className="user-search-bar">
                    <form className='search-form' onSubmit={getUserByPhoneNumber}>
                        <input type="text" placeholder="Search for a user" class="phone-number" onChange={(e) => setUserPhoneNumber(e.target.value)}></input>
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                        <span class="close" onClick={closeOut}>X</span>
                    </form>
                </div>

                <div className="search-result">
                    {user.length > 0 ? (
                        user.map((user, index) => (
                            <div key={index} className="user-info">
                                <div className='name'>
                                    <h1>{user.user_name}</h1>
                                </div>
                                <div className="user-contact">
                                    <p>{user.user_email}</p>
                                    <p>{user.phone_number}</p>
                                    <p>{user.street}</p>
                                    <p>{user.city}, {user.state} {user.zip}</p>
                                </div>
                                <div className="member-info">
                                    <p>{user.member ? "Member" : "Not a member"}</p>
                                    {user.member && (
                                        <>
                                            <p>Member ID: {user.member_id}</p>
                                            <p>Member Expiration: {user.member_expiration}</p>
                                            <p>Member Points: {user.member_points}</p>
                                            <p>Rewards ID: {user.rewards_id}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="user-info">
                            <h1>No user found</h1>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}