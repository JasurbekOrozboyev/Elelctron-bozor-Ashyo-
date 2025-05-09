import { Button } from "@/components/ui/button"
import phone from '../img/sectionHead/phone.svg'
import { useState } from "react";


const SectionHead = () => {
    const [activeIndex, setActiveIndex] = useState(3); 

    const dots = [0, 1, 2, 3, 4];
  
  return (
    <div className="md:max-w-[1440px] m-auto md:h-[450px] bg-[#F3F0F0] mt-3">
        <div className="md:block hidden">
        <div className="w-full h-full flex justify-between">
        <div className="w-[50%] pl-[100px] pt-[100px]">
            <h1 className="text-[44px] font-bold text-[#0A1729]">Siz kutgan Xiaomi 12 Mi Laite</h1>
            <p className="text-xl text-[#545D6A] mt-2">Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
            <Button className="w-[161px] h-[54px] bg-[#0F4A97] text-white mt-6" variant="outline"><p>Batafsil</p></Button>
            <div className="flex items-center gap-4 mt-10">
                {dots.map((_, index) => (
                    <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 cursor-pointer flex justify-center items-center
                        ${activeIndex === index ? "w-16 h-16 bg-white rounded-full shadow-md" : ""}
                    `}
                    >
                    <div
                        className={`rounded-full transition-all duration-300
                        ${activeIndex === index ? "w-8 h-8 bg-[#95BEF3]" : "w-4 h-4 bg-[#95BEF3] hover:scale-125"}
                        `}
                    ></div>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-[50%] relative">
            <img className="w-[900px] absolute bottom-[-38px]" src={phone} alt="phone" />
        </div>
        </div>
        </div>
        <div className="max-w-[390px] h-[210px] m-auto p-3 md:hidden block">
            <div className="relative">
                <h1 className="font-bold text-[22px] mt-1 text-[#0A1729]">Siz kutgan Xiaomi 12 Mi Laite</h1>
                <p className="text-[#545D6A] text-[11px]">Orginallik va qulay narxni o'zida jamlagan   siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
                <Button className="bg-[#0F4A97] text-white mt-6" variant="outline"><p>Batafsil</p></Button>
                <img className="absolute w-[292px] top-9 right-[-50px]" src={phone} alt="phon" />
            </div>
        </div>
        
    </div>
  );
};

export default SectionHead;
