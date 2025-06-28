import header from './assets/header.jpg'
import woundmeter from './assets/woundmeter.jpg'

function App() {
	return (
		<>	
			{/* top header */}
			<div className="bg-black flex px-4 py-10 justify-center">
				<h1 className='text-white'>This is header and Techpurrformance okay</h1>
				<button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 ml-4">Contact us</button>
			</div>
			{/* gallery slideshow */}
			<div className="bg-black">
				<img src={header}></img>
			</div>
			{/* First content */}
			<div className="bg-black flex px-4 py-10 justify-center">
				<div>
					<h2 className='text-6xl text-white text-center'>Fully managed social and enterprise application</h2>
					<h4 className='text-white mt-10 text-center'>We will help you for your IT Solutions</h4>
				</div>
			</div>
			{/* side content */}
			<div className="bg-white flex px-4 py-10 justify-center">
				<img src={woundmeter}></img>
				<div>
					<h4 className='text-3xl text-black mt-10 ml-40 text-center'>We will help you for your IT Solutions</h4>
					<p className='text-black ml-40 mt-40'>You have problems, with your business core and management of all things we can help you</p>
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
