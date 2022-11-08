import { useState } from "react";

import { useImages } from "../../context/galleryProvider/useImages";
import { ImageProps } from "../../context/galleryProvider/types";
import iconClose from "../../assets/images/icon-close.svg";
import iconPrev from "../../assets/images/icon-next.svg";

import { IModal } from "./type";
import _S from "./modal.module.scss";

export const Modal = ({ open = false, onClose }: IModal) => {
  const { thumbnails, emphasis } = useImages();
  const [currentImage, setCurrentImage] = useState<ImageProps | null>(
    emphasis[0]
  );

  const _onChangeImage = (id: number) =>
    setCurrentImage(emphasis?.find((img) => img.id === id) || emphasis[0]);

  const _handlePrevImage = () => {
    const prevImage =
      currentImage && emphasis.find((img) => img.id === currentImage?.id - 1);
    if (prevImage) setCurrentImage(prevImage);
    else setCurrentImage(emphasis[emphasis.length - 1]);
  };

  const _handleNextImage = () => {
    const nextImage =
      currentImage && emphasis.find((img) => img.id === currentImage?.id + 1);
    if (nextImage) setCurrentImage(nextImage);
    else setCurrentImage(emphasis[0]);
  };

  const _handleClickContainer = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget && onClose) {
      onClose();
      return
    }
  };

  return (
    <div
      className={_S[`${open ? "modal" : "hidden"}`]}
      onClick={_handleClickContainer}
    >
      <div className={_S["modal__content"]}>
        <button
          className={_S["modal__icon-close"]}
          type="button"
          onClick={onClose}
        >
          <img src={iconClose} alt="close the modal" />
        </button>

        <div className={_S["galery-modal"]}>

          <picture className={_S["galery-modal__emphasis"]}>
          <button
            className={_S["galery-modal__emphasis__prev-next-button"]}
            type="button"
            onClick={_handlePrevImage}
          >
            <img src={iconPrev} alt="prev button" />
          </button>
          <button
            className={_S["galery-modal__emphasis__prev-next-button"]}
            type="button"
            onClick={_handleNextImage}
          >
            <img src={iconPrev} alt="prev button" />
          </button>

            <img
              src={currentImage?.src}
              alt="Image empashis"
              title={`image number ${currentImage?.id}`}
            />
          </picture>
          <div className={_S["galery-modal__thumbnails"]}>
            {thumbnails?.map((thumb, index) => (
              <img
                key={`${thumb.id}-${index}`}
                src={thumb.src}
                className={
                  currentImage && thumb.id === currentImage.id
                    ? _S["active"]
                    : ""
                }
                onClick={() => _onChangeImage(thumb.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
