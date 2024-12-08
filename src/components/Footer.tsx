export default function Footer() {
  return ( 
    <footer>
    {/* Bandage Section */}
    <section className="bg-white py-4">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
    {/* Left Section: Text */}
    <span className="text-gray-800 font-semibold">Bandage</span>

    {/* Right Section: Social Icons */}
    <div className="flex items-center space-x-4 text-blue-500">
      <a href="#" className="hover:text-blue-700">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="hover:text-blue-700">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="hover:text-blue-700">
        <i className="fab fa-twitter"></i>
      </a>
 
    </div>
  </div>
  {/* Divider Line */}
  <div className="border-t border-gray-200 mt-2"></div>
</section>


    {/* Footer Content Section */}
    <div className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-gray-700">Company Info</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Center</a></li>
            <li><a href="#" className="hover:underline">We are Hiring</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-gray-700">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Center</a></li>
            <li><a href="#" className="hover:underline">We are Hiring</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-gray-700">Features</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:underline">Business Marketing</a></li>
            <li><a href="#" className="hover:underline">User Analytics</a></li>
            <li><a href="#" className="hover:underline">Live Chat</a></li>
            <li><a href="#" className="hover:underline">Unlimited Support</a></li>
          </ul>
        </div>
        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-gray-700">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:underline">iOS & Android</a></li>
            <li><a href="#" className="hover:underline">Watch a Demo</a></li>
            <li><a href="#" className="hover:underline">Customers</a></li>
            <li><a href="#" className="hover:underline">API</a></li>
          </ul>
        </div>
        {/* Column 5 */}
        <div className="col-span-2">
          <h4 className="font-semibold text-gray-700">Get in Touch</h4>
          <form className="mt-4">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor amet A/B.
            </p>
          </form>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="bg-gray-200 py-4">
      <div className="max-w-screen-xl mx-auto px-4 text-sm text-gray-600">
        <p>Made With Love By Pixland All Right Reserved</p>
      </div>
    </div>
  </footer>
);
};
