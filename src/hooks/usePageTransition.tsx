import { useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const usePageTransition = () => {
  const pageRef = useRef(null); // ページ全体のリファレンス
  const navigate = useNavigate(); // ページ遷移用のフック

  // ページを遷移する関数
  const handleNext = (nextPagePath: string) => {
    navigate(nextPagePath);
    gsap.fromTo(
      pageRef.current,
      { opacity: "0%" },
      { opacity: "100%", duration: 1}
    );
  };

  return { pageRef, handleNext };
};

export default usePageTransition;

// const handleNext = (nextPagePath: string) => {
//   gsap.fromTo(
//     pageRef.current,
//     { opacity: "100%" },
//     {
//       opacity: "0%",
//       duration: 2,
//       onComplete: () => {
//         navigate(nextPagePath);
//         gsap.fromTo(
//           pageRef.current,
//           { opacity: "0%" },
//           { opacity: "100%", duration: 1 }
//         );
//       },
//     }
//   );
// };
