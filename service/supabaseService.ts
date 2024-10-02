import { supabase } from "./supabaseClient";

// テーブルのデータを取得する関数
export const fetchTable = async (from: string) =>
{
  if (!supabase) {
    throw new Error("Supabase client is not defined.");
  }
  if (!from || from === "") {
    throw new Error("Table name is not defined.");
  }

  const { data, error } = await supabase
    .from(from) 
    .select("*"); // すべてのカラムを選択
  
  if (error) {
    console.error("Error fetching photos:", error);
    return [];
  }

  return data; // 取得したデータを返す
};

export const fetchPhotoURL = async (bucket:string,path: string) => {
  if (!supabase) {
    throw new Error("Supabase client is not defined.");
  }
  if (!path || path === "") {
    throw new Error("Table name is not defined.");
  }

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);

  console.log("Public URL:", data.publicUrl);

  return data; // 取得したデータを返す
};
