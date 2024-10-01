import { supabase } from "./supabaseClient";

// 全ての写真を取得する関数
export const fetchAllPhotos = async () => {
  const { data, error } = await supabase
    .from("photo") // 'photo' テーブルからデータを取得
    .select("*"); // すべてのカラムを選択

  if (error) {
    console.error("Error fetching photos:", error);
    return [];
  }

  return data; // 取得したデータを返す
};
