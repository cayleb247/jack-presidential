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
            <p className="text-foreground text-xl italic">
              You will always hear what you want to hear from Candidate John
              Mercure
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white box-border px-5 py-10 flex flex-col items-center gap-5 relative">
        <p className="absolute left-0 rotate-270 text-[10rem] bottom-0 top-0 font-sans font-bold overflow-hidden italic opacity-30"><span className="text-red-600">VOTE</span> MERCURE</p>
        <p className="absolute right-0 rotate-90 text-[10rem] bottom-0 top-0 font-sans font-bold overflow-hidden italic opacity-30"><span className="text-red-600">VOTE</span> MERCURE</p>
        <p className="text-5xl text-foreground font-bold">John on TV</p>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <video className="w-1/4 h-auto" controls preload="auto">
              <source src="/average_guy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-xl">A self made man, John remains a normal guy before all else. A normal guy, with money, of course.</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <video className="w-1/2 h-auto" controls preload="auto">
              <source src="/trump_endorsement.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-xl">The strong moral character and leadership capabilities of John are undeniable, just ask President Trump.</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-foreground box-border px-5 py-10 flex flex-col items-center gap-5">
        <p className="text-4xl text-white font-bold">
          The Latest from John&apos;s Campaign
        </p>
        <PostSlideShow></PostSlideShow>
      </div>
    </>
  );
}
