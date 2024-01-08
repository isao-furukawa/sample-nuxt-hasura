<template lang="pug">
form(@submit.prevent="validate")
  div.field
    label(for="name") {{ $t('label.item.name') }}
    input(v-model="name" type="text" name="name")
    span.error(v-if="errors.name") {{ errors.name }}

  div.field
    label(for="age")  {{ $t('label.item.age') }}
    input(v-model="age" type="text" name="age")
    span.error(v-if="errors.age") {{ errors.age }}

  div.field
    label(for="phone") {{ $t('label.item.phone') }}
    input(v-model="phone" type="text" name="phone")
    span.error(v-if="errors.phone") {{ errors.phone }}

  div.field
    label(for="birth") {{ $t('label.item.birth') }}
    input(v-model="birth" type="text" name="birth")
    span.error(v-if="errors.birth") {{ errors.birth }}

  div.field
    label(for="email")  {{ $t('label.item.email') }}
    input(v-model="email" type="text" name="email")
    span.error(v-if="errors.email") {{ errors.email }}
  
  div.field
    label(for="email_confirm")  {{ $t('label.item.email_confirm') }}
    input(v-model="email_confirm" type="text" name="email_confirm")
    span.error(v-if="errors.email_confirm") {{ errors.email_confirm }}

  button(type="submit") {{ $t('label.action.submit') }}

  div(style="border: solid 2px red; margin: 50px 0 50px 0") {{ meta }}
  div(style="border: solid 2px blue; margin: 50px 0 50px 0")  {{ metaBirth }}
</template>

<script setup>
import { useForm, useField, defineRule } from 'vee-validate';
import * as yup from 'yup';
const i18n = useI18n();
const { defineField, errors, handleSubmit, meta } = useForm({
  validationSchema: yup.object({
    name: yup
      .string() // hack: pretter
      .label(i18n.t('label.item.name'))
      .required()
      .nullable(),
    age: yup
      .number()
      .label(i18n.t('label.item.age'))
      // .typeError(`${i18n.t('validation.age')}には半角数字を入力してください`)
      .integer()
      .positive()
      .between(5, 8)
      .nullable()
      .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value)),
    phone: yup
      .string() // hack: pretter
      .label(i18n.t('label.item.phone'))
      .nullable()
      .phone()
      .nullable()
      .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value)),
    birth: yup
      .date()
      .label(i18n.t('label.item.birth'))
      .min(new Date('2024-01-05'))
      .nullable()
      .transform((value, originalValue) => (String(originalValue).trim() === '' ? null : value)),
    email: yup // hack: prettier
      .string()
      .label(i18n.t('label.item.email'))
      .email()
      .required(),
    email_confirm: yup
      .string()
      .label(i18n.t('label.item.email_confirm'))
      .email()
      .required()
      .test(
        'メールアドレスとメールアドレス(確認)の一致', // hack: prettier
        i18n.t('yup.relevance.email_confirm', {
          // label: i18n.t('label.item.email_confirm'),
          email: i18n.t('label.item.email'),
        }),
        (val, context) => {
          console.warn('🦋🦋🦋🦋🦋🦋🦋🦋');
          console.warn(context);

          // 対象の入力値は第一引数の「val」に入ってくるが、第二引数のコンテキストから取り出すことも出来る
          // (※valとemail_confirmは同じものという意味)
          const { email, email_confirm } = context.parent;
          console.warn('email', email);
          console.warn('email_confirm', email_confirm);
          console.warn('val', val);

          // メールアドレスとメールアドレス(確認)の一致を確認
          return val === email;
        }
      ),
  }),
});

const { value: name, meta: metaName } = useField('name');
const { value: age, meta: metaAge } = useField('age');
const { value: phone, meta: metaPhone } = useField('phone');
const { value: birth, meta: metaBirth } = useField('birth');
const { value: email, meta: metaEmail } = useField('email');
const { value: email_confirm, meta: metaConfirm } = useField('email_confirm');
</script>

<style scoped>
.field {
  margin-bottom: 10px;
}

.error {
  color: red;
}
</style>
