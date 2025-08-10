import { Link } from "react-router-dom"


const NavigationBar = () => {
    return (
        <div className="overflow-x-auto hide-scrollbar whitespace-nowrap bg-white shadow-sm">
            <div className="flex flex-nowrap gap-6 py-4 px-5 md:px-10 lg:px-16 xl:px-20 mx-auto text-sm font-semibold text-gray-700">
                <span className="cursor-pointer hover:text-red-500"><Link to="/">HOME</Link></span>
                <span className="cursor-pointer hover:text-red-500"><Link to="/topnews">TOP NEWS</Link></span>
                <span className="cursor-pointer hover:text-red-500"><Link to="/depth">IN DEPTH</Link></span>
                <span className="cursor-pointer hover:text-red-500"><Link to="/politics">POLITICS</Link></span>
                <span className="cursor-pointer hover:text-red-500"><Link to="/sports">SPORTS</Link></span>
                <span className="cursor-pointer hover:text-red-500"><Link to="/entertainment">ENTERTAINMENT</Link></span>
                <span className="cursor-pointer hover:text-red-500"><Link to="/technology">TECHNOLOGY</Link></span>
                <span className="cursor-pointer hover:text-red-500"><Link to="/detailpage/10">BUSINESS</Link></span>
            </div>
        </div>
    );
};

export default NavigationBar;

