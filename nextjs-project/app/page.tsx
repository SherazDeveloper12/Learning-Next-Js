import Image from "next/image";
import HeroSection from './components/heroSection/HeroSection'
export default function Home() {
  return (
 <>
   <div className="mt-20">
      <div className=" bg-neutral-900 text-white mt-10 p-4"> 
        <div className=" bg-amber-200 m-4 p-7 h-7"><p>hello world</p>
        </div>
        <div className="bg-amber-400 m-4 p-8">hello</div>
        <div className="bg-amber-600 p-8">hello there</div>
        <div className="bg-amber-800 p-8">dear</div>
        <div className="bg-amber-950">precious</div>
        <button className="w-14 bg-red-600 border rounded-2xl "> hy najo</button>
      </div>
    </div>
  <HeroSection />
 </>
  );
}
