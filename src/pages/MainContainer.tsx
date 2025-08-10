import FeaturedNews from "../components/herosection/HeroFeaturesUpdate"
import Article from "../components/article/Article";
import { useLocation } from "react-router-dom";
import BusinessDetails from "../components/details/BusinessDetails";

const MainContainer = () => {

    const location = useLocation();

    if (location?.state?.details) {
        return (
            <div className="w-full">
                <BusinessDetails />
            </div>
        )
    }
    return (
        <div className="w-full">
            <FeaturedNews />
            <Article />
        </div>
    )
}

export default MainContainer
