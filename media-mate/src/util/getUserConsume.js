const getUserConsume = {
    getUserConsume(username) {
        return fetch(`/api/grabuser/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data.data.user.username)
            if(data.status === 'success') {
                //console.log(data.data.user.email)
                const mediaList = {list: data.data.user.consume};
                //console.log(mediaList.list);
                return mediaList
            } else {
                console.log(data.message);
                alert(data.message);
            }
        })
        .catch(err => {
            console.error(err);
            alert(err);
        });
    }
};
//data.user.wishlist[0]
export default getUserWishlist