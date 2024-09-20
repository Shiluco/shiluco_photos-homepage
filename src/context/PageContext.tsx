// PageContext.js
import React, { createContext, useState, useContext } from "react";

interface PageContextType {
  isPageOut: boolean;
  setIsPageOut: React.Dispatch<React.SetStateAction<boolean>>;
  
  newPath: string;
  setNewPath: React.Dispatch<React.SetStateAction<string>>;
}
type PageContextProps = {
  children: React.ReactNode;
};
// コンテキストの作成
const PageContext = createContext<PageContextType>({
  isPageOut: false,
  setIsPageOut: () => {},
  newPath: "",
  setNewPath: () => {},
});

// プロバイダーコンポーネントの作成
export const PageProvider = (props: PageContextProps) =>
{
  const { children } = props;
  const [isPageOut, setIsPageOut] = useState(false);
  const [newPath, setNewPath] = useState("");

  return (
    <PageContext.Provider
      value={{ isPageOut, setIsPageOut, newPath, setNewPath }}
    >
      {children}
    </PageContext.Provider>
  );
};

// カスタムフックでコンテキストを利用しやすくする
export const usePage = () => useContext(PageContext);
