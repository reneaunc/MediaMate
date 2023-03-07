const allMedias = {
    getAllMedias() {
        return fetch('/api/allmedia', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    if(Array.isArray(data.data.medias)) {
                        //console.log("getting array and data success")
                        return data.data.medias.map((media) => ({
                            id: media._id,
                            title: media.title,
                            releaseYear: media.releaseYear,
                            category: media.category,
                            communityReview: media.communityReview,
                            description: media.description,
                            libraryStatus: media.libraryStatus,
                            mediaImagePath: media.mediaImagePath
                        }))
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

export default allMedias;