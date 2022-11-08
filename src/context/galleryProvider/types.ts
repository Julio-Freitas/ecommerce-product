export type ImageProps = {
  id: number;
  src: string;
};
export interface IContext {
  thumbnails: ImageProps[];
  emphasis: ImageProps[] ;
}

export interface IProvider {
  children: JSX.Element;
}
