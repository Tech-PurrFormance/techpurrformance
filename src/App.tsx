import header from './assets/header.png'
import section21 from './assets/section-2-1.png'
import section22 from './assets/section-2-2.png'
import section23 from './assets/section-2-3.png'
import logo from './assets/techpurrformance.png'

function App() {
	return (
		<>	
			{/* top header */}
			<div className="bg-white flex px-4 py-10 justify-center">
				<img src={logo} alt='Techpurrformance Logo' className='w-20 h-20 ml-4 rounded-full object-cover'></img>
				<button className="text-black font-medium px-4 py-2 ml-40 hover:text-blue-500">Terchpurrformance</button>
				<button className="text-black font-medium px-4 py-2 ml-40 hover:text-blue-500">Our Products</button>
				<button className="text-black font-medium px-4 py-2 ml-40 hover:text-blue-500">Why Choose Us</button>
				<button className="text-black font-medium px-4 py-2 ml-40 hover:text-blue-500">Contact Us</button>

			</div>
			{/* gallery slideshow */}
			<div className="relative w-full h-[60vh] md:h-[80vh]">
				<img src={header} alt='Header Background' className='absolute inset-0 w-full h-full object-cover'></img>
				{/* First content */}
				<div className="relative flex py-50 justify-center">
					<div>
						<h2 className='text-6xl text-white text-center'>Techpurrformance</h2>
						<h4 className='text-2xl text-white mt-10 text-center'>Tech and Performance in Perfect Harmony</h4>
							<div className='flex justify-center mt-10'>
								<button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 ml-4">Contact us</button>
							</div>
						</div>
						
				</div>
			</div>

			{/* side content */}
			<div className="relative w-full h-[60vh] md:h-[80vh]">
				<div className='relative justify-center'>
					<h2 className='text-4xl text-black mt-10 ml-40 text-center flex justify-center'>From Concept to Performance</h2>
					<h4 className='text-xl text-black mt-10 ml-40 text-center flex justify-center'>We’ve Got It Covered</h4>
					<p className='text-xl text-black mt-10 ml-40 text-center flex justify-center'>
						Our team of developers and analysts works alongside you to deliver end-to-end software solutions that 
						elevate your business’s performance and drive real results.</p>
				</div>
				<div className='flex justify-center mt-10'>
					<div className='text-center justify-center'>	
						<img src={section21} alt='Section 2-1' className='w-80 h-60 ml-40 rounded-lg object-cover mt-10'></img>
						<h2>System Design</h2>
					</div>
					<div className='text-center justify-center'>
						<img src={section22} alt='Section 2-2' className='w-80 h-60 ml-40 rounded-lg object-cover mt-10'></img>
						<h2>Development</h2>
					</div>
					<div className='text-center justify-center'>
						<img src={section23} alt='Section 2-3' className='w-80 h-60 ml-40 rounded-lg object-cover mt-10'></img>
						<h2>Deployment</h2>
					</div>
				</div>
			</div>
			{/*footer*/}
			<div className="bg-black flex px-4 py-10 justify-center">
				<div>
					<h4 className='text-white mt-10 text-center'>techpurrformance@hotmail.com</h4>
					<h4 className='text-white text-center'>copyright all rights reserved</h4>
				</div>
			</div>
		</>
	)
}

export default App
