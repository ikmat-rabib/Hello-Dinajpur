import Link from "next/link";


const AllCategory = () => {
    return (
        <div>
            <ul className="menu bg-green-300 rounded-box text-green-900">
                <li className="menu-title">All Category</li>
                <li><a>Pharmacy</a></li>
                <li><a>Car Rental</a></li>
                <li><a>Bricks</a></li>
                <li><a>Lawyer</a></li>
                <li><a>Ambulance</a></li>
                <li><a>Stationary</a></li>
                <li><a>Library</a></li>
                <li><a>Hotel</a></li>
                <li><a>Clinic</a></li>
                <li><a>Pet Store</a></li>
                <li><a>Gadgets</a></li>
                <li><a>Hardware</a></li>
            </ul>
        </div>
    );
};

export default AllCategory;