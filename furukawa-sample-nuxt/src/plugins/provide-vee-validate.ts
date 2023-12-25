import { defineNuxtPlugin } from '#app';
// import _ from 'lodash';
// import * as yup from 'yup';
// import { useField, useForm, defineRule } from 'vee-validate';
// import { required } from '@vee-validate/rules';
// import { setLocale, type LocaleObject } from 'yup';

/* 他のカスタムルールの部分は省略 */
// import { suggestive } from 'yup-locale-ja';
// import { jaLocaleObject } from '~/locales/yup-i18n/ja';
// import ja from '@vee-validate/i18n/dist/locale/ja.json';

// declare const requiredValidator: (value: unknown) => boolean;

// defineRule('required', requiredValidator);
// defineRule('required', (value) => yup.string().required(value));

// 日付の形式をチェックする
// yup.addMethod(yup.string, 'datetime', function append(label: string) {
//   return this.test({
//     name: 'datetime',
//     message: ({label}) => {
//       return `${label}はYYYY/MM/DD HH:MM:SS形式で入力してください。`;
//     },
//     test: value => {
//       return value.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/);
//     },
//   });
// });
// yup.addMethod(yup.string, 'append', function append(appendStr: string) {
//   return this.transform((value) => `${value}${appendStr}`);
// });

// const customLocaleObject: LocaleObject = {
//   mixed: {
//     // required: ({ label }) => (label ? label + 'を' : '') + '入力してくだしあ',
//     // @ts-ignore
//     // notType: 'ういあ',
//     notType: (params: MessageParams) => {
//       switch (params.type) {
//         case 'number':
//           return '数値を入力してください';
//         case 'date':
//           return '日付を入力してください';
//         default:
//           return '正しい形式を入力してください。';
//       }
//     },
//   },
// };

// const localeObject = _.merge({}, suggestive, customLocaleObject);
// console.log('suggestive', suggestive);
// console.log('localeObject', localeObject);
// // import { jaLocaleObject } from '~/locales/yup-i18n/ja';

// setLocale(jaLocaleObject);
// setLocale(localeObject);

export default defineNuxtPlugin((nuxtApp) => {
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
