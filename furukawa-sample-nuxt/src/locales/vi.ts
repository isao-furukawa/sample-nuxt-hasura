// NOTE: ベトナム語用言語ファイル
export default {
  language: {
    ja: 'Tiếng Nhật',
    en: 'Tiếng Anh',
    vi: 'Tiếng Việt',
  },
  menu: {
    login: 'Đăng Nhập',
    home: 'Trang Chủ',
    user_query: 'Truy Vấn Người Dùng',
    product_query: 'Truy Vấn Sản Phẩm',
    subscribe: 'Đăng Ký',
    update: 'Cập Nhật Mutation',
    validate_yup: 'Xác Thực (Yup)',
    validate_zod: 'Xác Thực (Zod)',
  },
  product_name: 'Tên Sản Phẩm',
  price: 'Giá',

  first_name: 'Tên',
  family_name: 'Họ',
  gender: 'Giới Tính',
  birthday: 'Ngày Sinh',
  is_logged_in: 'đang đăng nhập.',
  access_denied: 'Truy cập bị từ chối',
  organization_id: 'ID Tổ Chức',
  random_change_apple: 'Giá Táo thay đổi ngẫu nhiên',
  random_change_orange: 'Giá quýt thay đổi ngẫu nhiên',
  random_change_banana: 'Giá Chuối thay đổi ngẫu nhiên',

  label: {
    item: {
      name: 'Tên',
      age: 'Tuổi',
      phone: 'Số Điện Thoại',
      birth: 'Ngày Sinh',
      email: 'Email',
      email_confirm: 'email(xác nhận)',
      password: 'Mật Khẩu',
    },
    action: {
      submit: 'Gửi',
    },
  },

  //   hoge: {
  //     the_world: 'thế giới',
  //     dio: '9999',
  //     label: '【uiwa】|a',
  //     linked: '@:hoge.dio @:hoge.the_world !!!!',
  //     linked2: 'Đó là @:hoge.label',
  //     greeting: (ctx: any) => JSON.stringify(ctx.named('label')),
  //     greeting2: ({ named }: any) =>
  //       (named('label') ? named('label') + ' chỉ' : '') + ` chấp nhận nhiều hơn ${named('min')} ký tự`,
  //   },

  // Messages for validation errors in yup
  yup: {
    mixed: {
      default: ({ named }: any) => (named('label') ? named('label') + ' yêu cầu' : '') + ' một giá trị hợp lệ',
      required: ({ named }: any) => (named('label') ? named('label') + ' yêu cầu' : '') + ' một giá trị',
      oneOf: ({ named }: any) => (named('label') ? named('label') + ' phải là' : '') + ` một trong số ${named('values')}`,
      notOneOf: ({ named }: any) =>
        (named('label') ? named('label') + ' không được là' : '') + ` bất kỳ trong số ${named('values')}`,
      defined: ({ named }: any) => (named('label') ? named('label') + ' yêu cầu' : '') + ' một giá trị',
      notType: ({ named }: any) => (named('label') ? named('label') + ' chứa' : '') + ' một giá trị không hợp lệ',
    },
    string: {
      length: ({ named }: any) => (named('label') ? named('label') + ' phải là' : '') + ` chính xác ${named('length')} ký tự`,
      min: ({ named }: any) => (named('label') ? named('label') + ' phải ít nhất' : '') + ` ${named('min')} ký tự`,
      max: ({ named }: any) => (named('label') ? named('label') + ' phải ít hơn' : '') + ` ${named('max')} ký tự`,
      matches: ({ named }: any) =>
        (named('label') ? named('label') + ' phải khớp với' : '') + ` định dạng sau: ${named('regex')}`,
      email: ({ named }: any) => (named('label') ? named('label') + ' yêu cầu' : '') + ' một địa chỉ email hợp lệ',
      url: ({ named }: any) => (named('label') ? named('label') + ' yêu cầu' : '') + ' một URL hợp lệ',
      uuid: ({ named }: any) => (named('label') ? named('label') + ' yêu cầu' : '') + ' một UUID hợp lệ',
      trim: ({ named }: any) => (named('label') ? named('label') + ' của' : '') + ' cần loại bỏ khoảng trắng',
      lowercase: ({ named }: any) => (named('label') ? named('label') + ' phải ở' : '') + ' chữ thường',
      uppercase: ({ named }: any) => (named('label') ? named('label') + ' phải ở' : '') + ' chữ hoa',
      zenKataKana: ({ named }: any) => (named('label') ? named('label') + ' phải là' : '') + ' katakana chữ toàn bộ',
      hanKataKana: ({ named }: any) => (named('label') ? named('label') + ' phải là' : '') + ' katakana chữ nửa bộ',
      zenHiraKana: ({ named }: any) => (named('label') ? named('label') + ' phải là' : '') + ' hiragana chữ toàn bộ',
      phone: ({ named }: any) => (named('label') ? named('label') + ' phải theo định dạng' : '') + ' XXX-XXX-XXX',
    },
    number: {
      min: ({ named }: any) => (named('label') ? named('label') + ' phải ít nhất' : '') + ` ${named('min')}`,
      max: ({ named }: any) => (named('label') ? named('label') + ' phải ít hơn' : '') + ` ${named('max')}`,
      lessThan: ({ named }: any) => (named('label') ? named('label') + ' phải ít hơn' : '') + ` ${named('less')}`,
      moreThan: ({ named }: any) => (named('label') ? named('label') + ' phải lớn hơn' : '') + ` ${named('more')}`,
      positive: ({ named }: any) => (named('label') ? named('label') + ' phải là' : '') + ' một số dương',
      negative: ({ named }: any) => (named('label') ? named('label') + ' phải là' : '') + ' một số âm',
      integer: ({ named }: any) => (named('label') ? named('label') + ' phải là' : '') + ' một số nguyên',
      between: ({ named }: any) =>
        (named('label') ? named('label') + ' phải nằm giữa' : '') + ` ${named('a')} và ${named('b')}`,
    },
    date: {
      min: ({ named }: any) => (named('label') ? named('label') + ' phải sau' : '') + ` ${named('min')}`,
      max: ({ named }: any) => (named('label') ? named('label') + ' phải trước' : '') + ` ${named('max')}`,
    },
    object: {
      noUnknown: ({ named }: any) =>
        (named('label') ? named('label') + ' không thể có' : '') +
        ' các khóa không xác định' +
        (named('unknown') ? ': ' + named('unknown') : ''),
    },
    array: {
      min: ({ named }: any) => (named('label') ? named('label') + ' phải có ít nhất' : '') + ` ${named('min')} mục`,
      max: ({ named }: any) => (named('label') ? named('label') + ' không được quá' : '') + ` ${named('max')} mục`,
      length: ({ named }: any) => (named('label') ? named('label') + ' phải có chính xác' : '') + ` ${named('length')} mục`,
    },
    relevance: {
      email_confirm: ({ named }: any) => (named('label') ? named('label') + ' và ' : '') + `${named('email')} không khớp`,
    },
  },
};
