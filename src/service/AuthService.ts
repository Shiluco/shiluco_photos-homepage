import { supabase } from './supabaseClient';

type getPhotoFromStorageType = {
  bucketName: string;
  photoPath: string;
}


export const getPhotoFromStorage = async (props: getPhotoFromStorageType) =>
{
  const { bucketName, photoPath } = props;
  const { data, error } = await supabase.storage
    .from(bucketName)
    .download(photoPath); // バケット名とパスを指定

  if (error) {
    console.error("写真の取得に失敗しました:", error);
    return null;
  }

  // Blob URLに変換して画像を表示できるようにする
  const url = URL.createObjectURL(data);
  return url;
};