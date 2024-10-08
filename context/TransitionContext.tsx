
import React, { createContext, useState, useContext } from "react";

interface PageContextType
{
  firstLoad: boolean;
  setFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
  isPageIn: boolean;
  setIsPageIn: React.Dispatch<React.SetStateAction<boolean>>;
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
  firstLoad: true,
  setFirstLoad: () => {},
  isPageIn: false,
  setIsPageIn: () => {},
  isPageOut: false,
  setIsPageOut: () => {},
  newPath: "",
  setNewPath: () => {},
});

// プロバイダーコンポーネントの作成
export const PageProvider = (props: PageContextProps) =>
{
  const { children } = props;
  const [firstLoad, setFirstLoad] = useState(true);
  const [isPageIn, setIsPageIn] = useState(false);
  const [isPageOut, setIsPageOut] = useState(false);
  const [newPath, setNewPath] = useState("");


  return (
    <PageContext.Provider
      value={{
        firstLoad,
        setFirstLoad,
        isPageIn,
        setIsPageIn,
        isPageOut,
        setIsPageOut,
        newPath,
        setNewPath,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

// カスタムフックでコンテキストを利用しやすくする
export const useTransition = () => useContext(PageContext);
