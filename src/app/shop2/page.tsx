import React from 'react'
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.css';

export default function shop2() {
  return (
    <div>
      <section className="bg-gray-50 py-4 border-b border-gray-200">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      {/* Left: Section Title */}
      <h1 className="text-xl font-semibold text-gray-800">Shop</h1>
      
      {/* Right: Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500">
        <a href="/" className="hover:text-gray-700">Home</a>
        <span className="text-gray-400">/</span>
        <span>Shop</span>
      </nav>
    </div>
  </div>
</section> 

{/*                                            SECTION 2                                    */}
<div className="max-w-6xl mx-auto p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Image Section */}
    <div className="flex flex-col items-center">
      <div className="w-full">
        <Image
          src="/pic39.png" // Replace with your image path
          alt="Floating Phone"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
      <div className="flex space-x-4 mt-4">
        <Image
          src="/pic40.png" // Replace with thumbnail paths
          alt="Thumbnail 1"
          width={100}
          height={100}
          className="cursor-pointer rounded-lg"
        />
        <Image
          src="/pic41.png"
          alt="Thumbnail 2"
          width={100}
          height={100}
          className="cursor-pointer rounded-lg"
        />
      </div>
    </div>

    {/* Right Details Section */}
    <div>
      <h2 className="text-3xl font-semibold mb-4">Floating Phone</h2>
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-yellow-500 text-lg">★★★★★</span>
        <p className="text-gray-600">(10 Reviews)</p>
      </div>
      <p className="text-xl font-bold mb-4">$1,139.33</p>
      <p className="text-green-600 mb-4">
        Availability: <span className="font-semibold">In Stock</span>
      </p>
      <p className="text-gray-600 mb-6">
        Met minim Mollie non desert Alamo est sit aliquip dolor do met sent.
        RELIT official consequat door ENIM RELIT Mollie. Excilation venil
        consequat sent nostraum met.
      </p>
      <div className="flex items-center space-x-4 mb-6">
        <button className="w-6 h-6 bg-cyan-500 rounded-full"></button>
        <button className="w-6 h-6 bg-teal-700 rounded-full"></button>
        <button className="w-6 h-6 bg-gray-700 rounded-full"></button>
        <button className="w-6 h-6 bg-orange-700 rounded-full"></button>
      </div>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Select Options
      </button>
      <div className="flex space-x-4 mt-6">
        <button className="text-gray-500 hover:text-black">
          <i className="far fa-heart"></i>
        </button>
        <button className="text-gray-500 hover:text-black">
          <i className="fas fa-share-alt"></i>
        </button>
      </div>
    </div>
  </div>
</div>

{/*                                               SECTION 3                                        */}
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Image */}
        <div className="flex justify-center items-start">
          <Image
            src="/pic42.png" // Replace with your image path
            alt="Decorative Art"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Middle Column - Text Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">the quick fox jumps over</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Met minim Mollie non desert Alamo est sit aliquip dolor do met sent.
            RELIT official consequat door ENIM RELIT Mollie. Excitation venil
            consequat sent nostraum met.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Met minim Mollie non desert Alamo est sit aliquip dolor do met sent.
            RELIT official consequat door ENIM RELIT Mollie. Excitation venil
            consequat sent nostraum met.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Met minim Mollie non desert Alamo est sit aliquip dolor do met sent.
            RELIT official consequat door ENIM RELIT Mollie. Excitation venil
            consequat sent nostraum met.
          </p>
        </div>

        {/* Right Column - List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">the quick fox jumps over</h2>
          <ul className="space-y-4">
            <li className="text-gray-600 flex items-start">
              <span className="mr-2 text-green-600">✓</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing 
            </li>
            <li className="text-gray-600 flex items-start">
              <span className="mr-2 text-green-600">✓</span>
              Pellentesque quis eros lobortis, vestibulum turpis.
            </li>
            <li className="text-gray-600 flex items-start">
              <span className="mr-2 text-green-600">✓</span>
              Sed luctus purus nec lorem tincidunt facilisis.
            </li>
            <li className="text-gray-600 flex items-start">
              <span className="mr-2 text-green-600">✓</span>
              Cras ultricies ligula sed magna dictum porta.
            </li>
          </ul><br/>
        <div>
        <h2 className="text-2xl font-semibold mb-4">the quick fox jumps over</h2>
          <ul className="space-y-4">
            <li className="text-gray-600 flex items-start">
              <span className="mr-2 text-green-600">✓</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </li>
            <li className="text-gray-600 flex items-start">
              <span className="mr-2 text-green-600">✓</span>
              Pellentesque quis eros lobortis, vestibulum turpis.
            </li>
            <li className="text-gray-600 flex items-start">
              <span className="mr-2 text-green-600">✓</span>
              Sed luctus purus nec lorem tincidunt facilisis.
            </li>
            <li className="text-gray-600 flex items-start">
              <span className="mr-2 text-green-600">✓</span>
              Cras ultricies ligula sed magna dictum porta.
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    {/*                                                SECTION 4                                        */}
     <section className="py-16 bg-white">
         {/* Grid Section */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1200px] mx-auto px-4">
           {/* Card 1 */}
           <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
       
       <Image
         src="/pic43.png"  // Ensure the image is in the public directory
         alt="Product 1"
         width={500}        // Set the width in pixels
         height={400}       // Set the height in pixels
         className="object-cover rounded-[8px] mb-[16px]"  // Tailwind class for styling
       />
       
             <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
               Graphic Design
             </h3>
             <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
               English Department
             </p>
             <div className="flex items-center space-x-2 mb-[12px]">
             <span className="text-[14px] text-gray-400 line-through">$16.48</span>
               <span className="text-[16px] text-green-500 font-bold">$6.48</span>
             </div>
           </div>
       
           {/* Repeat for Other Cards */}
           <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
           
       <Image
         src="/pic44.png"  // Ensure the image is in the public directory
         alt="Product 2"
         width={500}        // Set the width in pixels
         height={400}       // Set the height in pixels
         className="object-cover rounded-[8px] mb-[16px]"  // Tailwind class for styling
       />
       
             <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
               Graphic Design
             </h3>
             <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
               English Department
             </p>
             <div className="flex items-center space-x-2 mb-[12px]">
             <span className="text-[14px] text-gray-400 line-through">$16.48</span>
               <span className="text-[16px] text-green-500 font-bold">$6.48</span>
             </div>
           </div>
       
           {/* Card 3 */}
           <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
       
       <Image
         src="/pic45.png"  // Ensure the image is in the public directory
         alt="Product 3"
         width={500}        // Set the width in pixels
         height={400}       // Set the height in pixels
         className="object-cover rounded-[8px] mb-[16px]"  // Tailwind class for styling
       />
       
             <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
               Graphic Design
             </h3>
             <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
               English Department
             </p>
             <div className="flex items-center space-x-2 mb-[12px]">
             <span className="text-[14px] text-gray-400 line-through">$16.48</span>
               <span className="text-[16px] text-green-500 font-bold">$6.48</span>
             </div>
           </div>
       
           {/* Card 4 */}
           <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
       
       <Image
         src="/pic46.png" // Ensure the image is in the public directory
         alt="Product 4"
         width={500}        // Set the width in pixels
         height={400}       // Set the height in pixels
         className="object-cover rounded-[8px] mb-[16px]"  // Tailwind class for styling
       />
       
             <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
               Graphic Design
             </h3>
             <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
               English Department
             </p>
             <div className="flex items-center space-x-2 mb-[12px]">
             <span className="text-[14px] text-gray-400 line-through">$16.48</span>
               <span className="text-[16px] text-green-500 font-bold">$6.48</span>
             </div>
           </div>
         </div>
       </section>
    
    {/*                                                SECTION 5                                         */}
    <section className="py-16 bg-white">
         {/* Grid Section */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1200px] mx-auto px-4">
           {/* Card 1 */}
           <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
       
       <Image
         src="/pic47.png"  // Ensure the image is in the public directory
         alt="Product 1"
         width={500}        // Set the width in pixels
         height={400}       // Set the height in pixels
         className="object-cover rounded-[8px] mb-[16px]"  // Tailwind class for styling
       />
       
             <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
               Graphic Design
             </h3>
             <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
               English Department
             </p>
             <div className="flex items-center space-x-2 mb-[12px]">
             <span className="text-[14px] text-gray-400 line-through">$16.48</span>
               <span className="text-[16px] text-green-500 font-bold">$6.48</span>
             </div>
           </div>
       
           {/* Repeat for Other Cards */}
           <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
           
       <Image
         src="/pic48.png"  // Ensure the image is in the public directory
         alt="Product 2"
         width={500}        // Set the width in pixels
         height={400}       // Set the height in pixels
         className="object-cover rounded-[8px] mb-[16px]"  // Tailwind class for styling
       />
       
             <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
               Graphic Design
             </h3>
             <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
               English Department
             </p>
             <div className="flex items-center space-x-2 mb-[12px]">
             <span className="text-[14px] text-gray-400 line-through">$16.48</span>
               <span className="text-[16px] text-green-500 font-bold">$6.48</span>
             </div>
           </div>
       
           {/* Card 3 */}
           <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
       
       <Image
         src="/pic43.png"  // Ensure the image is in the public directory
         alt="Product 3"
         width={500}        // Set the width in pixels
         height={400}       // Set the height in pixels
         className="object-cover rounded-[8px] mb-[16px]"  // Tailwind class for styling
       />
       
             <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
               Graphic Design
             </h3>
             <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
               English Department
             </p>
             <div className="flex items-center space-x-2 mb-[12px]">
             <span className="text-[14px] text-gray-400 line-through">$16.48</span>
               <span className="text-[16px] text-green-500 font-bold">$6.48</span>
             </div>
           </div>
       
           {/* Card 4 */}
           <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
       
       <Image
         src="/pic44.png" // Ensure the image is in the public directory
         alt="Product 4"
         width={500}        // Set the width in pixels
         height={400}       // Set the height in pixels
         className="object-cover rounded-[8px] mb-[16px]"  // Tailwind class for styling
       />
       
             <h3 className="text-[18px] font-medium leading-[22px] text-center mb-[8px]">
               Graphic Design
             </h3>
             <p className="text-[14px] text-gray-500 leading-[18px] text-center mb-[12px]">
               English Department
             </p>
             <div className="flex items-center space-x-2 mb-[12px]">
             <span className="text-[14px] text-gray-400 line-through">$16.48</span>
               <span className="text-[16px] text-green-500 font-bold">$6.48</span>
             </div>
           </div>
         </div>
       </section>

       {/*                                            SECTION 6                                        */}
       
         <section className="bg-gray-50 py-16">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          
           {/* Logos Section */}
           <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
             {/* Company 1 */}
             <Image
         src="/icon1.png"
         alt="Company 1"
         width={70} // Set appropriate width
         height={48} // Set appropriate height
         className="mx-auto"
       />
             {/* Company 2 */}
             <Image src="/icon2.png" alt="Company 1" width={70} height={48} className="h-12 mx-auto" />
             {/* Company 3 */}
             <Image src="/icon3.png" alt="Company 1" width={70} height={48} className="h-12 mx-auto" />
             {/* Company 4 */}
             <Image src="/icon4.png" alt="Company 1" width={70} height={48} className="h-12 mx-auto" />
             {/* Company 5 */}
             <Image src="/icon5.png" alt="Company 1" width={70} height={48} className="h-12 mx-auto" />
             {/* Company 6 */}
             <Image src="/icon6.png" alt="Company 1" width={70} height={48} className="h-12 mx-auto" />
           </div>
         </div>
       </section>
    </div>
  )
}
