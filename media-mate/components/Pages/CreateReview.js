import MediaList from "../MediaList/MediaList";
import MakeReview from "../MakeReview/MakeReview";

const media = {
    imageSrc: "https://csciprojects.us/pizza.jpg",
    name: "Mario Movie",
    summary: "Mario Goes on an epic adventure. To save Princess Peach and the Mushroom Kingdom.",
    category: "Action - Adventure",
    rating: 4.5,
    reviewCount: 90,
}

const medias = [media, media, media];

const CreateReview = () => {
    function searchMedia(term, sortBy) {
        console.log(`Search Yelp with ${term}, ${sortBy}`);
    }

    return (
        <>
            <MediaList medias={medias} listName="Select a Media" />
            <MakeReview />
        </>
    );
};

export default CreateReview;