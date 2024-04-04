
const TopBusiness = () => {
    return (
        <div className="py-16">
            <div>
                <h3 className="text-2xl text-center font-semibold text-green-50 uppercase bg-green-700 py-4 rounded-lg">Top Business</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="table text-green-800">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Contact</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>Pharmacy</td>
                            <td>00000000000</td>
                            <td>dhaka</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>Hart Hagerty</td>
                            <td>Hotel</td>
                            <td>00000000000</td>
                            <td>sylhet</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Brice Swyre</td>
                            <td>Clinic</td>
                            <td>00000000000</td>
                            <td>rangpur</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>Burger king
                                <div className="badge badge-info gap-2">
                                Offer
                            </div>
                            </td>
                            <td>Restaurant</td>
                            <td>00000000000</td>
                            <td>rangpur</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <td>Brice Swyre</td>
                            <td>Clinic</td>
                            <td>00000000000</td>
                            <td>rangpur</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopBusiness;