import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";
import { useRef } from "react";
import gsap from "gsap";
import PhotoDataEditor from "../Organisms/photoDataEditor";

type AddPhotoButtonProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

const AddPhotoButton = (props: AddPhotoButtonProps) => {
  const { isModalOpen, setIsModalOpen } = props;
  const modal = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      modal.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: "power2.out" }
    );
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null; // モーダルが閉じている場合は何も表示しない
  }

  return (
    <>
      <Box ref={modal}>
        <Box
          sx={{
            position: "fixed", // 画面に固定
            top: "50%", // 画面中央
            left: "50%", // 画面中央
            transform: "translate(-50%, -50%)", // 中央にするための調整
            zIndex: 1000, // 前面に表示
            backgroundColor: "white", // ポップアップの背景色
            borderRadius: "16px", // 角を丸める
            padding: "20px", // パディングを追加
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // シャドウを追加して浮き上がらせる
          }}
        >
          <PhotoDataEditor />
        </Box>
        <Box
          sx={{
            position: "fixed",
            top: "0%", // 画面中央
            left: "0%", // 画面中央
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 背景のオーバーレイ
            zIndex: 999, // オーバーレイがポップアップの下に来るように設定
          }}
          onClick={() => setIsModalOpen(false)} // 背景クリックで閉じる
        />
      </Box>
    </>
  );
};
export default AddPhotoButton;
