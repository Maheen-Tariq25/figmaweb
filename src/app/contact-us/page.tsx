import Image from "next/image";


export default function HeroSection() {
  return (
    <div>
        <section className="bg-white py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8">
    {/* Left Content */}
    <div>
      <h4 className="text-sm uppercase font-semibold text-gray-500">Contact Us</h4>
      <h2 className="text-4xl font-bold text-gray-800 mt-2">Get in touch today!</h2>
      <p className="text-gray-500 mt-4">
        We know how large objects will act, but things on a small scale.
      </p>
      <div className="mt-6">
        <p className="text-lg text-gray-800">
          <span className="font-semibold">Phone:</span> +451 215 215
        </p>
        <p className="text-lg text-gray-800 mt-2">
          <span className="font-semibold">Fax:</span> +451 215 215
        </p>
      </div>
      {/* Social Media Icons */}
      <div className="flex items-center mt-6 space-x-4">
        <a
          href="#"
          className="text-gray-500 hover:text-gray-800 transition"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-800 transition"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-800 transition"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-800 transition"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </div>
    </div>
    {/* Right Image */}
    <div className="relative">
      <img
        src="/pic24.png"
        alt="Family Shopping"
        className="w-full h-auto object-cover"
      />
      {/* Optional Background Shapes */}
      <div className="absolute top-0 right-0 -z-10">
        <svg
          width="200"
          height="200"
          className="text-pink-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <svg
          width="120"
          height="120"
          className="text-purple-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="60" fill="currentColor" />
        </svg>
      </div>
    </div>
  </div>
</section>
                                          {/* Section 3 */}
 <div className="flex flex-col items-center gap-12 p-8">
  {/* Header Section */}
  <div className="text-center">
    <h1 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
      VISIT OUR OFFICE
    </h1>
    <h2 className="text-4xl font-bold text-gray-900 leading-snug max-w-xl mx-auto">
      We help small businesses with big ideas
    </h2>
  </div>

  {/* Contact Options */}
  <div className="flex flex-col lg:flex-row items-center gap-12">
    {/* Phone Support */}
    <div className="flex flex-col items-center text-center border rounded-lg p-6 shadow-sm w-80 min-h-[320px]">
      {/* Icon Placeholder */}
      <div className="mb-6">
        <img
          src="/icon7.png"
          alt="Phone Icon"
          className="w-12 h-12 mx-auto"
        />
      </div>
      <p className="text-gray-600">georgia.younge@example.com</p>
      <p className="text-gray-600">georgia.younge@gmail.com</p>
      <h3 className="mt-4 text-lg font-medium text-gray-900">Get Support</h3>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit Request
      </button>
    </div>

    {/* Address */}
    <div className="flex flex-col items-center text-center border rounded-lg p-6 shadow-sm bg-gray-800 text-white w-80 min-h-[320px]">
      {/* Icon Placeholder */}
      <div className="mb-6">
        <img
          src="/icon8.png"
          alt="Location Icon"
          className="w-12 h-12 mx-auto"
        />
      </div>
      <p>georgia.younge@example.com</p>
      <p>georgia.younge@gmail.com</p>
      <h3 className="mt-4 text-lg font-medium text-white">Get Support</h3>
      <button className="mt-4 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
        Submit Request
      </button>
    </div>

    {/* Email Support */}
    <div className="flex flex-col items-center text-center border rounded-lg p-6 shadow-sm w-80 min-h-[320px]">
      {/* Icon Placeholder */}
      <div className="mb-6">
        <img
          src="/icon9.png"
          alt="Email Icon"
          className="w-12 h-12 mx-auto"
        />
      </div>
      <p className="text-gray-600">georgia.younge@example.com</p>
      <p className="text-gray-600">georgia.younge@gmail.com</p>
      <h3 className="mt-4 text-lg font-medium text-gray-900">Get Support</h3>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit Request
      </button>
    </div>
  </div>

  {/* Footer Section */}
  <div className="text-center">
    <p className="text-lg text-gray-600">We Can’t Wait To Meet You</p>
    <h2 className="text-3xl font-bold text-gray-900">Let’s Talk</h2>
    <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Try It Free Now
    </button>
  </div>
</div>
    </div>
  )}