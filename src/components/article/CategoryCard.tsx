const categories = [
    { name: "Politics", count: 45 },
    { name: "Technology", count: 32 },
    { name: "Sports", count: 28 },
    { name: "Business", count: 24 },
    { name: "Entertainment", count: 19 },
    { name: "Health", count: 15 },
  ];
  
  export default function CategoriesCard() {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 w-full">
        {/* Heading */}
        <h2 className="text-lg font-bold text-red-500 mb-4">CATEGORIES</h2>
  
        {/* List */}
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li key={cat.name} className="flex justify-between items-center">
              <span className="text-gray-900">{cat.name}</span>
              <span className="text-gray-800">
                {cat.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  