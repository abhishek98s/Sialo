import Sidebar from "./LandingPage/Sidebar";
import Navbar from "./Navbar";




const LayoutSidebar = ({ children }: any) => {
    return (
        <>
            <section className="flex">
                <Sidebar />
                
                <aside className={`pt-[20px] grow px-[20px] max-w-[1100px] mx-auto`}>
                    {children}
                </aside>
            </section>
        </>
    )
}

export default LayoutSidebar;