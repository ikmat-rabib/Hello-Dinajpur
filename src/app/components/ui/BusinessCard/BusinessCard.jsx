

const BusinessCard = ({ displayBusinesses }) => {

    const { businessName, businessOwner, contact, location, businessTime } = displayBusinesses

    return (
        <div className="card  glass shadow-xl">
            <figure className="px-10 pt-10">
                <img src="" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-green-950">
                <h2 className="card-title">{businessName}</h2>
                <p>{businessOwner}</p>
                <p>{contact}</p>
                <p>{location}</p>
                <p>{businessTime}</p>
                
            </div>
        </div>
    );
};

export default BusinessCard;