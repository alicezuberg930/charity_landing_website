import { Link } from 'react-router-dom'
import { icons } from '../../utils/icons'
import moment from 'moment'

const EventsPage = () => {
  const { FaRegShareSquare, FaChevronDown, IoIosAddCircleOutline } = icons

  const dummy = []
  for (let i = 0; i <= 100; i++) {
    dummy.push(i)
  }

  return (
    <div className='bg-white rounded-md p-4'>
      <div>
        <div className='flex mb-2 font-semibold text-2xl'>
          <span className='text-xl font-bold'>Bài viết về hoạt động</span>
        </div>
        <div className='space-y-4'>
          <div className='flex lg:flex-row flex-col justify-between gap-2'>
            <div className='flex items-center gap-4 mb-4 md:mb-0'>
              <div className='shadow-sm border rounded-md'>
                <input
                  placeholder='Tìm kiếm'
                  type='text'
                  className='focus:border-main-color shadow-sm focus:shadow-main-color p-2 rounded-md'
                />
              </div>
            </div>
            <button className='flex items-center gap-1 bg-main-color px-4 py-2 rounded-xl text-white'>
              <IoIosAddCircleOutline className='w-5 h-5' />
              <span>Thêm mới</span>
            </button>
          </div>
          <div className='shadow rounded-none md:rounded-lg'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='bg-gray-50 px-3 py-2 md:py-3 w-36'>
                    <button className='flex items-center font-medium text-gray-500 text-xs focus:underline uppercase group'>
                      <span>Code</span>
                    </button>
                  </th>
                  <th className='bg-gray-50 px-3 py-2 md:py-3 w-1/3 lg:table-cell hidden'>
                    <button className='flex items-center font-medium text-gray-500 text-xs focus:underline uppercase group'>
                      <span>Thông tin người mua</span>
                    </button>
                  </th>
                  <th className='bg-gray-50 px-3 py-2 md:py-3'>
                    <button className='flex items-center font-medium text-gray-500 text-xs focus:underline uppercase group'>
                      <span>Tổng tiền</span>
                    </button>
                  </th>
                  <th className='bg-gray-50 px-3 py-2 md:py-3'>
                    <button className='flex items-center font-medium text-gray-500 text-xs focus:underline uppercase group'>
                      <span>Ngày đặt</span>
                    </button>
                  </th>
                  <th className='bg-gray-50 px-3 py-2 md:py-3'>
                    <button className='flex items-center font-medium text-gray-500 text-xs focus:underline uppercase group'>
                      <span>Trạng thái</span>
                    </button>
                  </th>
                  <th className='bg-gray-50 px-3 py-2 md:py-3 lg:table-cell hidden'>
                    <button className='flex items-center font-medium text-gray-500 text-xs focus:underline uppercase group'>
                      <span>Thanh toán</span>
                    </button>
                  </th>
                  <th className='bg-gray-50 px-3 py-2 md:py-3 w-12'>
                    <button className='flex items-center font-medium text-gray-500 text-xs focus:underline uppercase group'>
                      <span>Xem</span>
                    </button>
                  </th>
                </tr>
              </thead>

              <tbody className='bg-white divide-y divide-gray-200'>
                {dummy.map((v, i) => {
                  return (
                    <tr key={i} className='bg-white'>
                      <td className='px-3 py-2 md:py-4 text-gray-900 text-sm leading-5 whitespace-normal'>
                        <div className='text-gray-700'>
                          <span className='font-medium'>NX{24119 * i}</span>
                        </div>
                      </td>

                      <td className='hidden px-3 py-2 md:py-4 text-gray-900 text-sm leading-5 whitespace-normal lg:table-cell'>
                        <div className='line-clamp-3 text-ellipsis text-gray-700 overflow-hidden'>
                          <a href='https://fshoppii.com/cms/cart/view/10/nx2411080010/'>
                            <h4>
                              <b className='text-primary'>Tiến Nguyễn Vĩnh</b> -{' '}
                              <b>Phone: 0932430072</b>
                            </h4>
                            <p>
                              <b>Địa chỉ: </b>Ho Chi Minh City, Viet Nam
                            </p>
                            <p className='font-semibold text-green-700'>
                              Chuyển khoản ngân hàng
                            </p>
                          </a>
                        </div>
                      </td>

                      <td className='px-3 py-2 md:py-4 text-gray-900 text-sm leading-5 whitespace-normal'>
                        <div className='text-gray-700'>
                          <span className='font-medium'>{100000 * i}đ</span>
                        </div>
                      </td>

                      <td className='px-3 py-2 md:py-4 text-gray-900 text-sm leading-5 whitespace-normal'>
                        <div className='text-gray-700'>
                          <span className='font-medium'>
                            {moment().format('HH:mm D/M/YYYY')}
                          </span>
                        </div>
                      </td>

                      <td className='px-3 py-2 md:py-4 text-gray-900 text-sm leading-5 whitespace-normal'>
                        <div className='text-white text-xs'>
                          {i % 2 == 0 ? (
                            <span className='bg-blue-300 p-1.5 rounded-md'>
                              Đơn hàng mới
                            </span>
                          ) : i % 3 == 0 ? (
                            <span className='bg-[#347ab6] p-1.5 rounded-md'>
                              Đang xử lý
                            </span>
                          ) : i % 5 == 0 ? (
                            <span className='bg-[#5eb95b] p-1.5 rounded-md'>
                              Thành công
                            </span>
                          ) : (
                            <span className='bg-red-500 p-1.5 rounded-md'>
                              Thất bại
                            </span>
                          )}
                        </div>
                      </td>

                      <td className='hidden px-3 py-2 md:py-4 text-gray-900 text-sm leading-5 whitespace-normal lg:table-cell'>
                        <div className='text-white text-xs'>
                          {i % 2 == 0 ? (
                            <span className='bg-[#5eb95b] p-1.5 rounded-md'>
                              Đã thanh toán
                            </span>
                          ) : (
                            <span className='bg-red-500 p-1.5 rounded-md'>
                              Chưa thanh toán
                            </span>
                          )}
                        </div>
                      </td>

                      <td className='px-3 py-2 md:py-4 text-gray-900 text-sm leading-5 whitespace-normal'>
                        <Link
                          to={`/cms/orders`}
                          className='flex items-center bg-blue-300 hover:bg-blue-700 active:bg-blue-600 p-2 border border-transparent rounded-lg font-medium text-center text-sm text-white leading-5 transition-colors duration-150'
                          title='Details'
                        >
                          <FaRegShareSquare className='w-5 h-5' />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {/* Phan trang */}
        </div>
      </div>
    </div>
  )
}

export default EventsPage
