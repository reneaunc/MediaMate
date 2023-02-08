import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
    imageSrc: "https://csciprojects.us/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
}

const businesses = [business, business, business, business, business, business];

const HomePage = () => {
    function searchYelp(term, location, sortBy) {
        console.log(`Search Yelp with ${term}, ${location}, ${sortBy}`);
    }

    return (
        <>
          <SearchBar searchYelp={searchYelp} />
          <BusinessList businesses={businesses} />
        </>
    );
};

export default HomePage;