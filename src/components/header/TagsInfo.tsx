const TagsInfo = () => {
    return (
        <div className="flex items-center gap-2 bg-gray py-2 rounded">
            <div className="px-5 md:px-10 lg:px-16 xl:px-20">
                <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-600 rounded-full inline-block"></span>
                    TRENDING
                </span>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Breaking News</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Election Updates</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Weather Alert</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Sports Headlines</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Tech News</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Market Updates</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TagsInfo