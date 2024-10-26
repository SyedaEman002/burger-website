import Image from "next/image";
export default function Home() {
  return (
    <div>
        <title>Burger King</title>
        <meta name="description" content="Welcome to Burger King" />
       

      {/* Header Section with Burger Background */}
      <header className="h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/burger.jpeg')" }}>
            <nav>
            <a href="#" className="text-lg mx-4 hover:text-amber-600">Home</a>
            <a href="#" className="text-lg mx-4 hover:text-amber-600">About</a>
            <a href="#" className="text-lg mx-4 hover:text-amber-600">Services</a>
            <a href="#" className="text-lg mx-4 hover:text-amber-600">Contact</a>
          </nav>
      <section><div className="h-full bg-opacity-50 flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold text-slate-50"> <i>Welcome to Burger King</i></h1>
          </div>
          </div>
          </section>
      </header>

      {/* About Section */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-slate-50 mb-4"><b>About Us</b></h2>
          <p className="text-lg text-slate-50 max-w-2xl mx-auto">
           <i> Welcome to Burger King! We serve the juiciest and most delicious burgers in town. Our secret ingredients and unique recipes are what make our burgers irresistible!
         </i> </p>
        </div>
      </section>

      {/* Burger Gallery Section */}
      <section className="bg-orange-500 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-slate-50 mb-8"><b>Our Burgers</b></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Burger Image 1 */}
            <div className="bg-orange-400 rounded-lg shadow-lg overflow-hidden">
              <img src="/burger1.jpeg" alt="Burger 1" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>Classic Cheeseburger</b></h3>
                <p className="text-slate-950"><i>A mouth-watering combination of cheese, lettuce, and our special sauce.</i></p>
              </div>
            </div>
            {/* Burger Image 2 */}
            <div className="bg-orange-400 rounded-lg shadow-lg overflow-hidden">
              <img src="/burger2.jpeg" alt="Burger 2" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>Double Whopper</b></h3>
                <p className="text-slate-950"><i>Two patties stacked with all the delicious flavors you love.</i></p>
              </div>
            </div>
            {/* Burger Image 3 */}
            <div className="bg-orange-400 rounded-lg shadow-lg overflow-hidden">
              <img src="/burger3.jpeg" alt="Burger 3" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>Zinger burger</b></h3>
                <p className="text-slate-950"><i>A crispy , spicy and guicy chicken Zinger.</i></p>
              </div>
            </div>
            {/* Burger Image 4 */}
            <div className=" bg-orange-400 rounded-lg shadow-lg overflow-hidden">
              <img src="/burger4.jpeg" alt="Burger 4" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>Single Patty Burger</b></h3>
                <p className="text-slate-950"><i>A single beef patty with juicy taste.</i></p>
              </div>
              </div>
               {/* Burger Image 4 */}
            <div className=" bg-orange-400 rounded-lg shadow-lg overflow-hidden">
              <img src="/burger5.jpeg" alt="Burger 4" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>Zinger With Fries</b></h3>
                <p className="text-slate-950"><i> A crispy zinger pattay with fries make your life delicious.</i></p>
              </div>
              
            </div>
            {/* Burger Image 4 */}
            <div className=" bg-orange-400 rounded-lg shadow-lg overflow-hidden">
              <img src="/burger6.jpeg" alt="Burger 4" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>Potato Patty Burger</b></h3>
                <p className="text-slate-950"><i> A potato patty burger makes a reason of your hunger.</i></p>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-orange-500 text-slate-50 py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold text-slate-50 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
          <ul>
                 <li><a  className="text-slate-50"href="https://www.instagram.com/syeda_eman189" target="_blank"> instagram 
            </a></li>
            <li><a  className="text-slate-50"href="https://www.snapchat.com/add/imanamir808" target="_blank">snapchat 
            </a></li>
            <li><a className="text-slate-50" href="https://www.linkedin.com/in/www.linkedin.com/in/syeda-eman-a4b529309" target="_blank"> linkdin 
              </a></li>
            <li><a className="text-slate-50" href="https://github.com/SyedaEman002/SyedaEman002" target="_blank"> github </a>
           </li>
           <li><a className="text-slate-50" href="https://https://vercel.com/syedaeman002s-projects" target="blank"> Vercel</a></li>
            </ul>
          </div>
          <p className="mt-6">&copy; 2024 Burger King. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
