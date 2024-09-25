import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-white px-20 py-4 justify-center items-center sticky top-0 z-10">
         <div className='flex justify-between'>
             <div className='flex gap-x-4'>
               <img src={Logo} alt="logo" />
               <input type="text" placeholder='Search...' className='px-4 border border-gray-400 focus:border-none focus:outline outline-blue-600 outline-offset-0 outline-1 rounded bg-[#e4c3f9] placeholder:text-gray-400'/>
             </div>
             <div className='flex items-center gap-x-4'>
                <div>
                     <ul className='flex justify-center items-center gap-x-8 font-bold text-gray-400'>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                     </ul>
                </div>
                <div className='flex gap-x-4'>
                    <img src={Logo} alt="logo" />
                    <img src={Logo} alt="logo" />
                    <img src={Logo} alt="logo" />
                </div>
             </div>
         </div>
    </div>
  )
}

export default Navbar