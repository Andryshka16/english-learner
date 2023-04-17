import { NavLink } from 'react-router-dom'

export default function NavBar() {
	return (
		<nav className='flex w-full justify-between items-center h-14 py-2 px-14 bg-slate-500 text-white'>
			<NavLink className='text-2xl font-semibold' to={'/'}>
				WordScope
			</NavLink>
			<div className='flex justify-around items-center font-medium'>
				<NavLink to='/' className='mx-3 text-xl'>
					Practice
				</NavLink>
				<NavLink to='/newWords' className='mx-3 text-xl'>
					New words
				</NavLink>
				<NavLink to='/test' className='mx-3 text-xl'>
					Test
				</NavLink>
			</div>
			<h1 className='font-medium text-2xl'>Andryshka</h1>
		</nav>
	)
}
