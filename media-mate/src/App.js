import './App.css';
import Feed from './Components/Feed/Feed';

const feedPosts = [
  {
    username: "joy",
    mediaType: "movie",
    date: "12/10/22",
    rating: 5,
    review: "Wow Shrek really rocked my pants off. This movie really changed what it means to be green.",
    media: {
      title: "Shrek",
      img: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    }

  },
  {
    
    username: "ryan",
    mediaType: "movie",
    date: "12/20/22",
    rating: 5,
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu",
    media: {
      title: "Everything Everywhere All At Once",
      img: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg",
    }

  },
  {
    username: "andrew",
    mediaType: "game",
    date: "12/10/22",
    rating: 2,
    review: "Wow. Felt like a real goat and I didnt love it!",
    media: {
      title: "Goat Simulator",
      img: "https://image.api.playstation.com/cdn/UP4415/CUSA02768_00/4E2BQXbe6ArXunsKvcyziEaT0pOryWIb.png",
    }

  },
  {
    username: "Sharon",
    mediaType: "book",
    date: "2/03/22",
    rating: 5.5,
    review: "I'm like him frfr",
    media: {
      title: "The Catcher in the Rye",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
    }

  }
]

function App() {
  return (
    <div className="App">
      <Feed posts={feedPosts} />
    </div>
  );
}

export default App;
