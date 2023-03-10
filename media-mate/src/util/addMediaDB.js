const addMediaDB = {
  
    addMediaCollection(title, releaseYear, rating, description, communityReview, libraryStatus, mediaImagePath) {
      fetch("/api/addmediaitem", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, releaseYear, rating, description, communityReview, libraryStatus, mediaImagePath})
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success') {
            console.log("media added to collection")
          } else {
            console.error(data.message);
          }
        })
        .catch(err => {
          console.error(err);
        });
  
    }
  }
  
  
  export default addMediaDB;