import imageOne from "../../assets/images/image-product-1.jpg";
import imageOneThumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import imageTwoThumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import imageThreeThumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import imageFourThumbnail from "../../assets/images/image-product-4-thumbnail.jpg";
import _S from "./galery.module.scss";
const thumbnails = [
  imageOneThumbnail,
  imageTwoThumbnail,
  imageThreeThumbnail,
  imageFourThumbnail,
];

export const Product = () => (
  <section className={_S['product']}>
    <div className={_S["galery-container"]}>
      <picture className={_S['galery-container__emphasis']}>
        <img src={imageOne} />
      </picture>
      <div className={_S['galery-container__thumbnails']}>
        {thumbnails.map((thumb, index) => (
          <img src={thumb} className={index === 0  ?  _S['active'] : ''} />
        ))}
      </div>
    </div>
  </section>
);
