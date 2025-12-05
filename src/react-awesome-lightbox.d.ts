declare module 'react-awesome-lightbox' {
  import { ComponentType } from 'react';

  interface LightboxProps {
    image: string;
    onClose: () => void;
    title?: string;
    images?: string[];
  }

  const Lightbox: ComponentType<LightboxProps>;
  export default Lightbox;
}
