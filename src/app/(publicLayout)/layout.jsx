import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";


const publicLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default publicLayout;