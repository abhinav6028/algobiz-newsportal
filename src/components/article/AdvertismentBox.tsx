export default function AdvertisementCard() {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 w-full text-center">
        {/* Ad Box */}
        <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center text-gray-500">
          Advertisement
        </div>
  
        {/* Text Below */}
        <p className="mt-2 text-sm text-gray-500">Your Ad Here</p>
      </div>
    );
  }
  