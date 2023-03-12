const addHistoryDB = {
  
    addHistoryCollection(username, action, title, releaseYear, rating, description, communityReview, libraryStatus, mediaImagePath) {
      fetch("/api/addhistory", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, action, title, releaseYear, rating, description, communityReview, libraryStatus, mediaImagePath})
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success') {
            console.log("history added to collection")
          } else {
            console.error(data.message);
          }
        })
        .catch(err => {
          console.error(err);
        });
  
    }
  }
  
  
  export default addHistoryDB;