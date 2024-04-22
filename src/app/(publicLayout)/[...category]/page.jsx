import React from 'react';

const categoryPage = ({params}) => {
    console.log(params);



    return (
        <div>
            this is category : {params.category}

            

        </div>
    );
};

export default categoryPage;