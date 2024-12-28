import React from 'react'
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.css';


export default function shop1() {
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

{/*                                           SECTION 2                                         */}
<section className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
    {/* Card 1 */}
    <div className="relative group">
      <Image
        src="/pic25.png"
        alt="Cloths"
        width={300}
        height={400}
        className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h3 className="text-white text-lg font-semibold">CLOTHS</h3>
        <p className="text-white text-sm">5 Items</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative group">
      <Image
        src="/pic29.png"
        alt="Cloths"
        width={300}
        height={400}
        className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h3 className="text-white text-lg font-semibold">CLOTHS</h3>
        <p className="text-white text-sm">5 Items</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative group">
      <Image
        src="/pic26.png"
        alt="Cloths"
        width={300}
        height={400}
        className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h3 className="text-white text-lg font-semibold">CLOTHS</h3>
        <p className="text-white text-sm">5 Items</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="relative group">
      <Image
        src="/pic27.png"
        alt="Cloths"
        width={300}
        height={400}
        className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h3 className="text-white text-lg font-semibold">CLOTHS</h3>
        <p className="text-white text-sm">5 Items</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="relative group">
      <Image
        src="/pic28.png"
        alt="Cloths"
        width={300}
        height={400}
        className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h3 className="text-white text-lg font-semibold">CLOTHS</h3>
        <p className="text-white text-sm">5 Items</p>
      </div>
    </div>
  </div>
</section>
{/*                                            SECTION 4                                        */}

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

{/*                                            SECTION 5                                     */}
     <section className="py-16 bg-white">
     {/* Grid Section */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1200px] mx-auto px-4">
       {/* Card 1 */}
       <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
   
   <Image
     src="/pic2.jpg"  // Ensure the image is in the public directory
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
       
   <Image
     src="/pic3.jpg"  // Ensure the image is in the public directory
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
   
   <Image
     src="/pic30.png"  // Ensure the image is in the public directory
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
   
   <Image
     src="/pic5.jpg"  // Ensure the image is in the public directory
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

{/*                                            SECTION 6                                     */}
   
<section className="py-16 bg-white">
    {/* Grid Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1200px] mx-auto px-4">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
  
  <Image
    src="/pic31.png"  // Ensure the image is in the public directory
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
      
  <Image
    src="/pic32.png"  // Ensure the image is in the public directory
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
  
  <Image
    src="/pic33.png"  // Ensure the image is in the public directory
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
  
  <Image
    src="/pic34.png"  // Ensure the image is in the public directory
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
  
{/*                                            SECTION 7                                     */}
<section className="py-16 bg-white">
    {/* Grid Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1200px] mx-auto px-4">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
  
  <Image
    src="/pic35.png"  // Ensure the image is in the public directory
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
      
  <Image
    src="/pic36.png"  // Ensure the image is in the public directory
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
  
  <Image
    src="/pic37.png"  // Ensure the image is in the public directory
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
  
  <Image
    src="/pic38.png"  // Ensure the image is in the public directory
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
    </div>
)
}
