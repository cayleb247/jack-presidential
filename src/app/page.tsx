import Image from "next/image";
import PostSlideShow from "@/components/PostSlideShow";

export default function Home() {
  return (
    <>
      <div className="h-full flex box-border py-15 px-12 justify-center">
        <div className="flex items-center justify-around w-full h-full">
          <Image
            src="/jack.jpg"
            alt="Jack's Headshot"
            width={300}
            height={400}
            className="animate-spin hover:animate-none"
          ></Image>
          <div className="flex flex-col items-start gap-1">
            <p className="text-foreground text-6xl italic font-semibold">
              &quot;Always Spinning the Truth&quot;
            </p>
            <p className="text-foreground text-xl italic">You will always hear what you want to hear from Candidate John Mercure</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-foreground box-border px-5 py-10 flex flex-col items-center gap-5">
        <p className="text-3xl text-white font-bold">
          The Latest from John&apos;s Campaign
        </p>
        <PostSlideShow></PostSlideShow>
      </div>
    </>
  );
}
