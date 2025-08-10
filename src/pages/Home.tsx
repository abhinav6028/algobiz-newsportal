import HeaderBar from "../components/header/HeaderBar"
import NavigationBar from "../components/header/NavigationBar"
import TagsInfo from "../components/header/TagsInfo"
import ToolInfoBar from "../components/header/ToolInfoBar"

const Home = () => {
  return (
    <>
      <ToolInfoBar />
      <HeaderBar />
      <NavigationBar />
      <TagsInfo />
    </>
  )
}

export default Home