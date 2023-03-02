


const Games = {
    
    accessToken : "c0ff5c08e8c4405d9cf4de2390689ad8",
        
    

    getGame(title){
        fetch(`https://rawg.io/api/games?token&key=${this.accessToken}&search=${title}`)
        .then(res => res.json())
        .then(data => {
            const datas = data.results.map(curData =>{
                return {
                    img: curData.background_image,
                    id: curData.id,
                    name: curData.name,

                }
            })
            return datas;
        })
        .catch(error => console.error('Error:', error));
    }
}

export default Games;