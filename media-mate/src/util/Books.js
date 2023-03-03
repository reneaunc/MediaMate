class Books {
    constructor(){
        this.options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '685fc92d36msh188e71557e1e178p145adcjsn7dc25ebf4e1b',
                'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
            }
        };
        
    }

    getBook(title){
        fetch(`https://book-finder1.p.rapidapi.com/api/search?title=${title}&book_type=Fiction&results_per_page=25&page=1`, this.options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
}

export default Books;