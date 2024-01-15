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

  //- div {{ meta }}
  //- div {{ metaDateEnrollment }}
</template>

<script setup>
import { useForm, useField, defineRule } from 'vee-validate';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

const i18n = useI18n();
const { defineField, errors, handleSubmit, meta } = useForm({
  validationSchema: toTypedSchema(
    z
      .object({
        // name: z.string('文字列').min(1, '必須です'),
        // name: z.string().min(1, '必須です').email({ message: 'Must be a valid email' }),
        // name: z.string().min(1, '１文字椅子お').email({ message: 'Must be a valid email' }),
        name: z.string().min(1),
        // age: z.coerce
        //   .number({
        //     invalid_type_error: '型違う',
        //     required_error: '必須やで',
        //   })
        //   .positive('0より大きく無いと無理')
        //   .int('整数しか無理'),
        age: z.coerce
          .number()
          .int({ message: i18n.t('validation.age') })
          .positive()
          .min(5, { message: i18n.t('yup.number.min', { label: i18n.t('label.item.age'), min: 5 }) })
          .max(8, { message: i18n.t('yup.number.max', { label: i18n.t('label.item.age'), max: 8 }) })
          .optional()
          .nullable(),
        phone: z.coerce //
          .number()
          .int()
          .positive()
          .optional(),
        // .refine(({ phone }, ctx) => {
        //   if (phone < 5) {
        //     ctx.addIssue({
        //       path: ['phone'],
        //       code: 'custom',
        //       message: '5以下ダメ',
        //     });
        //   }
        // })
        // .refine(({ phone }, ctx) => {
        //   if (val > 8) {
        //     ctx.addIssue({
        //       path: ['phone'],
        //       code: 'custom',
        //       message: '8以上ダメ',
        //     });
        //   }
        // }),
        birth: z.union([
          // a
          z.optional(),
          z.coerce.number().int().positive().min(5),
        ]),
        email: z.string().min(1, '必須です'),
        email_confirm: z.string().min(1, '必須です'),
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
      .refine(({ password1, password2 }, ctx) => {
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
