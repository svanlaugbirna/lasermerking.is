
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="m-55 bg-white rounded-lg shadow m-4 dark:bg-gray-800">
<PrismicRichText field={slice.primary.titill} 
components={{
  heading1: ({children}) => (
    <h1 className="text-3xl text-center mb-7 ">{children}</h1>
  )
}}
/>
<PrismicRichText field={slice.primary.texti} 
components={{
  paragraph: ({children}) => (
    <p className="text-base font-body text-center max-w-24 ">{children}</p>
  )
}} />
</div>
    </section>
  );
};

export default Text;

