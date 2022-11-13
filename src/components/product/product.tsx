import imageOneThumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import imageTwoThumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import imageThreeThumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import imageFourThumbnail from "../../assets/images/image-product-4-thumbnail.jpg";

import _S from "./product.module.scss";
import { useEffect, useState } from "react";
import ModalImages from "../modalImages";
import { GalleryProvider } from "../../context/galleryProvider";
import { EControls } from "./types";
import { useCart } from "../../context/cartProvider/useCart";
import Gallery from "../gallery";
import { Summary } from "./summary";

const thumbnails = [
  { id: 1, src: imageOneThumbnail },
  { id: 2, src: imageTwoThumbnail },
  { id: 3, src: imageThreeThumbnail },
  { id: 4, src: imageFourThumbnail },
];

const DISCOUNT = 0.5;
const ORIGINAL_AMOUNT = 250;

export const Product = () => {
  const { addProduct } = useCart();

  const [_amount, _setAmount] = useState(1);
  const [_totalAmount, _setTotalAmount] = useState(ORIGINAL_AMOUNT);
  const [openModal, setOpenModal] = useState(false);

  const _handleControl = (type: EControls) => {
    const actions = () =>
      ({
        [EControls.plus]: () => _setAmount((prev) => ++prev),
        [EControls.minus]: () => _setAmount((prev) => (prev > 1 ? --prev : 1)),
      }[type]());

    actions();
  };

  useEffect(() => {
    _setTotalAmount(ORIGINAL_AMOUNT * _amount);
  }, [_amount]);
  return (
    <GalleryProvider>
      <section className={_S["product"]}>
        <Gallery onModal={setOpenModal} />
        <Summary
          _handleControl={_handleControl}
          addProduct={addProduct}
          amount={_amount}
          discount={DISCOUNT}
          src={thumbnails[0].src}
          totalAmount={_totalAmount}
        />
        <ModalImages open={openModal} onClose={() => setOpenModal(false)} />
      </section>
    </GalleryProvider>
  );
};
