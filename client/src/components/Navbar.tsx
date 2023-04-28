import { NavLink } from 'react-router-dom'

export default function NavBar() {
	return (
		<nav className='flex w-full justify-center items-center py-4 bg-slate-500 text-white'>
			{/* <NavLink className='text-2xl font-semibold' to='/'>
				WordScope
			</NavLink> */}
			<div className='flex justify-around items-center font-medium'>
				<NavLink to='/' className='mx-5 text-xl'>
					Knowledge
				</NavLink>
				<NavLink to='/insert' className='mx-5 text-xl'>
					Insert words
				</NavLink>
				<NavLink to='/practice' className='mx-5 text-xl'>
					Practice
				</NavLink>
			</div>
			{/* <h1 className='font-medium text-2xl'>Admin</h1> */}
		</nav>
	)
}
