import Logo from "../../assets/images/logo.svg";
import SearchIcon from "../../assets/images/search.svg";

const HeaderBar = () => {
  return (
    <div className="w-full h-full mx-auto flex flex-wrap items-center justify-between  px-5 md:px-10 lg:px-16 xl:px-20 py-4">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-wrap items-center gap-6 pt-4">
        <input type="text" placeholder="Search news..." className="border border-gray-300 rounded-md py-2 px-4 w-[300px]" />
        <img src={SearchIcon} alt="Search" />
        <button className="flex items-center gap-2 bg-primary px-3 p-1 rounded-full text-[12px] text-white font-semibold"><span className="block w-3 h-3 rounded-full bg-red-800"></span>LIVE TV</button>
      </div>
    </div>
  )
}

export default HeaderBar