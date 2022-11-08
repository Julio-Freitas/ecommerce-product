import _S from "./galerry.module.scss";

import { GalleryProvider } from "../../context/galleryProvider";
import { useState } from "react";
import { useImages } from "../../context/galleryProvider/useImages";

type ImageType = {
  id: number;
  src: string;
};

const DISCOUNT = 0.5;
const ORIGINAL_AMOUNT = 250;

export const Gallery = ({
  onModal,
}: {
  onModal: (status: boolean) => void;
}) => {
  const { thumbnails, emphasis: images } = useImages();
  const [_currentImg, _setCurrentImg] = useState<ImageType>(images[0]);
  const [_amount, _setAmount] = useState(1);
  const [_totalAmount, _setTotalAmount] = useState(ORIGINAL_AMOUNT);

  const _onChangeImage = (id: number) => {
    const findImage = images.find((img) => img.id === id);
    if (findImage) _setCurrentImg(findImage);
  };

  return (
    <GalleryProvider>
      <section className={_S["product"]}>
        <div className={_S["galery-container"]}>
          <picture className={_S["galery-container__emphasis"]}>
            <img
              src={_currentImg.src}
              alt="Image empashis"
              title={`image number ${_currentImg.id}`}
              onClick={() => onModal(true)}
            />
          </picture>
          <div className={_S["galery-container__thumbnails"]}>
            {thumbnails.map((thumb, index) => (
              <img
                key={`${thumb.id}-${index}`}
                src={thumb.src}
                className={thumb.id === _currentImg.id ? _S["active"] : ""}
                onClick={() => _onChangeImage(thumb.id)}
                alt="Thumbnail image product"
              />
            ))}
          </div>
        </div>
      </section>
    </GalleryProvider>
  );
};
