<template lang="pug">
form(@submit.prevent="validate")
  div.field
    label(for="name") {{ $t('validation.name') }}
    input(v-model="name" type="text" name="name")
    span.error(v-if="errors.name") {{ errors.name }}

  div.field
    label(for="age")  {{ $t('validation.age') }}
    input(v-model="age" type="text" name="age")
    span.error(v-if="errors.age") {{ errors.age }}

  div.field
    label(for="password1")  {{ $t('validation.password1') }}
    input(v-model="password1" type="text" name="password1")
    span.error(v-if="errors.password1") {{ errors.password1 }}
  
  div.field
    label(for="password2")  {{ $t('validation.password2') }}
    input(v-model="password2" type="text" name="password2")
    span.error(v-if="errors.password2") {{ errors.password2 }}

  //- div.field
  //-   label(for="dateEnrollment") {{ $t('validation.date_enrollment') }}
  //-   input(v-model="dateEnrollment" type="text" name="dateEnrollment")
  //-   span.error(v-if="errors.dateEnrollment") {{ errors.dateEnrollment }}

  //- div.field
  //-   label(for="graduationDate") {{ $t('validation.date_graduation') }}
  //-   input(v-model="dateGraduation" type="text" name="graduationDate")
  //-   span.error(v-if="errors.dateGraduation") {{ errors.dateGraduation }}

  button(type="submit") {{ $t('validation.submit') }}

  //- div {{ meta }}
  div {{ metaDateEnrollment }}
</template>

<script setup>
import { useForm, useField, defineRule } from 'vee-validate';
import * as yup from 'yup';

import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

const i18n = useI18n();

// const { defineField, errors, handleSubmit, meta } = useForm({
//   validationSchema: yup.object({
//     name: yup
//       .string() // hack: pretter
//       .label(i18n.t('validation.name'))
//       .required(),
//     age: yup
//       .number()
//       .label(i18n.t('validation.age'))
//       // .typeError(`${i18n.t('validation.age')}には半角数字を入力してください`)
//       .integer()
//       .min(0)
//       .nullable()
//       .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value)),
//     dateEnrollment: yup
//       .date() // hack: pretter
//       .label(i18n.t('validation.date_enrollment'))
//       .min(new Date())
//       .required(),
//     dateGraduation: yup
//       .date()
//       .label(i18n.t('validation.date_graduation'))
//       .required()
//       .test(
//         '入学日と卒業日の前後テスト', // hack: prettier
//         i18n.t('message.error.from_to', {
//           from: i18n.t('validation.date_enrollment'),
//           to: i18n.t('validation.date_graduation'),
//         }),
//         (dateGraduation, context) => {
//           console.warn('🦋🦋🦋🦋🦋🦋🦋🦋');
//           console.warn(context);
//           const { name, age } = context.parent;
//           console.warn(name);
//           console.warn(age);
//           if (dateGraduation === undefined || context.parent.dateEnrollment === undefined) {
//             return false;
//           }
//           return dateGraduation > context.parent.dateEnrollment;
//         }
//       ),
//   }),
// });

const { defineField, errors, handleSubmit, meta } = useForm({
  validationSchema: toTypedSchema(
    z
      .object({
        name: z.string().min(1, '必須です').email({ message: 'Must be a valid email' }),
        age: z.coerce
          .number({
            invalid_type_error: '型違う',
            required_error: '必須やで',
          })
          .nonnegative('マイナスの値は無理')
          .int('整数しか無理')
          .optional(),
        password1: z.string().min(1, '必須です'),
        password2: z.string().min(1, '必須です'),
        // dateEnrollment: z
        //   // .preprocess((val) => {
        //   //   if (typeof val === 'string') {
        //   //     const trimmedVal = val.trim();
        //   //     console.warn('🌸🌸🌸🌸🌸🌸🌸🌸');
        //   //     console.warn(val);
        //   //     // return trimmedVal.length > 0 ? trimmedVal : null;
        //   //     return new Date();
        //   //   }
        //   // })
        //   .date(), // hack: pretter
        // .min(new Date()),
        // emailConfirm: z
        //   .string({
        //     required_error: errorMessage.email_empty,
        //   })
        //   .nonempty(errorMessage.email_empty)
        //   .email(errorMessage.email_check),

        // 注：この下にも他のValidation項目が続きます。
      })
      .superRefine(({ password1, password2 }, ctx) => {
        // 問題のメールの再確認
        if (password1 !== password2) {
          ctx.addIssue({
            path: ['password2'],
            code: 'custom',
            message: 'パスワード一致せんで!!',
          });
        }
      })
  ),
});

const { value: name, meta: metaName } = useField('name');
const { value: age, meta: metaAge } = useField('age');
const { value: password1, meta: metaPassword1 } = useField('password1');
const { value: password2, meta: metaPassword2 } = useField('password2');
// const { value: dateEnrollment, meta: metaDateEnrollment } = useField('dateEnrollment');
// const { value: dateGraduation, meta: metaDateGraduation } = useField('dateGraduation');

// import { ref } from 'vue';
// import { useForm, useField, defineRule } from 'vee-validate';
// // import { required, integer } from '@vee-validate/rules';

// const positive = (value) => {
//   if (!value || value > 0) {
//     return '正の整数でなければいけません';
//   }

//   return true;
// };

// // defineRule('required', required);
// // defineRule('integer', integer);
// // defineRule('positive', positive);

// defineRule('adult', (value) => {
//   if (!value || value < 18) {
//     return '年齢は18歳以上でなければなりません。';
//   }

//   return true;
// });

// const { handleSubmit, errors } = useForm();
// const { value: name } = useField('name', 'required');
// const { value: age } = useField('age', { integer: true, positive: true });
// const { value: enrollmentDate } = useField('enrollmentDate');
// const { value: graduationDate } = useField('graduationDate');

// const form = ref({
//   name,
//   age,
//   enrollmentDate,
//   graduationDate,
// });

// const validateField = (field) => {
//   // Field specific validation can be added here
// };

// const validate = handleSubmit((values) => {
//   console.log(values);
// });
</script>

<style scoped>
.field {
  margin-bottom: 10px;
}

.error {
  color: red;
}
</style>
