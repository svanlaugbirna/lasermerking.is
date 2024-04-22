import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";



export default async function Footer(){
    const client = createClient();

    const settings = await client.getSingle("footer");
    const {data} = settings
    console.log("data", data)
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Fylgdu okkur á samfélagsmiðlum!
            </p>
      
            <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              {data.navigation.map((nav, index) => (
                <div key={index} className="mr-4 md:mr-6">
                  <PrismicNextLink field={nav.link}>
                    <PrismicNextImage field={nav.logo} />
                  </PrismicNextLink>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              {new Date().getFullYear()}
            </p>
            <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">{data.info}</div>
          </div>
        </footer>
      );}
      
  
