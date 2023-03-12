const oneMedia = {
    getMediaByTitle(title) {
      return fetch(`/api/media/${title}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
            if(data.data.media !== null) {
                const mediaObj = {id: data.data.media._id, title: data.data.media.title, releaseYear:data.data.media.releaseYear, category:data.data.media.category, communityReview:data.data.media.communityReview, description: data.data.media.description, libraryStatus: data.data.media.libraryStatus, mediaImagePath: data.data.media.mediaImagePath}
                return mediaObj
            } else {
                console.log("No data")
                return [];
            }
        } else {
          console.error(data.message);
          //alert(data.message);
        }
      })
      .catch(err => {
        console.error(err);
        //alert(err);
      });
    }
  };
  
  export default oneMedia;
