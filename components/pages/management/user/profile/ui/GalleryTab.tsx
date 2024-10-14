// next
import Image from "next/image";
// icons
import { SolarOverflowMenuVertical } from "@/components/svg";
// cmp
import PageHeading from "@/components/shared/PageHeading";
import { Button } from "@/components/ui/button";

const GalleryTab = () => {
  return (
    <div>
      <PageHeading text="Gallery" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {[...Array(24)].map((item, index) => (
          <div
            key={index}
            className="rounded-card overflow-hidden aspect-square relative"
          >
            <Image
              src={`/images/covers/cover_${index + 1}.jpg`}
              width={600}
              height={600}
              alt="image"
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 w-full h-full flex flex-col justify-between bg-gradient-to-t to-black/30 from-black">
              <div className="flex justify-end p-2">
                <Button
                  variant="icon"
                  className="text-white dark:text-white hover:bg-slate-100/10 dark:hover:bg-slate-100/10 hover:text-white dark:hover:text-white Transition"
                >
                  <SolarOverflowMenuVertical />
                </Button>
              </div>
              <div className="p-5 pb-7">
                <p className="line-clamp-1 font-bold text-white dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  repellendus laborum porro cumque libero aspernatur
                  reprehenderit mollitia totam error labore?
                </p>
                <span className="text_disabled">14 Oct 2024</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryTab;
