const userSearchContainer = document.querySelector(".user-search-container");
const userPhoneNumber = document.querySelector(".phone-number");

// Arrays
const checkout_products = [
    {
        "product_id": 1,
        "product_image": null,
        "product_name": "Rocketfish 4ft HDMI Cable",
        "product_price": 29.99,
        "sku": 6548732,
        "model": "RF-G1169",
        "sale_price": 24.99,
        "member_price": 19.99,
    },
    {
        "product_id": 2,
        "product_image": null,
        "product_name": "Rocketfish 8ft HDMI Cable",
        "product_price": 39.99,
        "sku": 6405508,
        "model": "RF-G1245",
        "sale_price": 34.99,
        "member_price": 29.99,
    },
    {
        "product_id": 3,
        "product_image": null,
        "product_name": "Apple Airpods (Gen 3)",
        "product_price": 149.99,
        "sku": 6405517,
        "model": "RF-G1257",
        "sale_price": null,
        "member_price": 139.99,
    },
]

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
        "phone_number": "0987654321",
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
    }
]

const found_users = [];

// Functions

function getUserByPhoneNumber() {
    const user = users.find(user => user.phone_number === userPhoneNumber.value);// Log the found user
    found_users.push(user);
    console.log(found_users);
    return user;
}

function getUserByEmail(email) {
    return users.find(user => user.user_email === email);
}

function getUserByRewardsId(rewardsId) {
    return users.find(user => user.rewards_id === rewardsId);
}

function displayUserSearch() {
    userSearchContainer.style.display = "flex";

}

function closeUserSearch() {
    userSearchContainer.style.display = "none";
    console.log("User search container hidden");
}