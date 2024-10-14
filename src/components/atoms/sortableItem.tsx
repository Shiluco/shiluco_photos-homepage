import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box } from "@mui/material";
import Preview from "../atoms/preview";
import { Photo } from "../../../types/photo";

const SortableItem = ({ photo }: { photo: Photo }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useSortable({ id: photo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1, // ドラッグ中の透明度を下げる
    zIndex: isDragging ? 999 : "auto", // ドラッグ中に前面に来るように
  };
  

  return (
    <Box ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Preview url={photo.url} />
    </Box>
  );
};

export default SortableItem;
