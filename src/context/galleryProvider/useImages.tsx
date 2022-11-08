import { useContext } from "react";
import { GalleryContext } from ".";

export const useImages = () => {
  const context = useContext(GalleryContext);
  return context;
};
