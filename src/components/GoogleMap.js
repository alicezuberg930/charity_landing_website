export default function GoogleMap () {
  return (
    <div className='mt-5 mb-5'>
      <iframe
        title='headquarter'
        style={{ width: '100%', border: 'none' }}
        height={500}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9971459556706!2d106.65243829378913!3d10.738002980458353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4bc87ce147%3A0x6d4e73d5e924c37f!2zw4FuaCBTw6FuZyB04burIHRoaeG7h24!5e0!3m2!1sen!2s!4v1690995321475!5m2!1sen!2s'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy={'no-referrer-when-downgrade'}
      ></iframe>
    </div>
  )
}
