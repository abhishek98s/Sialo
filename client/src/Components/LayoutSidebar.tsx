import Sidebar from "./LandingPage/Sidebar";
import Navbar from "./Navbar";




const LayoutSidebar = ({ children }: any) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    )
}

export default LayoutSidebar;