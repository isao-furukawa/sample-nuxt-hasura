// NOTE: 英語用言語ファイル
export default {
  language: {
    ja: 'Japanese',
    en: 'English',
    vi: 'Vietnamese',
  },
  menu: {
    login: 'Login',
    home: 'Home',
    query: 'Query',
    subscribe: 'Subscription',
    update: 'Update Mutation',
    validate_yup: 'Validation (Yup)',
    validate_zod: 'Validation (Zod)',
  },
  product_name: 'Product Name',
  price: 'Price',
  first_name: 'First Name',
  family_name: 'Family Name',
  gender: 'gender',
  birth: 'Birthday',
  is_logged_in: 'is logged in.',

  validation: {
    name: 'Name',
    age: 'Age',
    phone: 'Phone Number',
    birth: 'Birthday',
    password1: 'Enter Password',
    password2: 'Confirm Password',
    date_enrollment: 'Enrollment Date',
    date_graduation: 'Graduation Date',
    submit: 'Submit',
    email: 'Email',
  },
  message: {
    error: {
      from_to: 'Please enter a date after {from} for {to}.',
    },
  },
  hoge: {
    the_world: 'the world',
    dio: '9999',
    label: '【uiwa】|a',
    linked: '@:hoge.dio @:hoge.the_world !!!!',
    linked2: "It's @:hoge.label",
    greeting: (ctx: any) => JSON.stringify(ctx.named('label')),
    greeting2: ({ named }: any) =>
      (named('label') ? named('label') + ' is' : '') + ` only allowed with more than ${named('min')} characters`,
  },

  // Messages for validation errors in yup
  yup: {
    mixed: {
      default: ({ named }: any) => (named('label') ? named('label') + ' requires' : '') + ' a valid value',
      required: ({ named }: any) => (named('label') ? named('label') + ' requires' : '') + ' a value',
      oneOf: ({ named }: any) => (named('label') ? named('label') + ' must be' : '') + ` one of ${named('values')}`,
      notOneOf: ({ named }: any) => (named('label') ? named('label') + ' must not be' : '') + ` any of ${named('values')}`,
      defined: ({ named }: any) => (named('label') ? named('label') + ' requires' : '') + ' a value',
      notType: ({ named }: any) => (named('label') ? named('label') + ' contains' : '') + ' an invalid value',
    },
    string: {
      length: ({ named }: any) =>
        (named('label') ? named('label') + ' must be' : '') + ` exactly ${named('length')} characters`,
      min: ({ named }: any) => (named('label') ? named('label') + ' must be at least' : '') + ` ${named('min')} characters`,
      max: ({ named }: any) => (named('label') ? named('label') + ' must be less than' : '') + ` ${named('max')} characters`,
      matches: ({ named }: any) =>
        (named('label') ? named('label') + ' must match' : '') + ` the following format: ${named('regex')}`,
      email: ({ named }: any) => (named('label') ? named('label') + ' requires' : '') + ' a valid email address',
      url: ({ named }: any) => (named('label') ? named('label') + ' requires' : '') + ' a valid URL',
      uuid: ({ named }: any) => (named('label') ? named('label') + ' requires' : '') + ' a valid UUID',
      trim: ({ named }: any) => (named('label') ? named('label') + "'s" : '') + ' spaces should be trimmed',
      lowercase: ({ named }: any) => (named('label') ? named('label') + ' must be in' : '') + ' lowercase',
      uppercase: ({ named }: any) => (named('label') ? named('label') + ' must be in' : '') + ' uppercase',
      zenKataKana: ({ named }: any) => (named('label') ? named('label') + ' must be in' : '') + ' full-width katakana',
      hanKataKana: ({ named }: any) => (named('label') ? named('label') + ' must be in' : '') + ' half-width katakana',
      zenHiraKana: ({ named }: any) => (named('label') ? named('label') + ' must be in' : '') + ' full-width hiragana',
      phone: ({ named }: any) => (named('label') ? named('label') + ' must be in the format' : '') + ' XXX-XXX-XXX',
    },
    number: {
      min: ({ named }: any) => (named('label') ? named('label') + ' must be at least' : '') + ` ${named('min')}`,
      max: ({ named }: any) => (named('label') ? named('label') + ' must be less than' : '') + ` ${named('max')}`,
      lessThan: ({ named }: any) => (named('label') ? named('label') + ' must be less than' : '') + ` ${named('less')}`,
      moreThan: ({ named }: any) => (named('label') ? named('label') + ' must be greater than' : '') + ` ${named('more')}`,
      positive: ({ named }: any) => (named('label') ? named('label') + ' must be a' : '') + ' positive number',
      negative: ({ named }: any) => (named('label') ? named('label') + ' must be a' : '') + ' negative number',
      integer: ({ named }: any) => (named('label') ? named('label') + ' must be an' : '') + ' integer',
      between: ({ named }: any) =>
        (named('label') ? named('label') + ' must be between' : '') + ` ${named('a')} and ${named('b')}`,
    },
    date: {
      min: ({ named }: any) => (named('label') ? named('label') + ' must be after' : '') + ` ${named('min')}`,
      max: ({ named }: any) => (named('label') ? named('label') + ' must be before' : '') + ` ${named('max')}`,
    },
    object: {
      noUnknown: ({ named }: any) =>
        (named('label') ? named('label') + ' cannot have' : '') +
        ' unknown keys' +
        (named('unknown') ? ': ' + named('unknown') : ''),
    },
    array: {
      min: ({ named }: any) => (named('label') ? named('label') + ' must have at least' : '') + ` ${named('min')} items`,
      max: ({ named }: any) => (named('label') ? named('label') + ' must have no more than' : '') + ` ${named('max')} items`,
      length: ({ named }: any) => (named('label') ? named('label') + ' must have exactly' : '') + ` ${named('length')} items`,
    },
  },
};
