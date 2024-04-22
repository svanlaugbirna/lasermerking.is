import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TestProps = SliceComponentProps<Content.TestSlice>;
// Test component
const Test = ({ slice }: TestProps): JSX.Element => {
  return (
    
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
   <div className="flex m-7">
      <PrismicNextImage field={slice.primary.photo} />

<div className="flex flex-col mt-7 p-5">
      <PrismicRichText 
        field={slice.primary.title} 
      components={{
        heading1: ({children}) => (
          <h1 className="text-3xl text-center mb-7 ">{children}</h1>
        )
      }}
        />

      <PrismicRichText field={slice.primary.description}
      components={{
        paragraph: ({children}) => (
          <p className="text-base font-body text-center max-w-24">{children}</p>
        )
      }} 
      /></div>
      </div>
    </section>
    
  );
};

export default Test;

