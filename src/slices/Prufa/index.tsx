import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Prufa`.
 */
export type PrufaProps = SliceComponentProps<Content.PrufaSlice>;

/**
 * Component for "Prufa" Slices.
 */
const Prufa = ({ slice }: PrufaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex w-full justify-between m-7 ">
        {slice.variation==="default" && <div className="items-center w-full">
  <PrismicNextImage field={slice.primary.image} />
</div>}
   <div className="flex flex-col text-center justify-center w-full"> 
  <PrismicRichText field={slice.primary.heading} 
    components={{ heading1: ({children})=>(
      <h1 className="text-3xl">{children}</h1>
    )}}/>   
  <PrismicRichText field={slice.primary.text} 
    components={{
      paragraph: ({children}) => (
        <p className="text-base font-body text-center">{children}</p>
    )
    }}/> 
    </div>
   {slice.variation!=="default" && <div className="items-center w-full">
  <PrismicNextImage field={slice.primary.image} />
</div>}
</div>
 </section>
  );
};

export default Prufa;
