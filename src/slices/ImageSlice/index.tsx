import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageSlice`.
 */
export type ImageSliceProps = SliceComponentProps<Content.ImageSliceSlice>;

/**
 * Component for "ImageSlice" Slices.
 */
const ImageSlice = ({ slice }: ImageSliceProps): JSX.Element => {
  const { primary } = slice;
  const { mynd, titill, texti } = primary;
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-center flex m-7 justify-between">
      {slice.items.map(item=>(
    <div>
      <PrismicNextImage field={item.mynd} 
      className="rounded-xl"/>

      <PrismicRichText field={item.titill} 
      components={{heading1: ({children})=>
      <h1 className="text-2xl">{children}</h1>
      }}/>
      <PrismicRichText field={item.texti} 
      components={{
        paragraph: ({children}) => (
          <p className="text-base font-body text-center">{children}</p>
        )
      }}/>
      </div>
      ))}
      </div>
    </section>
  );
};

export default ImageSlice;
