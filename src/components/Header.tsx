import Link from "next/link";
export default function topHeader() {
  return (<div>
   <div className="bg-[rgb(37,43,66)] text-white flex justify-between items-center px-8 py-4">
  {/* Left Section */}
  <div className="flex items-center space-x-6">
    <div className="flex items-center space-x-2">
      <span>📞</span>
      <span>(225) 555-0118</span>
    </div>
    <div className="flex items-center space-x-2">
      <span>✉️</span>
      <span>michelle.rivera@example.com</span>
    </div>
  </div>

  {/* Center Section */}
  <div className="text-center">
    <span>
      Follow us and get a chance to win <strong>80% off</strong>
    </span>
  </div>

  {/* Right Section */}
  <div className="flex items-center space-x-4">
    <span>Follow Us:</span>
    <div className="flex space-x-3">
      {/* Social Media Icons */}
      <a href="#" className="hover:opacity-75 text-white">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="hover:opacity-75 text-white">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="hover:opacity-75 text-white">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="#" className="hover:opacity-75 text-white">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </div>
</div>

<header className="bg-white border-b border-gray-200">
  <div className="container mx-auto flex items-center justify-between h-[70px] px-[30px]">
    {/* <!-- Logo --> */}
    <div className="flex items-center">
      <a href="#" className="text-[24px] font-bold text-gray-800 leading-[58px]">Bandage</a>
    </div>

    {/* <!-- Navigation Links --> */}
    <nav className="flex space-x-[20px] text-[14px] font-medium text-gray-600">
      <Link href="http://localhost:3000/home">Home</Link>
      <Link href="http://localhost:3000/about">About</Link>
      <Link href="http://localhost:3000/shop">Shop</Link>
      <Link href="http://localhost:3000/contact-us">Contact Us</Link>
    </nav>

    {/* <!-- Spacer and Utility Links --> */}
    <div className="flex items-center space-x-[20px]">
      {/* <!-- Divider --> */}
      <div className="w-[1px] h-[20px] bg-gray-300"></div>

      {/* <!-- Login/Register --> */}
      <a href="#" className="text-[14px] text-gray-600 hover:text-blue-500">Login / Register</a>

      {/* <!-- Icons --> */}
      <div className="flex space-x-[15px] text-gray-600">
        <a href="#" className="hover:text-blue-500">
          <i className="fas fa-search"></i>
        </a>
        <a href="#" className="hover:text-blue-500">
          <i className="fas fa-heart"></i>
        </a>
        <a href="#" className="hover:text-blue-500">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  </div>
</header>


</div>

  );
}
