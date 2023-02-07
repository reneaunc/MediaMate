import MediaList from "../MediaList/MediaList";


const media = {
    imageSrc: "https://csciprojects.us/pizza.jpg",
    name: "Mario Movie",
    summary: "Mario Goes on an epic adventure. To save Princess Peach and the Mushroom Kingdom.",
    category: "Action - Adventure",
    rating: 4.5,
    reviewCount: 90,
}

const mediasToConsume = [media, media, media];
const mediasConsumed = [media, media, media];

const ViewYourLibary = () => {
    return (
        <>
        <MediaList medias={mediasToConsume} listName="Want to Consume:" />
        <MediaList medias={mediasConsumed} listName="Have Consumed:" />
        </>
    );
};

export default ViewYourLibary;