export default function Header () {

    return (

           <header className="bg-Gray-900 shadow-md fixed w-full top-0 left-0 z-50">

  <nav className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
    <a href="#" className="text-2xl font-bold text-Stone-100">HerbHome</a>

    <div className="hidden md:flex items-center gap-6 text-gray-600">
      <a href="/week02" className="hover:text-indigo-600">First Page</a>
      <a href="/contract" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Contract</a>
    </div>
  </nav>

</header>  
    );
}