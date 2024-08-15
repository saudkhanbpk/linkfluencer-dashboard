import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Content from "./Content"
interface Props {

}
const Layout: React.FC<Props> = () => {
    return <div className="w-full">
        <Navbar />
        <div className="flex w-full">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5">
                <Content />
            </div>
        </div>
    </div>
}

export default Layout