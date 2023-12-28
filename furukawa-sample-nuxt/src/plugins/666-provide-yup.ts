import type { between } from '@vee-validate/rules';
import * as yup from 'yup';

export default defineNuxtPlugin((nuxtApp) => {
  console.warn('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
  const i18n: any = nuxtApp.$i18n;
  console.warn('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');

  // NOTE: Yup標準の判定メソッドのエラーメッセージを「nuxt-i18n(※実態はvue-i18n)」を利用して多言語化
  yup.setLocale({
    mixed: {
      default: ({ label }) => i18n.t('yup.mixed.default', { label }),
      required: ({ label }) => i18n.t('yup.mixed.required', { label }),
      oneOf: ({ label, values }) => i18n.t('yup.mixed.oneOf', { label, values }),
      notOneOf: ({ label, values }) => i18n.t('yup.mixed.notOneOf', { label, values }),
      defined: ({ label }) => i18n.t('yup.mixed.defined', { label }),
      // notType: ({ label }) => i18n.t('yup.mixed.notType', { label }),
      notType: (context: any) => {
        console.warn('🍙🍙🍙🍙🍙🍙🍙🍙');
        console.warn(context);
        console.warn('▲▲▲🍙🍙🍙🍙🍙🍙🍙🍙' + context.label);
        // switch (context.type) {
        //   case 'number':
        //     break;
        //   case 'date':
        //     break;
        // }
        // if (prm.type === 'number') {
        //   return `${labelText(prm)}数値を入力してください。`;
        // }
        // if (prm.type === 'date') {
        //   return `${labelText(prm)}日付を入力してください。`;
        // }
        // return i18n.t('yup.mixed.notType', { label }),;
        return 'いじじじじじじじｊ';
      },
    },
    string: {
      length: ({ label, length }) => i18n.t('yup.string.length', { label, length }),
      min: ({ label, min }) => i18n.t('yup.string.min', { label, min }),
      max: ({ label, max }) => i18n.t('yup.string.max', { label, max }),
      matches: ({ label, regex }) => i18n.t('yup.string.matches', { label, regex }),
      email: ({ label }) => i18n.t('yup.string.email', { label }),
      url: ({ label }) => i18n.t('yup.string.url', { label }),
      uuid: ({ label }) => i18n.t('yup.string.uuid', { label }),
      trim: ({ label }) => i18n.t('yup.string.trim', { label }),
      lowercase: ({ label }) => i18n.t('yup.string.lowercase', { label }),
      uppercase: ({ label }) => i18n.t('yup.string.uppercase', { label }),
    },
    number: {
      min: ({ label, min }) => i18n.t('yup.number.min', { label, min }),
      max: ({ label, max }) => i18n.t('yup.number.max', { label, max }),
      lessThan: ({ label, less }) => i18n.t('yup.number.lessThan', { label, less }),
      moreThan: ({ label, more }) => i18n.t('yup.number.moreThan', { label, more }),
      positive: ({ label }) => i18n.t('yup.number.positive', { label }),
      negative: ({ label }) => i18n.t('yup.number.negative', { label }),
      integer: ({ label }) => i18n.t('yup.number.integer', { label }),
    },
    date: {
      min: ({ label, min }) => i18n.t('yup.date.min', { label, min }),
      max: ({ label, max }) => i18n.t('yup.date.max', { label, max }),
    },
    object: {
      noUnknown: ({ label, unknown }) => i18n.t('yup.object.noUnknown', { label, unknown }),
    },
    array: {
      min: ({ label, min }) => i18n.t('yup.array.min', { label, min }),
      max: ({ label, max }) => i18n.t('yup.array.max', { label, max }),
      length: ({ label, length }) => i18n.t('yup.array.length', { label, length }),
    },
  });

  // NOTE: ▼▼▼ ここから、Yupに独自判定メソッド追加 ▼▼▼
  /**
   * 全角カタカナ
   * (※但し、半角全角スペースは許可する)
   */
  //   yup.addMethod(yup.string, 'zenKataKana', function (message, max) {
  //     return this.test(
  //       'zenKataKana',
  //       (context) => {
  //         console.warn(context);

  //         return 'めっせ';
  //       },
  //       function (value = '') {
  //         const { path, createError } = this;

  //         console.warn('🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷');
  //         console.warn(context);
  //         // console.warn(JSON.stringify(this.schema.spec.label));

  //         return /^[ァ-ヶー\u{20}\u{3000}]+$/u.test(value) || createError({ path, message: context });
  //       }
  //     );
  //   });

  yup.addMethod(yup.string, 'zenKataKana', function (context: any) {
    return this.test(
      'zenKataKana',
      (context) => {
        console.warn(context);

        return 'めっせ';
      },
      function (value = '') {
        const { path, createError } = this;

        console.warn('🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷');
        console.warn(context);
        // console.warn(JSON.stringify(this.schema.spec.label));

        return /^[ァ-ヶー\u{20}\u{3000}]+$/u.test(value) || createError({ path, message: context });
      }
    );
  });

  /**
   * 半角カタカナ
   * (※但し、半角スペースと「-(ハイフン)」は許可する)
   */
  yup.addMethod(yup.string, 'hanKataKana', function (errorMessage: string) {
    return this.test('hanKataKana', errorMessage, function (value = '') {
      const { path, createError } = this;
      return /^[ｦ-ﾟ- ]+$/u.test(value) || createError({ path, message: errorMessage });
    });
  });

  /**
   * 全角ひらがな
   * (※但し、半角全角スペースは許可する)
   */
  yup.addMethod(yup.string, 'zenHiraKana', function (errorMessage: string) {
    return this.test('zenHiraKana', errorMessage, function (value = '') {
      const { path, createError } = this;

      // console.warn('🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷');
      // console.warn(JSON.stringify(this.schema.spec.label));

      return /^[ぁ-ゖー\u{20}\u{3000}]+$/u.test(value) || createError({ path, message: errorMessage });
    });
  });

  /**
   * 電話番号
   * （※「010-1-212-000-0000」のような国際番号もOK)
   */
  //   yup.addMethod(yup.string, 'phone', function (errorMessage: string) {
  //     return this.test('phone', errorMessage, function (value = '') {
  //       const { path, createError } = this;

  //       // console.warn('🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷');
  //       // console.warn(JSON.stringify(this.schema.spec.label));

  //       return /^\+?\d(\d|-|\u{20})*\d$/u.test(value) || createError({ path, message: errorMessage || 'でふぉるとやで！！' });
  //     });
  //   });

  yup.addMethod(yup.string, 'phone', function (message?: string) {
    return this.test({
      message: message,
      name: 'phone',
      exclusive: true,
      skipAbsent: true,
      test(value, ctx) {
        return (
          /^\+?\d(\d|-|\u{20})*\d$/u.test(value || '') ||
          ctx.createError({
            path: ctx.path,
            message: message || i18n.t('yup.string.phone', { label: ctx.schema.spec.label }),
          })
        );
      },
    });
  });

  /**
   * 数値が範囲に収まっているかどうか？
   */
  yup.addMethod(yup.number, 'between', function (a: number, b: number, message?: string) {
    return this.test({
      message: message,
      name: 'between',
      exclusive: true,
      skipAbsent: true,
      params: {
        a,
        b,
      },
      test(value, ctx) {
        return (
          (value !== undefined && value >= a && value <= b) ||
          ctx.createError({
            path: ctx.path,
            message: message || i18n.t('yup.number.between', { label: ctx.schema.spec.label, a: a, b: b }),
          })
        );
      },
    });
  });

  // return this.test({
  //   message,
  //   name: 'min',
  //   exclusive: true,
  //   params: {
  //     min,
  //   },
  //   skipAbsent: true,
  //   test(value) {
  //     return value.length >= this.resolve(min);
  //   },
  // });

  return {
    // provide: {
    //   yup: (schema, initialValues) => {
    //     const { errors: basicInfoErrors, meta: basicInfoMeta } = useForm({
    //       validationSchema: yup.object(schema),
    //       initialValues,
    //     });
    //     const formItems = new Map();
    //     Object.keys(schema).forEach((fieldName) => {
    //       const { value } = useField(fieldName);
    //       formItems.set(fieldName, value);
    //     });
    //     return {
    //       formItems,
    //       basicInfoErrors,
    //       basicInfoMeta,
    //     };
    //   },
    // },
  };
});

declare module 'yup' {
  interface StringSchema {
    zenKataKana(this: StringSchema): StringSchema;
    hanKataKana(this: StringSchema): StringSchema;
    zenHiraKana(this: StringSchema): StringSchema;
    phone(this: StringSchema): StringSchema;
    // usernameMax(this: StringSchema): StringSchema;
    // onlyAlphaNumAndDotUnderbar(this: StringSchema): StringSchema;
    // notLastPeriod(this: StringSchema): StringSchema;
  }
  interface NumberSchema {
    between(this: NumberSchema, a: number, b: number, message?: string): NumberSchema;
  }
}

// /**
//  * URL
//  *
//  * 【ルール】
//  * URLの最低限の形を成しているか(プロトコル://ホスト " . "トップレベルドメイン)
//  * スキームが存在(先頭が文字から始まる。それ以降は文字と数字と"+" / "-" / "."が許可される)
//  * ホストとトップレベルドメインが存在する。
//  * 文字制限(RFC3986ルール)
//  * スラッシュの連続はNG
//  */
// extend('url', {
//   validate(value) {
//     const reg = /^[a-zA-Z]+[a-zA-Z0-9+-.]*:\/\/([-_!~*'()a-zA-Z0-9;?:@&=+$,%#]+[/]?)+\.([-_.!~*'()a-zA-Z0-9;?:@&=+$,%#][/]?)+$/;
//     return reg.test(value);
//   },
// });
