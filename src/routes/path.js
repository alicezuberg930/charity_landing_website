const path = (root, sublink) => {
  return `${root}${sublink}`;
}

export const ROOT_HOME = '/'
export const ROOT_CMS = '/cms'

export const ROUTES = {
  home: '',
  design: path(ROOT_HOME, 'design'),
  photoshoot: path(ROOT_HOME, 'photoshoot'),
  video: path(ROOT_HOME, 'video'),
  chaoTinhThuong: path(ROOT_HOME, 'chao-tinh-thuong'),
  chuongTrinhThuongNien: path(ROOT_HOME, 'chuong-trinh-thuong-nien'),
  hoTroHoanCanh: path(ROOT_HOME, 'ho-tro-hoan-canh'),
  tiepSucTriThuc: path(ROOT_HOME, 'tiep-suc-tri-thuc'),
  rule: path(ROOT_HOME, 'rule'),
  criteria: path(ROOT_HOME, 'criteria'),
  structure: path(ROOT_HOME, 'structure'),
  contact: path(ROOT_HOME, 'contact'),
  news: path(ROOT_HOME, 'news'),
  chaoTinhThuongDetails: (slug) => path(ROOT_HOME, `chao-tinh-thuong/${slug}`),
  chuongTrinhThuongNienDetails: (slug) => path(ROOT_HOME, `chuong-trinh-thuong-nien/${slug}`),
  hoTroHoanCanhDetails: (slug) => path(ROOT_HOME, `ho-tro-hoan-canh/${slug}`),
  tiepSucTriThucDetails: (slug) => path(ROOT_HOME, `tiep-suc-tri-thuc/${slug}`),
  banner: {
    root: 'banner',
    list: path(ROOT_CMS, '/banner/list'),
    new: path(ROOT_CMS, '/banner/new'),
    edit: (id) => path(ROOT_CMS, `/banner/edit/${id}`),
  },
  post: {
    root: 'post',
    list: path(ROOT_CMS, '/post/list'),
    new: path(ROOT_CMS, '/post/new'),
    edit: (id) => path(ROOT_CMS, `/post/edit/${id}`),
  },
  event: {
    root: 'event',
    list: path(ROOT_CMS, '/event/list'),
    new: path(ROOT_CMS, '/event/new'),
    edit: (id) => path(ROOT_CMS, `/event/edit/${id}`),
  },
  information: 'information',
  login: path(ROOT_CMS, '/login')
}
