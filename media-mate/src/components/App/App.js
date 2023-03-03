import React, {useEffect} from 'react';
import { login } from "../../store/slices/authSlice";
import {useDispatch, useSelector} from 'react-redux'
import Protected from '../Protected/Protected';
import './App.css';
import Landing from '../Landing/Landing';
import LandingNavBar from '../LandingNavBar/LandingNavBar';
import LandingFooter from '../LandingFooter/LandingFooter';
import Login from '../Login/login.js';
import MediaInfo from "../Pages/MediaInfo/MediaInfo";
import Registration from '../Registration/Registration';
import Library from '../Pages/Library/Library';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Feed from '../Pages/Feed/Feed';
import Profile from '../Pages/Profile/Profile';
import Browse from '../Pages/Browse/Browse';
import WantMedia from '../Pages/Screens/WantMedia';
import ConsumedMedia from '../Pages/Screens/ConsumedMedia';

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

const media = [
  {
    title: 'Shrek',
    releaseYear: 2001,
    rating: 'PG',
    category: ['Animation', 'Adventure', 'Comedy'],
    description: 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.',
    communityReview: 7.9,
    libraryStatus: 'None', //Should be either consumed, wishlist, or None
    mediaImagePath: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
  },
  {
    title: 'Everything Everywhere All at Once',
    releaseYear: 2022,
    rating: 'R',
    category: ['Action', 'Adventure', 'Comedy'],
    description: 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led',
    communityReview: 8.0,
    libraryStatus: 'None', //Should be either consumed, wishlist, or None
    mediaImagePath: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Goat Simulator",
    releaseYear: 2015,
    rating: 'T',
    category: ['Action', 'Adventure', 'Simulation'],
    description: 'Goat Simulator is the latest in goat simulation technology, bringing next-gen goat simulation to YOU. You no longer have to fantasize about being a goat your dreams have finally come true!',
    communityReview: 4.0,
    libraryStatus: 'None', //Should be either consumed, wishlist, or None
    mediaImagePath: "https://image.api.playstation.com/cdn/UP4415/CUSA02768_00/4E2BQXbe6ArXunsKvcyziEaT0pOryWIb.png"
  },
  {
    title: 'The Catcher in the Rye',
    releaseYear: 1951,
    rating: 'N/A',
    category: ['Fiction'],
    description: 'Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters—shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning.',
    communityReview: 7.8,
    libraryStatus: 'None', //Should be either consumed, wishlist, or None
    mediaImagePath: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg"
  }
]

const App = () => {
  const { loaded } = useSelector(state => state.auth)
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loaded) {
      //const user = JSON.parse(localStorage.getItem('user'));
      setTimeout(() => {
        dispatch(login({
          username: user?.username || '',
          email: user?.email || '',
          password: user?.email || ''
        }))
        if (user?.username) {
          navigate("/profile", { replace: true });
        }
      }, 1000)
    }
  })

  /*
  const user = {
    username: "ReneauNC",
    dateOfBirth: "June 20, 2001",
    password: "password",
    avatar: "/public/madmax.png"
  }*/

  return (
    <div className="App">
      <LandingNavBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/profile" element={
          <Protected>
            <Profile />
          </Protected>
        } />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Registration />}></Route>
        <Route path='/library' element={<Library />}></Route>
        <Route path='/feed' element={<Feed posts={feedPosts} />}></Route>
        <Route path='/browse' element={<Browse cards={media}/>}></Route>
        <Route path='/media-info' element={<MediaInfo />}></Route>
        <Route path='/addmedia' element={<ConsumedMedia />}></Route>
        <Route path='/addwantlist' element={<WantMedia />}></Route>
      </Routes>
      <LandingFooter />
    </div>
  );

}

export default App;
