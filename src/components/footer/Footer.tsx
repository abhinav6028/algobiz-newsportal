const Footer = () => {
    return (
        <div className="w-full px-5 md:px-10 lg:px-16 xl:px-20 overflow-x-hidden">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-0 overflow-x-hidden">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b pb-6 mb-6 border-gray-200">
                    {/* Logo & description */}
                    <div className="min-w-0">
                        <h1 className="flex items-center gap-2 mb-4">
                            <span className="bg-primary py-1 px-2 rounded-md text-white font-bold">N</span>
                            <span className="font-bold text-primary">NEWS PORTAL</span>
                        </h1>
                        <p className="text-third text-sm mb-4 break-words">
                            Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of events that matter.
                        </p>
                        <button className="flex items-center gap-2 bg-primary px-3 py-1 rounded-full text-xs text-white font-semibold">
                            <span className="block w-3 h-3 rounded-full bg-red-800"></span>
                            LIVE TV
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="min-w-0">
                        <h1 className="font-bold mb-4 text-base">Quick Links</h1>
                        <ul>
                            {["Home", "About Us", "Contact", "Privacy Policy", "Terms of Service"].map((link, i) => (
                                <li key={i} className="mb-2 text-third text-sm">{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="min-w-0">
                        <h1 className="font-bold mb-4 text-base">Categories</h1>
                        <ul>
                            {["Politics", "Technology", "Sports", "Business", "Entertainment"].map((cat, i) => (
                                <li key={i} className="mb-2 text-third text-sm">{cat}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div className="min-w-0">
                        <h1 className="font-bold mb-4 text-base">Follow Us</h1>
                        <ul>
                            {["Facebook", "Twitter", "Instagram", "Youtube"].map((social, i) => (
                                <li key={i} className="mb-2 text-third text-sm">{social}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 flex-wrap">
                    <p className="text-third text-sm text-center sm:text-left">
                        © 2025 News Portal. All rights reserved.
                    </p>
                    <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
                        {["Privacy Policy", "Terms of Service", "Contact Us"].map((item, i) => (
                            <li key={i} className="text-third text-sm">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
