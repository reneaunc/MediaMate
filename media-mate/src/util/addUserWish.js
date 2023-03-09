
const addUserWish = {
    addUserWishlist(title, username) {
      return fetch("/api/adduserconsume", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, username })
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
            console.log(data.data.modifiedCount)
        } else {
          console.error(data.message);
          alert(data.message);
        }
      })
      .catch(err => {
        console.error(err);
        alert(err);
      });
    }
}

  
  export default addUserWish;
