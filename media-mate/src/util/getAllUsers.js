const allUsers = {
    getAllUsers() {
        return fetch('/api/alluser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    if(Array.isArray(data.data.users)) {
                        //console.log("getting array and data success")
                        return data.data.users.map((user) => ({
                            id: user._id,
                            username: user.username,
                            email: user.email,
                            consume: user.consume,
                            wishlist: user.wishlist
                        }))
                        //return data.data.users
                    } else {
                        console.log("No data")
                        return [];
                    }

                } else {
                    console.error(data.message);
                    alert(data.message);
                }
            })
            .catch(err => { })
    } 
    
}

export default allUsers;