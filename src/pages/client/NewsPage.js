import Section from '../../components/Section'

const NewsPage = () => {
  return (
    <div className='mb-6'>
      <Section title='THƯ VẬN ĐỘNG' />
      <embed
        className='block h-screen'
        width={'100%'}
        src='https://drive.google.com/file/d/1GPnBwxJA8fj64-R-1QJeA331fzGo054n/preview'
        type='application/pdf'
      />
    </div>
  )
}

export default NewsPage
