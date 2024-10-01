// next
import Image from "next/image";

const AuthPageBackground = () => {
  return (
    <div className="h-screen w-full fixed inset-0 z-10 dark:hidden">
      <Image
        src="/AuthpageOverlay.jpg"
        width={1920}
        height={1080}
        alt="overlay"
        priority
        className="opacity-30 w-full h-full object-cover"
      />
    </div>
  );
};

export default AuthPageBackground;
