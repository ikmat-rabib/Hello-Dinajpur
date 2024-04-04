import Link from "next/link";


const PopularCategory = () => {
    return (
        <>
            <div>
                <h3 className="text-2xl text-center font-semibold text-green-50 uppercase bg-green-700 py-4 rounded-lg">popular category</h3>
            </div>
            <div className="flex flex-wrap text-green-50 ">
                <Link href='' className="w-1/4 text-center border bg-green-600 py-6 rounded-lg hover:bg-green-500">
                    <div ><p>Pharmacy</p></div>
                </Link>
                <Link href='' className="w-1/4 text-center border bg-green-600 py-6 rounded-lg hover:bg-green-500">
                    <div ><p>Car Rental</p></div>
                </Link>
                <Link href='' className="w-1/4 text-center border bg-green-600 py-6 rounded-lg hover:bg-green-500">
                    <div ><p>Ambulance</p></div>
                </Link>
                <Link href='' className="w-1/4 text-center border bg-green-600 py-6 rounded-lg hover:bg-green-500">
                    <div ><p>Hotel</p></div>
                </Link>
                <Link href='' className="w-1/4 text-center border bg-green-600 py-6 rounded-lg hover:bg-green-500">
                    <div ><p>Library</p></div>
                </Link>
                <Link href='' className="w-1/4 text-center border bg-green-600 py-6 rounded-lg hover:bg-green-500">
                    <div ><p>Lawyer</p></div>
                </Link>
                <Link href='' className="w-1/4 text-center border bg-green-600 py-6 rounded-lg hover:bg-green-500">
                    <div ><p>Clinic</p></div>
                </Link>
                <Link href='' className="w-1/4 text-center border bg-green-600 py-6 rounded-lg hover:bg-green-500">
                    <div ><p>Bricks</p></div>
                </Link>
            </div>
        </>
    );
};

export default PopularCategory;