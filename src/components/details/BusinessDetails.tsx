import banner from "../../assets/images/businessbanner.jpg";
import facebook from "../../assets/socialicons/facebookdark.svg";
import twitter from "../../assets/socialicons/twitter.svg";
import whatsapp from "../../assets/socialicons/whatsapp.svg";
import logo from "../../assets/images/logo.svg";
import EntertainmentImage from '../../assets/images/entertainment.svg';
import mustRead2 from '../../assets/images/entertainmentcontent1.jpg';
import mustRead1 from '../../assets/images/entertainmentcontent_3.jpg';
import mustRead3 from '../../assets/images/entertainmentcontent_4.jpg';
import playbutton from '../../assets/images/playbutton.svg';

const mustRead = [
    {
        category: 'CRICKET',
        title: 'ഓവലില്‍ ഇന്ത്യക്ക് വിജയം; ഇംഗ്ലണ്ടിനെ 6 റണ്‍സിന്‍ തകര്‍ത്തു, പരമ്പര',
        image: mustRead1,
    },
    {
        category: 'ENTERTAINMENT NEWS',
        title: 'പോസ്റ്റര്‍ തന്നെ ഒരു പോസിറ്റീവ് ഹിറ്റ്!, ആകോ മാതത്തില്‍',
        image: mustRead2,
    },
    {
        category: 'CRICKET',
        title: 'ഓവലില്‍ ഇന്ത്യക്ക് വിജയം; ഇംഗ്ലണ്ടിനെ 6 റണ്‍സിന്‍ തകര്‍ത്തു, പരമ്പര',
        image: mustRead3,
    },
];

const tags = [
    'Latest News',
    'BJP',
    'Rajeev',
    'Malayali Nuns Arrest',
];

const BusinessDetails = () => {
    return (
        <div className="px-5 md:px-10 lg:px-16 xl:px-20 py-4">
            {/* Changed width here */}
            <div className="w-full lg:w-[90%]">
                {/* Hero section */}
                <div>
                    <h1 className="text-primary mb-2">BUSINESS</h1>
                    <h1 className="font-bold mb-2 w-[60%]">
                        കന്യാസ്ത്രീകളുടെ അറസ്റ്റ്; രാജീവ് ചന്ദ്രശേഖറിനെതിരെ ബിജെപിയില്‍ പടയൊരുക്കം
                    </h1>
                    <p className="mb-2">
                        ബിജെപിക്കെതിരെ പരോക്ഷ വിമര്‍ശനവുമായി കുളത്തൂര്‍ അദ്വൈതാശ്രമം മഠാധിപതി സ്വാമി ചിദാനന്ദപുരിയും രംഗത്തെത്തിയിരുന്നു.
                    </p>
                    <img
                        src={banner}
                        alt="Business Banner"
                        className="w-full max-h-[600px] object-cover rounded-xl"
                    />

                    {/* Time Zone */}
                    <div className="flex flex-wrap gap-3 justify-between items-center pt-4 pb-8 border-b border-dashed border-gray-300">
                        <div className="flex gap-2 items-center">
                            <img src={logo} alt="Logo" className="w-10 h-10" />
                            <div>
                                <p>ഫസ്റ്റ്എഡിഷൻ നെറ്റ്‌വർക്ക്</p>
                                <p>2 min read | 04 Aug 2025, 03:09 pm</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            {[facebook, twitter, whatsapp].map((icon, idx) => (
                                <span
                                    key={idx}
                                    className="border border-gray-500 rounded-md p-3 flex items-center justify-center"
                                >
                                    <img src={icon} alt="social" className="w-5 h-5" />
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-[75%_25%] gap-2 py-10">
                        <div className="border-r border-gray-300">
                            <div className="pr-3">
                                <div className="flex flex-col text-[18px] gap-20">
                                    <p>
                                        കോഴിക്കോട്: ഛത്തീസ്ഗഢില്‍ മലയാളി കന്യാസ്ത്രീകള്‍ അറസ്റ്റ് ചെയ്യപ്പെട്ടതിലെ ഇടപെടലുമായി ബന്ധപ്പെട്ട് സംസ്ഥാന അദ്ധ്യക്ഷന്‍ രാജീവ് ചന്ദ്രശേഖറിനെതിരെ ബിജെപിയില്‍ പടയൊരുക്കം. എടുത്തുചാടി കന്യാസ്ത്രീകള്‍ക്ക് ക്ലീന്‍ചിറ്റ് നല്‍കിയെന്ന വിമര്‍ശനം രാജീവ് ചന്ദ്രശേഖറിനെതിരെ വലിയ വിഭാഗം നേതാക്കള്‍ ഉയര്‍ത്തുന്നുണ്ട്.
                                    </p>
                                    <p>
                                        വിഷയം ബിജെപി കോര്‍ കമ്മിറ്റിയില്‍ ചര്‍ച്ച ചെയ്തില്ല. ഇത് ദേശീയ നേതൃത്വത്തെ അറിയിക്കാനാണ് നേതാക്കളൊരുങ്ങുന്നത്. വിഷയത്തില്‍ രാജീവ് ചന്ദ്രശേഖറിന്റെ നേതൃത്വത്തില്‍ നടത്തിയ ഇടപെടലില്‍ വി മുരളീധരന്‍, പി കെ കൃഷ്ണദാസ് വിഭാഗങ്ങള്‍ക്ക് എതിര്‍പ്പുണ്ട്. അതേ എതിര്‍പ്പ് ആര്‍എസ്എസിനും പോഷക സംഘടനകള്‍ക്കും ഉണ്ട്. ഇതോടെ പാര്‍ട്ടിയില്‍ ഒറ്റപ്പെട്ട നിലയിലാണ് രാജീവ് ചന്ദ്രശേഖര്‍.
                                    </p>
                                </div>

                                {/* Also read */}
                                <div className="my-10">
                                    <div>
                                        <h3 className="font-semibold mb-3">Also Read:</h3>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <div className="flex flex-col gap-3 mb-4">
                                                <h1 className="text-xs font-semibold text-orange-600 uppercase block mb-1">
                                                    Kerala
                                                </h1>
                                                <div className="flex gap-3">
                                                    <img
                                                        src={mustRead2}
                                                        alt="Kerala News"
                                                        className="w-16 h-16 object-cover rounded-md"
                                                    />
                                                    <div>
                                                        <p className="text-sm">
                                                            'പി എം കെയ്സ്' പ്രതികള്‍ക്ക് ഇനി ഇളവില്ല; എയര്‍പോര്‍ട്ടില്‍ നിന്ന്
                                                            പുറത്താക്കപ്പെടും; വിമാനത്താവളത്തില്‍ വി ഐ പി സീറ്റ്'
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-700 my-10 leading-relaxed text-[18px]">
                                                ബിജെപിക്കെതിരെ പരോക്ഷ വിമര്‍ശനവുമായി കുളത്തൂര്‍ അദ്വൈതാശ്രമം മഠാധിപതി സ്വാമി ചിദാനന്ദപുരിയും രംഗത്തെത്തിയിരുന്നു. നമുക്കിനി പോലീസും കോടതിയും വേണ്ടെന്നും വോട്ട് പ്രതീക്ഷിക്കുന്ന രാഷ്ട്രീയ പാര്‍ട്ടി നേതാക്കന്മാര്‍ ആര് കുറ്റവാളിയാണ്, ആരല്ല എന്ന് തീരുമാനിക്കെന്നും അദ്ദേഹം ഫേസ്ബുക്കില്‍ കുറിച്ചു. കന്യാസ്ത്രീകള്‍ കുറ്റക്കാരല്ലെന്ന ബിജെപി സംസ്ഥാന അധ്യക്ഷന്‍ രാജീവ് ചന്ദ്രശേഖറിന്റെ പ്രതികരണത്തിനെതിരെയാണ് പോസ്റ്റ്.
                                                കഴിഞ്ഞ ദിവസമാണ് കന്യാസ്ത്രീകള്‍ക്ക് ജാമ്യം ലഭിച്ചത്. കര്‍ശന വ്യവസ്ഥകളോടെയാണ് ബിലാസ്പുര്‍ എന്‍ഐഎ കോടതി കന്യാസ്ത്രീകള്‍ക്ക് ജാമ്യം അനുവദിച്ചത്. എന്‍ഐഎ കോടതിയുടെ അനുമതിയില്ലാതെ രാജ്യം വിടരുതെന്നാണ് പ്രധാന വ്യവസ്ഥ. പാസ്പോര്‍ട്ട് എന്‍ഐഎ കോടതിയില്‍ നല്‍കണമെന്നും ജാമ്യകാലയളവിലെ വാസസ്ഥലം എന്‍ഐഎയെ അറിയിക്കണമെന്നും വ്യവസ്ഥയിലുണ്ട്.
                                            </p>
                                            <p className="text-xs text-gray-500 mb-4">
                                                Content Highlights: Opposition in BJP against Rajiv Chandrasekhar
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-[#F6F7F9] text-center text-sm py-4 mt-4">
                                            To advertise here, <span className="font-semibold cursor-pointer">contact us</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Also read 2 */}
                                <div className="mt-10">
                                    <div>
                                        <h3 className="font-semibold mb-3">Also Read:</h3>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <div className="flex flex-col gap-3 mb-4">
                                                <h1 className="text-xs font-semibold text-orange-600 uppercase block mb-1">
                                                    Kerala
                                                </h1>
                                                <div className="flex gap-3">
                                                    <img
                                                        src={mustRead2}
                                                        alt="Kerala News"
                                                        className="w-16 h-16 object-cover rounded-md"
                                                    />
                                                    <div>
                                                        <p className="text-sm">
                                                            'പി എം കെയ്സ്' പ്രതികള്‍ക്ക് ഇനി ഇളവില്ല; എയര്‍പോര്‍ട്ടില്‍ നിന്ന്
                                                            പുറത്താക്കപ്പെടും; വിമാനത്താവളത്തില്‍ വി ഐ പി സീറ്റ്'
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-700 my-10 leading-relaxed text-[18px]">
                                                രണ്ടാഴ്ചയില്‍ ഒരിക്കല്‍ ബന്ധപ്പെട്ട പോലീസ് സ്റ്റേഷനില്‍ ഹാജരാകണം, അന്വേഷണ ഏജന്‍സി ആവശ്യപ്പെടുമ്പോള്‍ ചോദ്യം ചെയ്യാന്‍ ഹാജരാകണം, തെളിവ് നശിപ്പിക്കരുത്, സാക്ഷികളെ സ്വാധീനിക്കരുത്, മാധ്യമങ്ങളോട് സംസാരിക്കരുത്, കേസിനെപ്പറ്റി പൊതുമധ്യത്തില്‍ പ്രതികരിക്കരുത് തുടങ്ങിയ വ്യവസ്ഥകളും എന്‍ഐഎ കോടതി മുന്നോട്ടുവെച്ചു. 50,000 രൂപയുടെ രണ്ട് ആള്‍ ജാമ്യവും കോടതി നിര്‍ദേശിച്ചിരുന്നു. ജാമ്യം ലഭിച്ചതിന് പിന്നാലെ വൈകിട്ടോടെ കന്യാസ്ത്രീകള്‍ പുറത്തിറങ്ങിയിരുന്നു.                                        </p>
                                            <p className="text-xs text-gray-500 mb-4">
                                                Content Highlights: Opposition in BJP against Rajiv Chandrasekhar
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-[#F6F7F9] text-center text-sm py-4 mt-4">
                                            To advertise here, <span className="font-semibold cursor-pointer">contact us</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Advertisement */}
                            <div className="border-b border-gray-300">
                                <div className="w-full min-h-[350px] bg-gray-200 flex items-center justify-center border-20 border-[#F6F7F9]">
                                    <h1 className="text-[18px] text-gray-500">Advertisement</h1>
                                </div>
                                <span className="text-[18px] text-gray-500 w-full bg-[#F6F7F9] block pb-3 text-center">
                                    Your Ad Here
                                </span>
                            </div>

                            <div className="mt-4 border-t border-gray-300 pt-3">
                                <div className="flex items-center gap-2">
                                    <img src={EntertainmentImage} alt="Entertainment" className="w-4 h-4 object-cover rounded-xl" />
                                    <p className="text-[18px] font-bold">MUST READ</p>
                                </div>
                                <div>
                                    {/* Must Read Section */}
                                    <div className="bg-[#FFF6F4] pb-30 p-4 rounded-md border-b border-gray-300 mb-2">
                                        <div className="space-y-4">
                                            {mustRead.map((item, idx) => (
                                                <div key={idx} className="flex gap-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-20 h-20 object-cover rounded-md"
                                                    />
                                                    <div className="flex flex-col justify-center">
                                                        <span className="text-xs font-semibold text-red-500 uppercase">
                                                            {item.category}
                                                        </span>
                                                        <p className="text-sm leading-snug text-[14px]">{item.title}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-300 border-b">
                                        <p className="text-center text-sm py-4 bg-[#F6F7F9] my-4">
                                            To advertise here, <span className="font-semibold cursor-pointer">contact us</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Black screen */}
                            <div className="w-full min-h-[230px] bg-black rounded-xl mt-4">
                                {/* Video Section */}
                                <div className="w-full m-h-[500px] bg-black">

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Black video screen */}
                    <div className="w-full min-h-[600px] bg-black rounded-xl mt-2 flex items-center justify-center">
                        <img src={playbutton} alt="playbutton" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BusinessDetails;
