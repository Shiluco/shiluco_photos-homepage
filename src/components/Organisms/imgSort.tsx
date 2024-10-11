import { useAppSelector } from "../../../store/store";
import SortableItem from "../atoms/sortableItem"; // 新しいファイルからインポート
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { useState } from "react";


const ImgSort = () => {
  const { photo } = useAppSelector((state) => state.photo);
  const [photos, setPhotos] = useState(
    photo ? [...photo].sort((a, b) => a.index - b.index) : []
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      const oldIndex = photos.findIndex((p) => p.id === active.id);
      const newIndex = photos.findIndex((p) => p.id === over.id);

      setPhotos((photos) => arrayMove(photos, oldIndex, newIndex));
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
