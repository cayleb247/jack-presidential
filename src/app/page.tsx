import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="h-full flex box-border p-2">
        <Image src="/family.jpg" alt="family" width={400} height={300}></Image>
        <p className="text-white">Hi my name is Jack.</p>
      </div>
    </>
  );
}
