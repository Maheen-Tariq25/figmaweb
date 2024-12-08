import Image from "next/image";


export default function HeroSection() {
  return (
   <div> <section className="relative bg-blue-400 min-h-[500px] flex items-center">
   <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
     {/* <!-- Left Content --> */}
     <div className="text-white md:max-w-[50%] space-y-4">
       <p className="text-sm uppercase tracking-wide">Summer 2020</p>
       <h1 className="text-4xl md:text-5xl font-bold">New Collection</h1>
       <p className="text-sm md:text-base text-gray-100">
         We know how large objects will act, but things on a small scale.
       </p>
       <a
         href="#"
         className="inline-block bg-green-500 text-white font-medium text-sm md:text-base px-6 py-3 rounded shadow-md hover:bg-green-600">
         Shop Now
       </a>
     </div>
 
     {/* <!-- Right Image --> */}
     <div className="mt-8 md:mt-0 md:w-[50%]">
  <img
    src="/pic1.png"
    alt="New Collection"
    className=" w-full max-w-[500px] mx-auto object-contain"
  />
</div>
   </div>
 </section>
                                                        {/* 2nd Section*/}
 <section className="py-16 bg-white">
  {/* <!-- Section Title --> */}
  <div className="text-center mb-12">
    <h2 className="text-[28px] font-bold">EDITOR'S PICK</h2>
    <p className="text-gray-500 mt-2 text-[14px]">Problems trying to resolve the conflict between</p>
  </div>

  {/* <!-- Grid Section --> */}
  <div className="grid grid-cols-4 gap-6 max-w-screen-lg mx-auto px-4">
    {/* <!-- Men Card --> */}
    <div className="relative group h-[280px]">
      <img
        src="/pic2.jpg"
        alt="Men"
        className="w-[415px] h-[280px] object-cover"
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
      >
        <button
          className="text-white font-semibold py-2 px-6 bg-white bg-opacity-20 rounded"
        >
          MEN
        </button>
      </div>
    </div>

    {/* <!-- Women Card --> */}
    <div className="relative group h-[280px]">
      <img
        src="pic3.jpg"
        alt="Women"
        className="w-[415px] h-[280px] object-cover"
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
      >
        <button
          className="text-white font-semibold py-2 px-6 bg-white bg-opacity-20 rounded"
        >
          WOMEN
        </button>
      </div>
    </div>

    {/* <!-- Accessories Card --> */}
    <div className="relative group h-[280px]">
      <img
        src="pic4.jpg"
        alt="Accessories"
        className="w-[415px] h-[280px] object-cover"
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
      >
        <button
          className="text-white font-semibold py-2 px-6 bg-white bg-opacity-20 rounded"
        >
          ACCESSORIES
        </button>
      </div>
    </div>

    {/* <!-- Kids Card --> */}
    <div className="relative group h-[280px]">
      <img
        src="pic5.jpg"
        alt="Kids"
        className="w-[415px] h-[280px] object-cover"
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
      >
        <button
          className="text-white font-semibold py-2 px-6 bg-white bg-opacity-20 rounded"
        >
          KIDS
        </button>
      </div>
    </div>
  </div>
</section>
                                                         {/* 3rd Section*/}
<section className="py-16 bg-white">
  {/* Section Title */}
  <div className="text-center mb-12">
    <h2 className="text-[28px] font-bold leading-[34px] tracking-tight">BESTSELLER PRODUCTS</h2>
    <p className="text-gray-500 mt-2 text-[14px] leading-[20px] tracking-normal">
      Problems trying to resolve the conflict between
    </p>
  </div>

  {/* Grid Section 1*/}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1200px] mx-auto px-4">
    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src="pic6.jpg"
        alt="Product 1"
        className="w-full h-[400px] object-cover rounded-[8px] mb-[16px]"
      />
      <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">Graphic Design</h3>
      <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">English Department</p>
      <div className="flex items-center space-x-2 mb-[12px]">
        <span className="text-[16px] text-green-500 font-bold">$6.48</span>
        <span className="text-[14px] text-gray-400 line-through">$16.48</span>
      </div>
      <div className="flex items-center space-x-[8px]">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
    </div>

    {/* Repeat for Other Cards */}
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src="pic7.jpg"
        alt="Product 2"
        className="w-full h-[400px] object-cover rounded-[8px] mb-[16px]"
      />
      <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">Graphic Design</h3>
      <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">English Department</p>
      <div className="flex items-center space-x-2 mb-[12px]">
        <span className="text-[16px] text-green-500 font-bold">$6.48</span>
        <span className="text-[14px] text-gray-400 line-through">$16.48</span>
      </div>
      <div className="flex items-center space-x-[8px]">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src="pic8.jpg"
        alt="Product 3"
        className="w-full h-[400px] object-cover rounded-[8px] mb-[16px]"
      />
      <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">Graphic Design</h3>
      <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">English Department</p>
      <div className="flex items-center space-x-2 mb-[12px]">
        <span className="text-[16px] text-green-500 font-bold">$6.48</span>
        <span className="text-[14px] text-gray-400 line-through">$16.48</span>
      </div>
      <div className="flex items-center space-x-[8px]">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src="pic9.jpg"
        alt="Product 4"
        className="w-full h-[400px] object-cover rounded-[8px] mb-[16px]"
      />
      <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">Graphic Design</h3>
      <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">English Department</p>
      <div className="flex items-center space-x-2 mb-[12px]">
        <span className="text-[16px] text-green-500 font-bold">$6.48</span>
        <span className="text-[14px] text-gray-400 line-through">$16.48</span>
      </div>
      <div className="flex items-center space-x-[8px]">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
    </div>
  </div>
   
  <section className="py-16 bg-white">
 
 

  {/* Grid Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1200px] mx-auto px-4">
    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src="/pic10.png"
        alt="Product 1"
        className="w-full h-[400px] object-cover rounded-[8px] mb-[16px]"
      />
      <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
        Graphic Design
      </h3>
      <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
        English Department
      </p>
      <div className="flex items-center space-x-2 mb-[12px]">
        <span className="text-[16px] text-green-500 font-bold">$6.48</span>
        <span className="text-[14px] text-gray-400 line-through">$16.48</span>
      </div>
      <div className="flex items-center space-x-[8px]">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
    </div>

    {/* Repeat for Other Cards */}
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src="/pic11.png"
        alt="Product 2"
        className="w-full h-[400px] object-cover rounded-[8px] mb-[16px]"
      />
      <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
        Graphic Design
      </h3>
      <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
        English Department
      </p>
      <div className="flex items-center space-x-2 mb-[12px]">
        <span className="text-[16px] text-green-500 font-bold">$6.48</span>
        <span className="text-[14px] text-gray-400 line-through">$16.48</span>
      </div>
      <div className="flex items-center space-x-[8px]">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src="/pic12.png"
        alt="Product 3"
        className="w-full h-[400px] object-cover rounded-[8px] mb-[16px]"
      />
      <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
        Graphic Design
      </h3>
      <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
        English Department
      </p>
      <div className="flex items-center space-x-2 mb-[12px]">
        <span className="text-[16px] text-green-500 font-bold">$6.48</span>
        <span className="text-[14px] text-gray-400 line-through">$16.48</span>
      </div>
      <div className="flex items-center space-x-[8px]">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src="/pic13.png"
        alt="Product 4"
        className="w-full h-[400px] object-cover rounded-[8px] mb-[16px]"
      />
      <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
        Graphic Design
      </h3>
      <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
        English Department
      </p>
      <div className="flex items-center space-x-2 mb-[12px]">
        <span className="text-[16px] text-green-500 font-bold">$6.48</span>
        <span className="text-[14px] text-gray-400 line-through">$16.48</span>
      </div>
      <div className="flex items-center space-x-[8px]">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
    </div>
  </div>
</section>
</section>
                   {/* Section 4 */}
    <section className="bg-[#228B76] py-16">
  <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
    {/* <!-- Left Content --> */}
    <div className="text-white lg:w-1/2">
      <p className="text-[14px] uppercase font-medium tracking-wider mb-4">Summer 2020</p>
      <h1 className="text-[48px] font-bold leading-[56px] mb-6">
        Vita Classic <br />
        Product
      </h1>
      <p className="text-[16px] leading-[24px] text-[#E8E8E8] mb-8">
        We know how large objects will act. We know how <br />
        an object will act. We know.
      </p>
      <div className="flex items-center space-x-4">
        <span className="text-[24px] font-bold">$16.48</span>
        <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-md font-medium text-[16px] shadow-md">
          Add to Cart
        </button>
      </div>
    </div>

    {/* <!-- Right Image --> */}
    <div className="lg:w-1/2 mt-8 lg:mt-0">
      <img
        src="/pic14.png"
        alt="Product Image"
        className="max-w-full rounded-lg"
      />
    </div>
  </div>
</section>
                                          {/* Section 5 */}
                                          <div className="bg-gray-50 py-16">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-12">
      <p className="text-blue-500 text-sm font-semibold uppercase">Practice Advice</p>
      <h2 className="text-4xl font-extrabold text-gray-800">Featured Posts</h2>
      <p className="text-gray-600 mt-4">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
      </p>
    </div>

    {/* Card Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/pic16.png"
          alt="Colorful houses"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <span className="text-xs uppercase font-bold text-red-500">New</span>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">Loudest à la Madison #1 (L'intégral)</h3>
          <p className="mt-2 text-gray-600 text-sm">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <span>22 April 2021</span>
            <span>10 comments</span>
          </div>
          <a
            href="#"
            className="mt-4 block text-blue-500 hover:underline text-sm font-medium"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/pic17.png"
          alt="Pink car"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <span className="text-xs uppercase font-bold text-red-500">New</span>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">Loudest à la Madison #1 (L'intégral)</h3>
          <p className="mt-2 text-gray-600 text-sm">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <span>22 April 2021</span>
            <span>10 comments</span>
          </div>
          <a
            href="#"
            className="mt-4 block text-blue-500 hover:underline text-sm font-medium"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/pic18.png"
          alt="Colorful umbrellas"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <span className="text-xs uppercase font-bold text-red-500">New</span>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">Loudest à la Madison #1 (L'intégral)</h3>
          <p className="mt-2 text-gray-600 text-sm">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <span>22 April 2021</span>
            <span>10 comments</span>
          </div>
          <a
            href="#"
            className="mt-4 block text-blue-500 hover:underline text-sm font-medium"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


 </div>
  );
}
