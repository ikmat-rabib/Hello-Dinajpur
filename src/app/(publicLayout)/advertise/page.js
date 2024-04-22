

const AdvertisePage = () => {
    return (
        <div className="py-10">
            <div className="max-w-screen-lg mx-auto glass rounded-xl drop-shadow-2xl">
                <form  className="card-body">
                    <h2 className="text-3xl font-bold text-center ">Create Your Add Here</h2>

                    {/* title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Business Name</span>
                        </label>
                        <input type="text" name="businessName" placeholder="" className="input input-bordered" required />
                    </div>

                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Business Email</span>
                        </label>
                        <input type="email" name="businessEmail" readOnly className="input input-bordered" required />
                    </div>

                    <div className="flex md:gap-3">

                        {/* category */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Pick a Category</span>
                            </label>
                            <select className="select select-bordered" name="category" required>
                                <option disabled selected>Category</option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>
                            </select>
                        </div>

                        {/* Deadline */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Advertisement Deadline</span>
                            </label>
                            <input type="date" className="input input-bordered" name="deadline" placeholder="" id="" required />
                        </div>
                    </div>


                   

                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Job Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="description" id="" cols="30" rows="5" required></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn bg-[#5bbb7b] hover:bg-[#43a062] hover:scale-105 text-black" type="submit" value="Add Job" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdvertisePage;