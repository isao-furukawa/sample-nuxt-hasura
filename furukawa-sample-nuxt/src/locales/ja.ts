// NOTE: 日本語語用言語ファイル
export default {
  language: {
    ja: '日本語',
    en: '英語',
    vi: 'ベトナム語',
  },
  menu: {
    home: 'ホーム',
    subscribe: 'サブスクリプション',
    update: '更新ミューテーション',
    validate_yup: 'バリデーション(Yup)',
    validate_zod: 'バリデーション(Zod)',
  },
  product_name: '商品名',
  price: '価格',

  label: {
    item: {
      name: '名前',
      age: '年齢',
      phone: '電話番号',
      birth: '誕生日',
      email: 'メールアドレス',
      email_confirm: 'メールアドレス(確認)',
    },
    action: {
      submit: '送信',
    },
  },

  // hoge: {
  //   the_world: 'the world',
  //   dio: '９９９９',
  //   label: '【ういあ】|a',
  //   linked: '@:hoge.dio @:hoge.the_world !!!!',
  //   linked2: '@:hoge.label だよ',
  //   // greeting: (ctx: any) => `hello, ${ctx.named('name')}!`,
  //   greeting: (ctx: any) => JSON.stringify(ctx.named('label')),
  //   // greeting: ({ named }: any) => `hello, ${named('name') ? 'あああ' : 'いいい'}!`,
  //   greeting2: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('min')}文字以上のみ入力できます`,
  //   // min: ({ label, min }) => (label ? label + 'は' : '') + `${min}文字以上のみ入力できます`,
  // },

  // yupで利用するバリデーションエラー時のメッセージ
  yup: {
    mixed: {
      default: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + '正しい値を入力してください',
      required: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + '値を入力してください',
      oneOf: ({ named }: any) =>
        (named('label') ? named('label') + 'には' : '') + `${named('values')}のいずれかを入力してください`,
      notOneOf: ({ named }: any) =>
        (named('label') ? named('label') + 'には' : '') + `${named('values')}以外のものを入力してください`,
      defined: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + '値を入力してください',
      // notType: ({ named }: any) => (named('label') ? named('label') + 'に' : '') + '異常な値が入力されています',
      notType: ({ named }: any) => (named('label') ? named('label') + 'に' : '') + '異常な値が入力されています',
    },
    string: {
      length: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('length')}文字で入力してください`,
      min: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('min')}文字以上入力してください`,
      max: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('max')}文字以下にしてください`,
      matches: ({ named }: any) =>
        (named('label') ? named('label') + 'は' : '') + `以下の形式で入力してください: ${named('regex')}`,
      email: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + '正しいメールアドレスを入力してください',
      url: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + '正しいURLを入力してください',
      uuid: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + '正しいUUIDを入力してください',
      trim: ({ named }: any) => (named('label') ? named('label') + 'の' : '') + '前後の空白を取り除いてください',
      lowercase: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + '小文字のみ入力してください',
      uppercase: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + '大文字のみ入力してください',
      // NOTE: 以下、stringに追加したカスタムメソッド用
      zenKataKana: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + '全角カタカナで入力してください',
      hanKataKana: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + '半角カタカナで入力してください',
      zenHiraKana: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + '全角ひらがなで入力してください',
      phone: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + 'XXX-XXX-XXXの形式で入力してください',
    },
    number: {
      min: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('min')}以上にしてください`,
      max: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('max')}以下にしてください`,
      lessThan: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('less')}未満にしてください`,
      moreThan: ({ named }: any) =>
        (named('label') ? named('label') + 'は' : '') + `${named('more')}より大きい数にしてください`,
      positive: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + '正の数にしてください',
      negative: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + '負の数にしてください',
      integer: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + '整数を入力してください',
      // NOTE: 以下、numberに追加したカスタムメソッド用
      between: ({ named }: any) =>
        (named('label') ? named('label') + 'は' : '') + `${named('a')}から${named('b')}の間で入力してください`,
    },
    date: {
      min: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + `${named('min')}以降の日付を入力してください`,
      max: ({ named }: any) => (named('label') ? named('label') + 'には' : '') + `${named('max')}以前の日付を入力してください`,
    },
    object: {
      noUnknown: ({ named }: any) =>
        (named('label') ? named('label') + 'には' : '') +
        '登録されていないキーは入力できません' +
        (named('unknown') ? ': ' + named('unknown') : ''),
    },
    array: {
      min: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('min')}つ以上入力してください`,
      max: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('max')}つ以下にしてください`,
      length: ({ named }: any) => (named('label') ? named('label') + 'は' : '') + `${named('length')}つにしてください`,
    },

    // NOTE: ここから、独自作成の関連バリデーション用
    relevance: {
      email_confirm: ({ named }: any) => (named('label') ? named('label') + 'と' : '') + `${named('email')}が一致しません`,
    },
  },
};
