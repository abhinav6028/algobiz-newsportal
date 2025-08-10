import BreakingImage from "../../assets/images/breakingimage.jpg";
import ArticleImage from "../../assets/images/articlebannerimage.jpg";
import { useNavigate } from "react-router-dom";

const ArticleUpdatesdata = [
  {
    id: 1,
    tag: "Health",
    title: "Healthcare Innovation Transforms Patient Care Across the Nation",
    description:
      "Revolutionary medical technologies are being implemented in hospitals nationwide, promising better outcomes and reduced costs for patients seeking advanced treatment.",
    time: "2 hours ago",
    image: ArticleImage,
  },
  {
    id: 2,
    tag: "Education",
    title: "Educational System Undergoes Major Digital Transformation",
    description:
      "Schools and universities adopt cutting-edge digital learning platforms to enhance student engagement and improve educational outcomes.",
    time: "3 hours ago",
    image: BreakingImage,
  },
];

const ArticleUpdates1 = [
  {
    id: 1,
    tag: "ENVIRONMENT",
    title: "Environmental Protection Measures Show Promising…",
    description:
      "New conservation initiatives demonstrate significant positive impact on wildlife preservation and ecosystem restoration…",
    time: "4 hours ago",
    image: BreakingImage,
  },
  {
    id: 2,
    tag: "INFRASTRUCTURE",
    title: "Transportation Infrastructure Receives Major Investment…",
    description:
      "Government announces multi-billion dollar investment in modernizing public transportation systems and improving…",
    time: "5 hours ago",
    image: BreakingImage,
  },
  {
    id: 3,
    tag: "CULTURE",
    title: "Cultural Heritage Sites Receive UNESCO Recognition",
    description:
      "Several historic landmarks and cultural sites gain international recognition, boosting tourism and preservation efforts.",
    time: "6 hours ago",
    image: BreakingImage,
  },
  {
    id: 4,
    tag: "ENERGY",
    title: "Innovation in Renewable Energy Sector Reaches New Heights",
    description:
      "Breakthrough developments in solar and wind technology promise more efficient and cost-effective renewable energy solutions.",
    time: "7 hours ago",
    image: BreakingImage,
  },
];

export default function ArticleUpdates() {
    const navigate = useNavigate();
    return (
    <section className="my-6">
      {/* Heading */}
      <div className="flex items-center mb-4">
        <span className="w-1.5 h-4 bg-red-500 rounded mr-2"></span>
        <h2 className="font-bold text-lg">TOP NEWS</h2>
      </div>

      {/* First grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {ArticleUpdatesdata.map((item, index) => (
          <div
            key={item.id}
            className={`border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white ${
              index === 0 ? "md:col-span-2" : ""
            }`}
            onClick={() =>
              navigate("/", {
                state: { details: true }
              })
            }
          >
            {/* Image */}
            <div className="relative w-full aspect-w-16 aspect-h-9 sm:h-[200px] md:h-[150px] lg:h-[250px] lg:aspect-none overflow-hidden">
            <img
                src={item.image}
                alt={item.tag}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>

            {/* Text Content */}
            <div className="p-3">
              <h3 className="font-bold text-sm sm:text-base mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">{item.description}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ArticleUpdates1.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white"
            onClick={() =>
              navigate("/", {
                state: { details: true }
              })
            }
          >
            {/* Image with Tag */}
            <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={item.image}
                alt={item.tag}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="font-bold text-sm sm:text-base mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">{item.description}</p>
              <p className="text-xs text-gray-400 flex items-center justify-between">
                <span>{item.tag}</span>
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
