import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'

function NewsPage () {
  return (
    <>
      <Header />
      <div className='container'>
        <Section title={'THƯ VẬN ĐỘNG'} />
        <embed
          className='mb-5'
          width={'100%'}
          height={'1000px'}
          src='https://drive.google.com/file/d/1GPnBwxJA8fj64-R-1QJeA331fzGo054n/preview'
          type='application/pdf'
        ></embed>
      </div>
      <Footer />
    </>
  )
}

export default NewsPage
