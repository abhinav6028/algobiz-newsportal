import ArticleUpdates from "./ArticleUpdates"
import LatestUpdates from "./LatestUpdates"
import RightSideArticle from "./RightSideArticle"

const Article = () => {
  return (
    <div className="w-full px-5 md:px-10 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-5 mb-4">
      <div>
        <ArticleUpdates />
        <LatestUpdates />
      </div>
      <div>
        <RightSideArticle />
      </div>
    </div>
  )
}

export default Article
