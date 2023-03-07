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
          const mediaData = data.data.media;
          return {
            id: mediaData.id,
            title: mediaData.title,
            releaseYear: mediaData.releaseYear,
            category: mediaData.category,
            communityReview: mediaData.communityReview,
            description: mediaData.description,
            libraryStatus: mediaData.libraryStatus,
            mediaImagePath: mediaData.mediaImagePath
          };
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
  };
  
  export default oneMedia;
