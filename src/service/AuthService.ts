import { supabase } from './supabaseClient';

//サインアップ処理
export const signUp = async (
  email: string,
  password: string,
  name: string,
  role: string = "user"
) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
        role: role,
      },
    },
  });
  if (error) {
    throw error;
  }
  return data;
};

//ログイン処理
export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw error;
  }
  return data;
};

//ログアウト処理
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
};


//登録情報変更処理
export const updateUser = async (
  email: string,
  password: string,
  name: string,
  role: string = "user"
) => {
  const { data, error } = await supabase.auth.updateUser({
    email: email,
    password: password,
    data: {
      name: name,
      role: role,
    },
  });
  if (error) {
    throw error;
  }
  return data;
};

//パスワードリセット処理
export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: 'https://example.com/account/update-password',
});
  if (error) {
    throw error;
  }
};