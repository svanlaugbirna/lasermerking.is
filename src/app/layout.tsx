import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import type {Metadata} from "next";
import { Nunito, Nunito_Sans} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../output.css"




const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");


  
  
  


return {
  title:settings.data.site_title || "",
  description:
  settings.data.meta_discription || "",
  openGraph: {
    images: [settings.data.og_image.url  || ""],
  },
};}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();

  const homepage = await client.getSingle("homepage");
  console.log("homepage", homepage.data.slices)

  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-white">
        
        <Header/>
        {children}
       
       <Footer/>
       
        
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    
    </html>
);
};
