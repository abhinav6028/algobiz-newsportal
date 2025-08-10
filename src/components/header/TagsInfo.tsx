const TagsInfo = () => {
    return (
        <div className="bg-gray py-2 rounded">
      <div className="px-5 md:px-10 lg:px-16 xl:px-20 w-full max-w-full">
        <div className="flex items-start gap-2 w-full">
          {/* label - keep it from shrinking */}
          <span className="text-red-600 font-bold flex items-center gap-1 flex-shrink-0">
            <span className="w-2 h-2 bg-red-600 rounded-full inline-block" />
            TRENDING
          </span>

          {/* container that can shrink and holds the scrollable row */}
          <div className="flex-1 min-w-0">
            {/* scrollable row: overflow-x-auto + whitespace-nowrap + min-w-0 on parent */}
            <div className="flex gap-2 text-sm text-gray-700 overflow-x-auto whitespace-nowrap hide-scrollbar touch-scroll px-1">
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full flex-shrink-0">Breaking News</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full flex-shrink-0">Election Updates</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full flex-shrink-0">Weather Alert</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full flex-shrink-0">Sports Headlines</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full flex-shrink-0">Tech News</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full flex-shrink-0">Market Updates</span>
              {/* add more tags to test */}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default TagsInfo