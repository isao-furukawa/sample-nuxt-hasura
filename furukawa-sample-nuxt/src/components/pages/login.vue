<template lang="pug">
n-space(vertical)
  n-h1 {{ $t('menu.login') }}
  form(@submit.prevent="validate")
    div.field
      label(for="email") {{ $t('validation.email') }}
      input(v-model="loginFormData.email" type="text" name="email" @blur="valid('email')")
      span.error(v-if="errorInput.email") {{ errorInput.email }}
    div.field
      label(for="password1")  {{ $t('validation.password1') }}
      input(v-model="loginFormData.password1" type="password" name="password1" @blur="valid('password1')")
      span.error(v-if="errorInput.password1") {{ errorInput.password1 }}
    button(type="submit") {{ $t('validation.submit') }}
</template>

<script lang="ts" setup>
import { NH1, NText, NSpace, useMessage } from 'naive-ui';
import { useForm, useField, defineRule } from 'vee-validate';
import * as yup from 'yup';

const router = useRouter();
interface User {
  email: string;
  name: string;
  role: string;
}
const user = ref<User | null>(null);

const loginFormData: Record<string, string> = reactive({
  email: '',
  password1: '',
});

const errorInput: Record<string, string> = reactive({
  email: '',
  password1: '',
});

const i18n = useI18n();
const validationSchema = yup.object({
  email: yup
    .string()
    .label(i18n.t('validation.email'))
    .email()
    .required(),

  password1: yup
    .string()
    .required(),
});

const valid = (field: string) => {
  validationSchema.validateAt(field, loginFormData).then(() => {
    errorInput[field === 'password1' ? 'password' : field] = '';
  }).catch((err: any) => {
    if (err instanceof yup.ValidationError) {
      errorInput[field === 'password1' ? 'password' : field] = err.message;
    }
  });
};
const message = useMessage();
interface LoginResponse {
  accessToken: string;
  user: User;
}
const validate = async () => {
  try {
    // バリデーション処理
    await validationSchema.validate(loginFormData);

    // バックエンドのログインエンドポイントにリクエストを送信
    const response = await $fetch<LoginResponse>('/api/auth/login', {
      method: 'POST',
      body: {
        email: loginFormData.email,
        password: loginFormData.password1,
      },
    });

    // JWTを受け取り、セッションに保存
    const { accessToken, user:userData } = response;
    sessionStorage.setItem('jwt', accessToken);
    sessionStorage.setItem('user', JSON.stringify(userData));
    console.log('user💛:', userData);

    loginFormData.email = '';
    loginFormData.password1 = '';

    router.push('/');

    console.log('ログイン成功。🌟JWTトークン🌟:', accessToken);
  } catch (error) {
    console.error('ログイン失敗またはバリデーションエラー', error);
    message.error('ログインに失敗しました。');
  }
};

const { value: email, meta: metaEmail } = useField('email');
const { value: password1, meta: metaPassword1 } = useField('password1');

</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
}

.field {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: .5rem;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: .5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error {
  color: red;
  margin-top: .25rem;
}

button[type="submit"] {
  padding: .5rem 1rem;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: darkblue;
}

.login-user {
  margin-top: 1rem;
  padding: .5rem;
  color: orange;
  font-size: large;
}
</style>
