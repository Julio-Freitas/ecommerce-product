import { createContext } from "react";
import imageOne from "../../assets/images/image-product-1.jpg";
import imageTwo from "../../assets/images/image-product-2.jpg";
import imageThree from "../../assets/images/image-product-3.jpg";
import imageFour from "../../assets/images/image-product-4.jpg";

import imageOneThumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import imageTwoThumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import imageThreeThumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import imageFourThumbnail from "../../assets/images/image-product-4-thumbnail.jpg";

const thumbnails = [
  { id: 1, src: imageOneThumbnail },
  { id: 2, src: imageTwoThumbnail },
  { id: 3, src: imageThreeThumbnail },
  { id: 4, src: imageFourThumbnail },
];

const emphasis = [
  { id: 1, src: imageOne },
  { id: 2, src: imageTwo },
  { id: 3, src: imageThree },
  { id: 4, src: imageFour },
];

import { IContext, IProvider } from "./types";

export const GalleryContext = createContext<IContext>({} as IContext);

export const GalleryProvider = ({ children }: IProvider) => {
  return (
    <GalleryContext.Provider value={{ thumbnails, emphasis }}>
      {children}
    </GalleryContext.Provider>
  );
};
