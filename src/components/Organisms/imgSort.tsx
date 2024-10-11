
import { useAppSelector } from "../../../store/store";
import Preview from "../atoms/preview";
import { Photo } from "../../../types/photo";

const ImgSort = () => {
  const { photo } = useAppSelector((state) => state.photo);
  return (
    <>
      {photo &&
        [...photo] // 配列のコピーを作成
          .sort((a, b) => a.index - b.index) // index順にソート
          .map((photo: Photo) => (
            <>
              <Preview url={photo.url} />
              
            </>
          ))}
    </>
  );
};
export default ImgSort;
