const Books = {

    
    options: {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '685fc92d36msh188e71557e1e178p145adcjsn7dc25ebf4e1b',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    },
        
    

    getBook(title){
        return fetch(`https://book-finder1.p.rapidapi.com/api/search?title=${title}&results_per_page=25&page=1`, this.options)
            .then(response => response.json())
            .then(data => {
                if(Array.isArray(data.results)){
                    const shortened =  data.results.map(curData =>{
                        return {
                            id: curData.work_id,
                            author: `${curData.author_first_names[0]} ${curData.author_last_names[0]}`,
                            title: curData.title,
                            series: curData.series_name,
                            summary: curData.summary
                        }
                    })
                    //console.log(shortened)
                    return shortened;
                }
            })
            .catch(err => console.error(err));
    }

}

export default Books;