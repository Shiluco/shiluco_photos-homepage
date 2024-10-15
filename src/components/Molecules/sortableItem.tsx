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
    opacity: isDragging ? 0.5 : 1, // Lower opacity while dragging
    zIndex: isDragging ? 999 : "auto", // Bring to front while dragging
  };

  return (
    <Box ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Preview url={photo.url} />
    </Box>
  );
};

export default SortableItem;
