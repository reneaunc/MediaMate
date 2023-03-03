
const header = {
    
}

class Games {
    constructor(){
        this.baseURL = "https://api.igdb.com/v4";
        this.accessToken = "8igz414ryb81qt3v9z8zycg4kilewt"
        this.header = {
            method: "POST",
            headers: {
                'Client-Id': '2jhnd0mmsifjxf19c6o8q1ocr2stml',
                Authorization: `Bearer ${this.accessToken}`,
            },
            POST: "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games",
            Body: "fields *;",
            
            
        }
    }

    getGame(){
        fetch("https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games", this.header)
        .then(res => {
            console.log(res.data);
            return res.json();
        })
        .then(re => {
            console.log(re)
            return re
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default Games;