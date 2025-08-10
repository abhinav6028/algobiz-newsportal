interface NewsItem {
    id: number;
    type: 'featured' | 'recommended' | 'content';
    image: string;
    mainTitle: string;
    title: string;
    description?: string;
    content?: string;
    timeContent?: string;
    time?: string;
}

interface NewsSectionProps {
    sectionTitle: string;
    newsData: NewsItem[];
    iconImage: string;  // to display the section icon (like EntertainmentImage)
}

const NewsSection: React.FC<NewsSectionProps> = ({ sectionTitle, newsData, iconImage }) => {
    const featuredNews = newsData.find(item => item.type === 'featured');
    const recommendedNews = newsData.filter(item => item.type === 'recommended');
    const contentNews = newsData.filter(item => item.type === 'content');

    return (
        <div className="my-6 px-5 md:px-10 lg:px-16 xl:px-20">
            <section className="border-b-2 border-dashed  border-gray-200 pb-8">
                {/* Heading */}
                <div className="mb-8">
                    <h2 className="font-bold text-[25px] mb-4">{sectionTitle}</h2>
                    <p className="flex items-center gap-2 text-[18px]">
                        <img src={iconImage} alt={sectionTitle} className="w-6 h-6 md:w-7 md:h-7" />
                        {sectionTitle}
                    </p>
                </div>

                {featuredNews && (
                    <div className="grid grid-cols-1 md:grid-cols-[75%_25%] gap-6">
                        {/* Left Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-200 rounded-md p-4">
                            {/* Featured Image */}
                            <div className="col-span-1 h-[180px] sm:h-[228px]">
                                <img
                                    src={featuredNews.image}
                                    alt={featuredNews.title}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            {/* Featured Content */}
                            <div className="col-span-1">
                                <h1 className="text-[15px] font-semibold text-primary mb-2">
                                    {featuredNews.mainTitle}
                                </h1>
                                <h2 className="text-[16px] font-medium mb-3">{featuredNews.title}</h2>
                                <p className="text-[13px] mb-3 text-[#444444]">{featuredNews.content}</p>
                                <div className="flex items-center justify-between text-[13px] text-[#444444]">
                                    <p>{featuredNews.timeContent}</p>
                                    <p>{featuredNews.time}</p>
                                </div>
                            </div>

                            {/* Recommended News (Two small blocks) */}
                            <div className="col-span-1 flex flex-col gap-3">
                                {recommendedNews.slice(1, 3).map(news => (
                                    <div key={news.id} className="flex gap-2">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-[70px] h-[70px] sm:w-[83px] sm:h-[83px] object-cover rounded-md"
                                        />
                                        <div>
                                            <h1 className="text-[15px] font-semibold text-primary mb-2">{news.mainTitle}</h1>
                                            <p className="text-[13px] text-[#000]">{news.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Content News Large Blocks */}
                            {contentNews.slice(0, 2).map(news => (
                                <div key={news.id} className="col-span-1 border-t pt-4 border-gray-200">
                                    <div className="mb-2">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-[150px] sm:h-[190px] object-cover rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-[15px] font-semibold text-primary mb-2">{news.mainTitle}</h1>
                                        <p className="text-[13px] text-[#000]">{news.title}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Recommended News (two small blocks repeated again) */}
                            <div className="col-span-1 flex flex-col gap-3 border-t pt-4 border-gray-200">
                                {recommendedNews.slice(1, 3).map(news => (
                                    <div key={`repeat-${news.id}`} className="flex gap-2">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-[70px] h-[70px] sm:w-[83px] sm:h-[83px] object-cover rounded-md"
                                        />
                                        <div>
                                            <h1 className="text-[15px] font-semibold text-primary mb-2">{news.mainTitle}</h1>
                                            <p className="text-[13px] text-[#000]">{news.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Section - Advertisment and Recommended */}
                        <div className="flex flex-col items-center justify-start gap-6">
                            <div className="bg-[var(--color-advertisment)] w-full h-[200px] sm:h-[300px] flex items-center justify-center text-third rounded-md">
                                Advertisment
                            </div>
                            <p className="text-[15px] text-third font-semibold">YOUR AD HERE</p>

                            <div className="bg-lightred w-full p-4 rounded-md">
                                <p className="flex items-center gap-2 text-[18px] font-semibold mb-4">
                                    <img src={iconImage} alt={sectionTitle} className="w-5 h-5 sm:w-6 sm:h-6" />
                                    RECOMMENDED
                                </p>
                                {recommendedNews.slice(0, 1).map(news => (
                                    <div key={news.id} className="flex gap-2 flex-wrap">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-[80px] h-[65px] sm:w-[100px] sm:h-[80px] object-cover rounded-md"
                                        />
                                        <p className="text-[15px]">{news.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default NewsSection;