import Link from "next/link";
// import cat from "./../../../../../public/category.json"
import categories from "./../../../../../public/business.json"

const AllCategory = () => {

    // console.log(cat);
    console.log(categories);



    return (
        <div>
            <ul className="menu bg-green-300 rounded-box text-green-900">
                <li className="menu-title">All Category</li>


                {
                    categories?.map( (category) => (<li 
                        key={category.id}>
                            <Link 
                            href={`/${category.id}`}>
                                {category.categoryName}
                            </Link></li>))
                }

            </ul>
        </div>
    );
};

export default AllCategory;