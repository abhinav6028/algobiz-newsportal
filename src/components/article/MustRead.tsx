import { useNavigate } from "react-router-dom";
import BreakingNewsImage from "../../assets/images/breakingimage.jpg"

const mustReadData = [
  {
    id: 1,
    title: "Technology Revolution Changing Healthcare Industry",
    category: "Tech",
    time: "2 hours ago",
    image: BreakingNewsImage,
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    category: "Environment",
    time: "4 hours ago",
    image: BreakingNewsImage,
  },
  {
    id: 3,
    title: "Economic Markets Show Positive Growth Trends",
    category: "Business",
    time: "6 hours ago",
    image: BreakingNewsImage,
  },
  {
    id: 4,
    title: "Sports Championship Finals Draw Record Viewership",
    category: "Sports",
    time: "8 hours ago",
    image: BreakingNewsImage,
  },
];

export default function MustRead() {
    const navigate = useNavigate();
    return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      {/* Heading */}
      <h2 className="text-lg font-bold text-primary mb-4 flex items-center">
        <span className="text-primary block w-2 h-2 bg-primary rounded-full mr-2"></span>
        MUST READ
      </h2>

      {/* Items */}
      <div className="space-y-4">
        {mustReadData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row gap-3 pb-4 ${index !== mustReadData.length - 1 ? "border-b border-gray-200" : ""
              }`}
              onClick={() =>
                navigate("/", {
                  state: { details: true }
                })
              }
          >
            {/* Image container with fixed aspect ratio */}
            <div className="w-full sm:w-[60px] md:w-[80px] aspect-square rounded overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                {item.title}
              </p>

              {/* Category & Time */}
              <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
                <span className="border border-gray-200 text-xs font-medium px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
