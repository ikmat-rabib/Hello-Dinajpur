

const Banner = () => {
    return (
        <div className="hero min-h-[90vh]" style={{ backgroundImage: 'url(https://i.ibb.co/8r7v0R3/k2-from-bangladesh.webp)' }}>
            {/* <div className="hero-overlay bg-opacity-10"></div> */}
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">

                    <div className="join">
                        <input className="input input-bordered join-item text-green-950" placeholder="....." />
                        <button className="btn join-item rounded-r-full bg-green-600 hover:bg-green-900 text-white">Search Here</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;