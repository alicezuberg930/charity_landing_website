const Section = ({ title }) => {
  return (
    <div className='mt-4 mb-4 border-[1px] border-purple-900 p-2 rounded-xl w-fit mx-auto'>
      <h3 className='text-main-color font-bold'>
        <p className='text-center'>{title}</p>
      </h3>
    </div>
  )
}

export default Section
