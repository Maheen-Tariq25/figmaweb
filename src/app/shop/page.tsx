import Image from "next/image";


export default function HeroSection() {
  return ( <div><div className="bg-white py-16">
<div className="bg-gray-50 py-10">
  {/* Pricing Section */}
  <div className="text-center">
    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Pricing</p>
    <h1 className="mt-2 text-4xl font-bold text-gray-800">Simple Pricing</h1>

    {/* Breadcrumb Navigation */}
    <div className="flex justify-center items-center space-x-2 mt-4 text-sm text-gray-500">
      <span>Home</span>
      <span className="text-gray-400">/</span>
      <span className="font-semibold text-gray-800">Pricing</span>
    </div>
  </div>
</div>
<div className="bg-gray-50 py-16">
  {/* Pricing Header */}
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800">Pricing</h2>
    <p className="mt-4 text-gray-500">
      Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
    </p>
  </div>

  {/* Pricing Toggle */}
  <div className="flex justify-center items-center space-x-4 mt-8">
    <button className="text-gray-600">Monthly</button>
    <div className="relative flex items-center">
      <div className="bg-gray-200 w-12 h-6 rounded-full"></div>
      <div className="bg-blue-500 w-6 h-6 rounded-full absolute left-0 transform translate-x-[100%]"></div>
    </div>
    <button className="text-gray-600">Yearly</button>
    <span className="ml-4 text-blue-500 font-semibold">Save 25%</span>
  </div>

  {/* Pricing Cards */}
  <div className="grid grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
    {/* Free Plan */}
    <div className="border border-gray-200 p-6 text-center rounded-lg">
      <h3 className="text-lg font-semibold text-blue-500">Free</h3>
      <p className="text-sm text-gray-500 mt-2">Organize across all apps by hand</p>
      <p className="text-3xl font-bold text-blue-500 mt-4">$0</p>
      <p className="text-sm text-blue-500">Per Month</p>
      <div className="mt-6">
        <div className="flex items-center justify-center text-sm text-gray-800">
          <div className="bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full mr-2">✔</div>
          Unlimited product updates
        </div>
      </div>
    </div>

    {/* Standard Plan */}
    <div className="bg-gray-800 text-white p-6 text-center rounded-lg">
      <h3 className="text-lg font-semibold text-blue-500">Standard</h3>
      <p className="text-sm mt-2">Organize across all apps by hand</p>
      <p className="text-3xl text-blue-500 font-bold mt-4">$9.99</p>
      <p className="text-sm text-blue-500">Per Month</p>
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-center text-sm">
          <div className="bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full mr-2">✔</div>
          Unlimited product updates
        </div>
        <div className="flex items-center justify-center text-sm">
          <div className="bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full mr-2">✔</div>
          Unlimited product updates
        </div>
      </div>
    </div>

    {/* Premium Plan */}
    <div className="border border-gray-200 p-6 text-center rounded-lg">
      <h3 className="text-lg font-semibold text-blue-500">Premium</h3>
      <p className="text-sm text-gray-500 mt-2">Organize across all apps by hand</p>
      <p className="text-3xl font-bold text-blue-500 mt-4">$19.99</p>
      <p className="text-sm text-blue-500">Per Month</p>
      <div className="mt-6">
        <div className="flex items-center justify-center text-sm text-gray-800">
          <div className="bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full mr-2">✔</div>
          Unlimited product updates
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
  
  
  
                                         {/* Section 2 */}
   <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    {/* Title Section */}
    <h4 className="text-3xl font-bold text-gray-800">Trusted By Over 4000 Big Companies</h4>
    

    {/* Logos Section */}
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
      {/* Company 1 */}
      <img src="/icon1.png" alt="Company 1" className="h-12 mx-auto" />
      {/* Company 2 */}
      <img src="/icon2.png" alt="Company 2" className="h-12 mx-auto" />
      {/* Company 3 */}
      <img src="/icon3.png" alt="Company 3" className="h-12 mx-auto" />
      {/* Company 4 */}
      <img src="/icon4.png" alt="Company 4" className="h-12 mx-auto" />
      {/* Company 5 */}
      <img src="/icon5.png" alt="Company 5" className="h-12 mx-auto" />
      {/* Company 6 */}
      <img src="/icon6.png" alt="Company 6" className="h-12 mx-auto" />
    </div>
  </div>
  </section>
                                  {/* Section 3 */}
  <div className="flex flex-col items-center px-8 py-16 space-y-12 max-w-7xl mx-auto">
  {/* Heading Section */}
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900">Pricing FAQs</h1>
    <p className="text-gray-500 mt-2 max-w-prose text-1xl mx-auto">
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Problems trying to resolve the conflict between the two major realms of Classical physics
    </p>
  </div>

  {/* FAQ Grid Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
    {/* FAQ Item */}
    <div className="space-y-2">
      <p className="flex items-start text-gray-900 font-semibold">
        <img src="/icon10.png" alt="Arrow Icon" className="w-4 h-4 mr-2" />
        the quick fox jumps over the lazy dog
      </p>
      <p className="text-gray-500 text-sm">
        Met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
    {/* Repeat FAQ Item for all six entries */}
    <div className="space-y-2">
      <p className="flex items-start text-gray-900 font-semibold">
        <img src="/icon10.png" alt="Arrow Icon" className="w-4 h-4 mr-2" />
        the quick fox jumps over the lazy dog
      </p>
      <p className="text-gray-500 text-sm">
        Met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
    <div className="space-y-2">
      <p className="flex items-start text-gray-900 font-semibold">
        <img src="/icon10.png" alt="Arrow Icon" className="w-4 h-4 mr-2" />
        the quick fox jumps over the lazy dog
      </p>
      <p className="text-gray-500 text-sm">
        Met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
    <div className="space-y-2">
      <p className="flex items-start text-gray-900 font-semibold">
        <img src="/icon10.png" alt="Arrow Icon" className="w-4 h-4 mr-2" />
        the quick fox jumps over the lazy dog
      </p>
      <p className="text-gray-500 text-sm">
        Met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
    <div className="space-y-2">
      <p className="flex items-start text-gray-900 font-semibold">
        <img src="/icon10.png" alt="Arrow Icon" className="w-4 h-4 mr-2" />
        the quick fox jumps over the lazy dog
      </p>
      <p className="text-gray-500 text-sm">
        Met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
    <div className="space-y-2">
      <p className="flex items-start text-gray-900 font-semibold">
        <img src="/icon10.png"alt="Arrow Icon" className="w-4 h-4 mr-2" />
        the quick fox jumps over the lazy dog
      </p>
      <p className="text-gray-500 text-sm">
        Met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
  </div>

  {/* Footer Section */}
  <div className="text-center">
    <p className="text-gray-500">
      Haven’t got your answer? <a href="#" className="text-blue-500 underline">Contact our support</a>
    </p>
  </div>
</div>
                                           {/* Section 4 */}
  <div className="flex flex-col items-center px-8 py-16 space-y-8 bg-white">
  {/* <!-- Heading Section --> */}
  <h2 className="text-2xl font-bold text-gray-900 text-center">
    Start your 14 days free trial
  </h2>
  <p className="text-gray-500 text-center max-w-md">
    Met minim Mollit non deserunt Alamo est sit aliqua dolor do amet sint. Velit official consequat.
  </p>

  {/* <!-- Button Section --> */}
  <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
    Try it free now
  </button>

  {/* <!-- Social Media Icons Section --> */}
  <div className="flex space-x-6">
    <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-600">
      <img src="/icon14.png" alt="Twitter" className="w-6 h-6" />
    </a>
    <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">
      <img src="/icon11.png" alt="Facebook" className="w-6 h-6" />
    </a>
    <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-blue-600">
      <img src="/icon12.png" alt="Instagram" className="w-6 h-6" />
    </a>
    <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-600">
      <img src="/icon13.png" alt="LinkedIn" className="w-6 h-6" />
    </a>
  </div>
</div>
</div>

  
  )}