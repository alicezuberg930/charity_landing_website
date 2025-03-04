export default function Section ({ title }) {
  return (
    <div className='container mt-4 mb-4'>
      <h3 className='main-theme bold d-flex justify-content-center align-items-center'>
        <div className='seprarator'></div>
        <p className='section-title-main'>{title}</p>
        <div className='seprarator'></div>
      </h3>
    </div>
  )
}
 