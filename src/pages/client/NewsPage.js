import Section from '../../components/Section'

const NewsPage = () => {
  return (
    <div className='mb-6'>
      <Section title='THƯ VẬN ĐỘNG' />
      <iframe
        className='block h-screen w-full'
        src="/assets/news/Thu_Ngo_Van_Dong_Vu_Lan_Trang_2023.pdf"
        title="PDF Viewer"
      />
    </div>
  )
}

export default NewsPage
