import MustRead from "./MustRead"
import CategoriesCard from "./CategoryCard"
import AdvertismentBox from "./AdvertismentBox"

const RightSideArticle = () => {
  return (
    <div className="w-full flex flex-col gap-6 px-4 sm:px-0">
      <MustRead />
      <CategoriesCard />
      <AdvertismentBox />
    </div>
  )
}

export default RightSideArticle
