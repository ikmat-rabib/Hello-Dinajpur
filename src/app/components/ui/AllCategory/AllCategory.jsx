import Link from "next/link";
import cat from "./../../../../../public/category.json"

const AllCategory = () => {

    console.log(cat);



    return (
        <div>
            <ul className="menu bg-green-300 rounded-box text-green-900">
                <li className="menu-title">All Category</li>


                {
                    cat?.map( (category, idx) => (<li key={ category.id}><Link href={`/${category.id}`}>{category.name}</Link></li>))
                }

            </ul>
        </div>
    );
};

export default AllCategory;