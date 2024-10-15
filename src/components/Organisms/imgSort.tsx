import { useAppDispatch, useAppSelector } from "../../../store/store";
import SortableItem from "../atoms/sortableItem"; // 新しいファイルからインポート
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { useState } from "react";
import { updatePhoto } from "../../../store/photoSlice";

const ImgSort = () => {
  const dispatch = useAppDispatch();
  const { photo } = useAppSelector((state) => state.photo);
  const [photos, setPhotos] = useState(
    photo ? [...photo].sort((a, b) => a.index - b.index) : []
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active && over && Number(active.id) - 1 !== Number(over.id) - 1) {
      const oldIndex = photos.findIndex((p) => p.id === active.id);
      const newIndex = photos.findIndex((p) => p.id === over.id);
      const newPhotos = arrayMove(photos, oldIndex, newIndex);

      // 並び替えた後、id を順番に更新
      const updatedPhotos = newPhotos.map((photo, index) => ({
        ...photo,
        index: index + 1,
      }));

      setPhotos(updatedPhotos);
      console.log(updatedPhotos);
      dispatch(updatePhoto(updatedPhotos[oldIndex])); // 古い位置の要素
      dispatch(updatePhoto(updatedPhotos[newIndex])); // 新しい位置の要素
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={photos.map((p) => p.id)}>
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="flex-start">
          {photos.map((photo) => (
            <SortableItem key={photo.id} photo={photo} />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
};

export default ImgSort;
