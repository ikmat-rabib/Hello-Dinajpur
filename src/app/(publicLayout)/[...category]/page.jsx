import AllCategory from '@/app/components/ui/AllCategory/AllCategory';
import Sidebar from '@/app/components/ui/Sidebar/Sidebar';
import categories from './../../../../public/business.json'
import BusinessCard from '@/app/components/ui/BusinessCard/BusinessCard';

const categoryPage = ({ params }) => {

    const catName = decodeURIComponent(params.category);
    console.log(catName);

    const allBusinesses = categories.filter(allCategory => allCategory.categoryName == catName)

    console.log(allBusinesses);

    return (
        <div>

            <div className="md:grid md:grid-cols-6 md:gap-1 ">
                <div className="col-span-1 hidden md:block ">
                    <AllCategory></AllCategory>
                </div>
                <div className="col-span-4 ">
                    <h2 className='text-center text-4xl text-green-900 font-bold uppercase my-4'>{catName}</h2>

                    <div className='grid grid-cols-2 gap-5'>
                        {
                            allBusinesses.length ? 
                            allBusinesses.map(category => (
                                category.businesses.map(displayBusinesses => (
                                    <BusinessCard 
                                        key={displayBusinesses.businessName} 
                                        displayBusinesses={displayBusinesses} 
                                    />
                                ))
                            )) : 
                                <h2 className="text-4xl font-medium text-center my-10">Sorry! No Business in This Category.</h2>
                        }
                    </div>

                </div>
                <div className="col-span-1">
                    <Sidebar></Sidebar>
                </div>
            </div>



        </div>
    );
};

export default categoryPage;