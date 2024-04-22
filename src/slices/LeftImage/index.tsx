import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LeftImage`.
 */
export type LeftImageProps = SliceComponentProps<Content.LeftImageSlice>;

/**
 * Component for "LeftImage" Slices.
 */
const LeftImage = ({ slice }: LeftImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col text-center justify-center w-full">
      <div className="text-center m-12">
    <PrismicRichText field={slice.primary.titill} />
    <PrismicRichText field={slice.primary.texti} /></div>
   <div className="items-end m-4">
    <PrismicNextImage field={slice.primary.mynd} /></div>
    </div>
    </section>
  );
};

export default LeftImage;
