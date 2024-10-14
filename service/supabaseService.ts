import { Photo } from "../types/photo";
import { Profile } from "../types/profile";
import { supabase } from "./supabaseClient";

// テーブルのデータを取得する関数
export const fetchTable = async (from: string) => {
  if (!supabase) {
    throw new Error("Supabase client is not defined.");
  }
  if (!from || from === "") {
    throw new Error("Table name is not defined.");
  }

  const { data, error } = await supabase.from(from).select("*"); // すべてのカラムを選択

  if (error) {
    console.error("Error fetching photos:", error);
    return [];
  }

  return data; // 取得したデータを返す
};

export const updateTable = async (
  from: string,
  id: number,
  data: Profile | Photo
) => {
  if (!supabase) {
    throw new Error("Supabase client is not defined.");
  }
  if (!from || from === "") {
    throw new Error("Table name is not defined.");
  }

  const { error } = await supabase.from(from).update(data).eq("id", id); // idが一致する行を更新

  if (error) {
    console.error("Error updating photos:", error);
    return false;
  }

  return true; // 更新が成功した場合はtrueを返す
};

export const fetchPhotoURL = async (bucket: string, path: string) => {
  if (!supabase) {
    throw new Error("Supabase client is not defined.");
  }
  if (!path || path === "") {
    throw new Error("Table name is not defined.");
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);

  // console.log("Public URL:", data.publicUrl);

  return data; // 取得したデータを返す
};

export const uploadPhoto = async (bucket: string,filePath:string, file: File) => {
  if (!supabase) {
    throw new Error("Supabase client is not defined.");
  }
  if (!file) {
    throw new Error("File is not defined.");
  }
  console.log(bucket);
  console.log("filePath:"+filePath);
  console.log("Uploading photo:", file);


  const { data, error } = await supabase.storage.from(bucket).upload(filePath, file);

  if (error) {
    console.error("Error uploading photo:", error);
    return null;
  }

  return data; // アップロードしたデータを返す
};
