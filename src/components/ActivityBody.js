import { importAll } from '../utils/import_img'
import { Link } from 'react-router-dom'
const images = importAll(
  require.context('../assets/activity_image', false, /\.(png|jpe?g|svg)$/)
)

export default function ActivityBody ({ information }) {
  return (
    <div className='container'>
      {information.numberOfCardsPerRow.map((cardNumber, index) => {
        return (
          <div className='row mt-5 mb-5' key={cardNumber}>
            {information.response.data
              .slice(index * 2, index * 2 + 2)
              .map((dataRow, dataRowIndex) => {
                return (
                  <div className='col-sm-12 col-lg-6' key={dataRowIndex}>
                    <Link
                      to={'/' + information.response.category + '/details'}
                      state={{ details: dataRow }}
                      className='text-decoration-none text-dark'
                    >
                      <div className='shadow-lg m-0 card w-100'>
                        <img
                          style={{ objectFit: 'cover', height: '18rem' }}
                          className='card-img-top'
                          src={images[dataRow.banner]}
                          alt='Card'
                        />
                        <div className='card-body'>
                          <h5 className='card-title'>{dataRow.title}</h5>
                          <p className='card-text clamp-text'>
                            {dataRow.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
          </div>
        )
      })}
    </div>
  )
}
