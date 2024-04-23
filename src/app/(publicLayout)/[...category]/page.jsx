import AllCategory from '@/app/components/ui/AllCategory/AllCategory';
import Sidebar from '@/app/components/ui/Sidebar/Sidebar';
import React from 'react';

const categoryPage = ({ params }) => {
    console.log(params);



    return (
        <div>
            
            <div className="md:grid md:grid-cols-6 md:gap-1 ">
                <div className="col-span-1 hidden md:block">
                    <AllCategory></AllCategory>
                </div>
                <div className="col-span-4 ">
                this is category : {params.category}

                </div>
                <div className="col-span-1">
                    <Sidebar></Sidebar>
                </div>
            </div>



        </div>
    );
};

export default categoryPage;