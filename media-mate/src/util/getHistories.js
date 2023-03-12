const allHistories = {
    getAllHistories() {
        return fetch('/api/allhistory', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    if(Array.isArray(data.data.histories)) {
                        //console.log("getting array and data success")
                        return data.data.histories.map((history) => ({
                            username: history.username,
                            action: history.action,
                            title: history.title,
                            releaseYear: history.releaseYear,
                            category: history.category,
                            communityReview: history.communityReview,
                            description: history.description,
                            libraryStatus: history.libraryStatus,
                            mediaImagePath: history.mediaImagePath
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

export default allHistories;