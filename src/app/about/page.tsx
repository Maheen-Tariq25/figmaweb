import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.css';

const HeroSection = () => {
  return (
    <div>
 <section className="bg-white py-16 relative">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-sm font-bold uppercase text-gray-500">About Company</h2>
          <h1 className="mt-2 text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-gray-600 text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600">
            Get Quote Now
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center relative">


<Image
  src="/pic19.png"
  alt="Shopping bags"
  width={500} // Specify width
  height={500} // Specify height
  className="w-full max-w-md rounded-md z-10"
/>

          {/* Background Bubble */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-pink-100 rounded-full z-0"></div>
          <div className="absolute top-0 -left-16 w-40 h-40 bg-purple-100 rounded-full z-0"></div>
        </div>
      </div>
    </section>
                                        {/* section 2  */}
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-sm font-bold uppercase text-red-500 tracking-wide">
            Practice Advice
          </h2>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-800 leading-snug">
            Met maxime Molille nas deserunt Almoe ex sit claquev dolor do reet seni.
          </h1>
        </div>
        {/* Right Content */}
        <div>
          <p className="text-gray-600 text-lg leading-relaxed relative top-10">
            Problems trying to resolve the conflict between the two major realms of Classical
            physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </section>
                                        
                                        {/* Section 3 */}
     <section className="bg-white py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4 sm:px-6 lg:px-8">
    {/* Stat 1 */}
    <div>
      <h3 className="text-3xl font-bold text-gray-800">15K</h3>
      <p className="text-sm text-gray-500 mt-2">Happy Customers</p>
    </div>
    {/* Stat 2 */}
    <div>
      <h3 className="text-3xl font-bold text-gray-800">150K</h3>
      <p className="text-sm text-gray-500 mt-2">Monthly Visitors</p>
    </div>
    {/* Stat 3 */}
    <div>
      <h3 className="text-3xl font-bold text-gray-800">15</h3>
      <p className="text-sm text-gray-500 mt-2">Countries Worldwide</p>
    </div>
    {/* Stat 4 */}
    <div>
      <h3 className="text-3xl font-bold text-gray-800">100+</h3>
      <p className="text-sm text-gray-500 mt-2">Top Partners</p>
    </div>
  </div>
</section>
                                         {/*Section 4  */}
     <section className="bg-white py-12">
     <div className="relative overflow-hidden rounded-lg shadow-lg max-w-4xl mx-auto">
  

<Image 
  src="/video.png" 
  alt="Video Thumbnail" 
  width={1920} // Replace with the actual width of your image
  height={1080} // Replace with the actual height of your image
  className="object-cover" 
  layout="responsive" 
/>

  <button
    className="absolute inset-0 flex items-center justify-center"
    aria-label="Play Video"
  >
    <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6.267 4.455A1 1 0 017.6 4.94l7.07 5.06a1 1 0 010 1.637l-7.07 5.06a1 1 0 01-1.333-1.484L13.197 10 6.267 5.94a1 1 0 01-.267-1.485z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </button>
</div>

    </section>                                  
                                                    {/* Section 5 */}

    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-gray-600">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Member 1 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">


<Image 
  src="/pic20.png" 
  alt="Team Member" 
  width={128} 
  height={128} 
  className="object-cover shadow-md" 
/>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">Lisanne</h3>
            <p className="text-sm text-gray-500">Photographer</p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
       

<Image 
  src="/pic21.png" 
  alt="Team Member" 
  width={128} 
  height={128} 
  className="object-cover shadow-md" 
/>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">Emma</h3>
            <p className="text-sm text-gray-500">Editor</p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
      

<Image 
  src="/pic22.png" 
  alt="Team Member" 
  width={128} 
  height={128} 
  className="object-cover shadow-md" 
/>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">Damien</h3>
            <p className="text-sm text-gray-500">Developer</p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
                                           {/* Section 6 */}
     <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    {/* Title Section */}
    <h3 className="text-3xl font-bold text-gray-800">Big Companies Are Here</h3>
    <p className="mt-4 text-lg text-gray-500">
      Trusted by leading companies to deliver world-class solutions.
    </p>

    {/* Logos Section */}
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
      {/* Company 1 */}
      <Image
  src="/icon1.png"
  alt="Company 1"
  width={48} // Set appropriate width
  height={48} // Set appropriate height
  className="mx-auto"
/>

      {/* Company 2 */}
      <Image src="/icon2.png" alt="Company 1" width={48} height={48} className="h-12 mx-auto" />
      {/* Company 3 */}
      <Image src="/icon3.png" alt="Company 1" width={48} height={48} className="h-12 mx-auto" />
      {/* Company 4 */}
      <Image src="/icon4.png" alt="Company 1" width={48} height={48} className="h-12 mx-auto" />
      {/* Company 5 */}
      <Image src="/icon5.png" alt="Company 1" width={48} height={48} className="h-12 mx-auto" />
      {/* Company 6 */}
      <Image src="/icon6.png" alt="Company 1" width={48} height={48} className="h-12 mx-auto" />
    </div>
  </div>
</section>
                                         {/* Section 7 */}
     <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
    {/* Left Section */}
    <div className="bg-blue-600 text-white p-10 rounded-lg flex flex-col justify-center">
      <h4 className="text-sm font-semibold uppercase mb-2 tracking-wide">
        Work With Us
      </h4>
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">
        Now Let’s Grow Yours
      </h2>
      <p className="text-base mb-6">
        The gradual accumulation of information about atomic and small-scale
        behavior during the first quarter of the 20th century.
      </p>
      <button className="px-6 py-3 border bg-blue-600 text-white font-semibold rounded-md shadow-sm">
        Button
      </button>
    </div>

    {/* Right Section */}
    <div className="flex justify-center">
  <Image 
    src="/pic23.png" 
    alt="Woman" 
    width={768} // Replace with actual width of your image
    height={512} // Replace with actual height of your image
    className="rounded-lg object-cover" 
  />
</div>
  </div>
</section>
          </div>
  )}
  export default HeroSection;