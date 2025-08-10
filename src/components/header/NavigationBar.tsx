import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <div className="flex flex-wrap justify-start space-x-8 gap-2 py-4 px-5 md:px-10 lg:px-16 xl:px-20 mx-auto bg-white shadow-sm text-sm font-semibold text-gray-700">
            <span className="cursor-pointer hover:text-red-500"><Link to="/">HOME</Link></span>
            <span className="cursor-pointer hover:text-red-500"><Link to="/topnews">TOP NEWS</Link></span>
            <span className="cursor-pointer hover:text-red-500"><Link to="/depth">IN DEPTH</Link></span>
            <span className="cursor-pointer hover:text-red-500"><Link to="/politics">POLITICS</Link></span>
            <span className="cursor-pointer hover:text-red-500"><Link to="/sports">SPORTS</Link></span>
            <span className="cursor-pointer hover:text-red-500"><Link to="/entertainment">ENTERTAINMENT</Link></span>
            <span className="cursor-pointer hover:text-red-500"><Link to="/technology">TECHNOLOGY</Link></span>
            <span className="cursor-pointer hover:text-red-500"><Link to="/detailpage/10">BUSINESS</Link></span>
        </div>
    )
}

export default NavigationBar
