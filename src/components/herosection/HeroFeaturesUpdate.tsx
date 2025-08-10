import HeroBanner from "../../assets/images/herobanner.svg";
import BreakingNewsImage from "../../assets/images/breakingnews.svg";
import { useNavigate } from "react-router-dom";

export default function FeaturedNews() {
    const navigate = useNavigate();
    const featured = {
        tag: "Top News",
        title:
            "Breaking: Major Economic Policy Changes Announced by Government",
        description:
            "Government officials revealed comprehensive economic reforms aimed at boosting growth and addressing inflation concerns in a landmark press conference today.",
        time: "45 minutes ago",
        image: HeroBanner,
    };

    const sideNews = [
        {
            tag: "Technology",
            title: "Technology Giants Announce Collaboration on AI Development",
            time: "1 hour ago",
            image: BreakingNewsImage,
        },
        {
            tag: "Environment",
            title: "International Summit Addresses Climate Change Solutions",
            time: "2 hours ago",
            image: BreakingNewsImage,
        },
        {
            tag: "Sports",
            title: "Sports Championship Finals Set New Attendance Records",
            time: "3 hours ago",
            image: BreakingNewsImage,
        },
    ];    

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 px-5 md:px-10 lg:px-16 xl:px-20 py-4">
            {/* Featured Left */}
            <div
                className="relative rounded-lg overflow-hidden md:col-span-2 h-64 md:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${featured.image})` }}
            >
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {featured.tag}
                </span>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                {/* Text Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-xl font-bold mb-2">{featured.title}</h2>
                    <p className="text-sm mb-2">{featured.description}</p>
                    <p className="text-xs">{featured.time}</p>
                </div>
            </div>

            {/* Right column stacked news */}
            <div className="flex flex-col gap-4">
                {sideNews.map((news, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 pb-3 border border-gray-200 rounded-lg shadow-sm bg-white"
                        onClick={() =>
                            navigate("/", {
                              state: { details: true }
                            })
                          }
                    >
                        {/* Image with tag on right */}
                        <div className="relative flex-shrink-0 w-26 h-26">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col justify-between h-full">
                            <div className="pt-2">
                                <h1 className="text-xs font-bold border border-gray-200 px-2 py-1 rounded-full inline-block">{news.tag}</h1>
                                <h3 className="text-sm font-semibold py-1">{news.title}</h3>
                            </div>
                            <p className="text-xs text-gray-400 py-1">{news.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
