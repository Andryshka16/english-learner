const Loader = () => {
	const circle = 'inline-block w-[20px] h-[20px] my-5 mx-1 rounded-full'
	return (
		<div className='loader flex justify-center items-center w-fit h-[20px] my-[40px] mx-auto'>
			<div className={circle}></div>
			<div className={circle}></div>
			<div className={circle}></div>
		</div>
	)
}

export default Loader
