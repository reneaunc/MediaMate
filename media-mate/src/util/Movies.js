
class Movies {
    constructor(){
        this.key =  '76da26dba7783c14fb292c53e3947f3e';
        this.template = `https://api.themoviedb.org/3/movie/550?api_key=76da26dba7783c14fb292c53e3947f3e`;

    }


    searchMovie(name){
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${name}&page=1&include_adult=false`
        fetch(url)
       .then((res) => res.json())
   
        .then( (data) => {
            //console.log(data);
            return data;
        })
        .catch((err => {
            console.log(err);
        }))
    }
}
export default Movies;