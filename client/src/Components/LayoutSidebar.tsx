import Sidebar from "./LandingPage/Sidebar";
import Navbar from "./Navbar";




const LayoutSidebar = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <section className="flex">
                <Sidebar />

                <aside className={`pt-[20px] flex grow px-[20px] max-w-[1100px] mx-auto max-md:px-0`}>
                    {children}
                </aside>
            </section>
        </>
    )
}

export default LayoutSidebar;