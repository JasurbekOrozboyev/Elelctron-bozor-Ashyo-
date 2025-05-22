const Section = () => {
  
  
  return (
    <div className="md:max-w-[1440px] m-auto md:h-auto  mt-3 mb-">
      <div className="w-[1180px] h-auto m-auto flex items-center">
        <div className="w-[70%] ">
        <ul className=" flex flex-wrap gap-[10px]">
            <li className="w-[444px] h-[248px]  rounded bg-[#5C4F8C] relative">
                <img className="absolute bottom-0 right-0" src="/noutbook.png" alt="noutbook" />
            </li>
            <li className="rounded bg-[#797C7D] flex justify-end">
                <img className="" src="/konditsioner.png" alt="konditsioner" />
            </li>
            <li className="w-[227px] rounded bg-[#B0B0B0]">
                <img src="/kirmoshina.png" alt="kirmoshina" />
            </li>
            <li className="w-[431px] rounded bg-[#CEAF75]">
                <img src="/televizor.png" alt="televizor" />
            </li>
        </ul>
      </div>
      <div className="flex justify-end">
        <img className="w-[600px]" src="/telefon_muzlatgich.png" alt="telefon_muzlatgich" />
      </div>
      </div>
    </div>
  );
};

export default Section;
