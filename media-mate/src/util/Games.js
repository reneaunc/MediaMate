


const Games = {
    
    accessToken : "c0ff5c08e8c4405d9cf4de2390689ad8",
        
    

    getGame(title){
        return fetch(`https://rawg.io/api/games?token&key=${this.accessToken}&search=${title}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const datas = data.results.map(curData =>{
                return {
                    id: curData.id,
                    title: curData.name,
                    overview: '',
                    img: curData.background_image,
                    release: curData.released,
                    rating: 'E',//curData.esrb_rating.name,
                    reviews: curData.rating

                }
            })
            return datas;
        })
        .catch(error => console.error('Error:', error));
    }
}

export default Games;