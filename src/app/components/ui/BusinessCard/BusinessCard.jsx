

const BusinessCard = ({displayBusinesses}) => {

    const {businessName, businessOwner, contact, location, businessTime} = displayBusinesses

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{businessName}</h2>
                <p>{businessOwner}</p>
                <p>{contact}</p>
                <p>{location}</p>
                <p>{businessTime}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div> */}
            </div>
        </div>
    );
};

export default BusinessCard;