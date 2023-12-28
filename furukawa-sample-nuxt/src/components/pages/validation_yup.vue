<template lang="pug">
div {{ $t('hoge.linked') }}
div {{ $t('hoge.linked2') }}
div {{ $t('hoge.greeting', { label: 'DIO' }) }}
div {{ $t('hoge.greeting2', { label: 'DIO', min: 9 }) }}
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
    label(for="phone") {{ $t('validation.phone') }}
    input(v-model="phone" type="text" name="phone")
    span.error(v-if="errors.phone") {{ errors.phone }}

  div.field
    label(for="birth") {{ $t('validation.birth') }}
    input(v-model="birth" type="text" name="birth")
    span.error(v-if="errors.birth") {{ errors.birth }}

  div.field
    label(for="password1")  {{ $t('validation.password1') }}
    input(v-model="password1" type="text" name="password1")
    span.error(v-if="errors.password1") {{ errors.password1 }}
  
  div.field
    label(for="password2")  {{ $t('validation.password2') }}
    input(v-model="password2" type="text" name="password2")
    span.error(v-if="errors.password2") {{ errors.password2 }}

  div.field
    label(for="dateEnrollment") {{ $t('validation.date_enrollment') }}
    input(v-model="dateEnrollment" type="text" name="dateEnrollment")
    span.error(v-if="errors.dateEnrollment") {{ errors.dateEnrollment }}

  div.field
    label(for="dateGraduation") {{ $t('validation.date_graduation') }}
    input(v-model="dateGraduation" type="text" name="dateGraduation")
    span.error(v-if="errors.dateGraduation") {{ errors.dateGraduation }}

  button(type="submit") {{ $t('validation.submit') }}

  div {{ metaBirth }}
</template>

<script setup>
import { useForm, useField, defineRule } from 'vee-validate';
import * as yup from 'yup';
const i18n = useI18n();
const { defineField, errors, handleSubmit, meta } = useForm({
  validationSchema: yup.object({
    name: yup
      .string() // hack: pretter
      .label(i18n.t('validation.name'))
      .nullable()
      .phone()
      .nullable()
      .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value)),
    age: yup
      .number()
      .label(i18n.t('validation.age'))
      // .typeError(`${i18n.t('validation.age')}には半角数字を入力してください`)
      .integer()
      .between(5, 8)
      //.between(5, 10, 'めっせだが')
      .nullable()
      .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value)),
    phone: yup
      .string() // hack: pretter
      .label(i18n.t('validation.phone'))
      .nullable()
      .phone()
      .nullable()
      .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value)),

    birth: yup
      .date()
      .label(i18n.t('validation.birth'))
      .nullable()
      .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value)),

    password1: yup.string(),
    password2: yup.string().oneOf([yup.ref('password1')], 'パスワードが一致しません'),
    dateEnrollment: yup
      .date() // hack: pretter
      .label(i18n.t('validation.date_enrollment'))
      .min(new Date())
      .required(),
    dateGraduation: yup
      .date()
      .label(i18n.t('validation.date_graduation'))
      .required()
      .test(
        '入学日と卒業日の前後テスト', // hack: prettier
        i18n.t('message.error.from_to', {
          from: i18n.t('validation.date_enrollment'),
          to: i18n.t('validation.date_graduation'),
        }),
        (dateGraduation, context) => {
          console.warn('🦋🦋🦋🦋🦋🦋🦋🦋');
          console.warn(context);
          const { name, age } = context.parent;
          console.warn(name);
          console.warn(age);
          if (dateGraduation === undefined || context.parent.dateEnrollment === undefined) {
            return false;
          }
          return dateGraduation > context.parent.dateEnrollment;
        }
      ),
  }),
});

const { value: name, meta: metaName } = useField('name');
const { value: age, meta: metaAge } = useField('age');
const { value: phone, meta: metaPhone } = useField('phone');
const { value: birth, meta: metaBirth } = useField('birth');
const { value: password1, meta: metaPassword1 } = useField('password1');
const { value: password2, meta: metaPassword2 } = useField('password2');
const { value: dateEnrollment, meta: metaDateEnrollment } = useField('dateEnrollment');
const { value: dateGraduation, meta: metaDateGraduation } = useField('dateGraduation');

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
