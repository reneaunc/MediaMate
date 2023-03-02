
const Movies = {
    
    key :  '76da26dba7783c14fb292c53e3947f3e',
    template : `https://api.themoviedb.org/3/movie/550?api_key=76da26dba7783c14fb292c53e3947f3e`,
    images: `https://image.tmdb.org/t/p/original/`,
    


    searchMovie(name){
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${name}&page=1&include_adult=false`
        return fetch(url)
       .then((res) => res.json())
   
        .then( (data) => {
            //console.log(data);
            const datas = data.results.map(curdata =>{
                return {
                    title: curdata.title,
                    overview: curdata.overview,
                    img: `https://image.tmdb.org/t/p/original/${curdata.poster_path}`,
                    id: curdata.id
                }
            });
            return datas;
        })
        .catch((err => {
            console.log(err);
        }))
    }
}
export default Movies;