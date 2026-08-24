export default function TestSection() {
  return (
    <div className="flex w-full h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">Test Section</h2>
      <div className="flex flex-col items-center justify-center gap-4 p-8 m-4 hidden">
        <p className="text-lg font-bold text-gray-600">
          Pallet 1
        </p>
        <div className="flex flex-row">
          <div className="w-32 h-32 bg-[#5B6FA8] rounded-full"></div>
          <div className="w-32 h-32 bg-[#2C3A5A] rounded-full"></div>
          <div className="w-32 h-32 bg-[#C5CBD6] rounded-full"></div>
          <div className="w-32 h-32 bg-[#F7F8FA] rounded-full"></div>
          <div className="w-32 h-32 bg-[#FFFFFF] rounded-full"></div>
          <div className="w-32 h-32 bg-[#1A1D26] rounded-full"></div>
          <div className="w-32 h-32 bg-[#6B7280] rounded-full"></div>
          <div className="w-32 h-32 bg-[#E5E7EB] rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-8 m-4 hidden">
        <p className="text-lg text-gray-600">
          Pallet 2
        </p>
        <div className="flex flex-row">
          <div className="w-32 h-32 bg-[#0F172A] rounded-full"></div>
          <div className="w-32 h-32 bg-[#111827] rounded-full"></div>
          <div className="w-32 h-32 bg-[#F8FAFC] rounded-full"></div>
          <div className="w-32 h-32 bg-[#CBD5E1] rounded-full"></div>
          <div className="w-32 h-32 bg-[#38BDF8] rounded-full"></div>
          <div className="w-32 h-32 bg-[#22C55E] rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <p className="text-lg text-gray-600">
          Pallet 3
        </p>
        <div className="flex flex-row">
          <div className="flex w-32 h-32 bg-[#4A6CD4] rounded-full items-center justify-center">
            <div className="flex text-white text-lg font-bold">#4A6CD4</div>
          </div>
          <div className="flex w-32 h-32 bg-[#38BDF8] rounded-full items-center justify-center">
            <div className="flex text-white text-lg font-bold">#38BDF8</div>
          </div>
          <div className="flex w-32 h-32 bg-[#0B0F17] rounded-full items-center justify-center">
            <div className="flex text-white text-lg font-bold">#0B0F17</div>
          </div>
          <div className="flex w-32 h-32 bg-[#1E293B] rounded-full items-center justify-center">
            <div className="flex text-white text-lg font-bold">#1E293B</div>
          </div>
          <div className="flex w-32 h-32 bg-[#94A3B8] rounded-full items-center justify-center">
            <div className="flex text-white text-lg font-bold">#94A3B8</div>
          </div>
          <div className="flex w-32 h-32 bg-[#F8FAFC] rounded-full items-center justify-center">
            <div className="flex text-black text-lg font-bold">#F8FAFC</div>
          </div>
          <div className="flex w-32 h-32 bg-[#0284C7] rounded-full items-center justify-center">
            <div className="flex text-white text-lg font-bold">#0284C7</div>
          </div>
          <div className="w-32 h-32 bg-[#A855F7] rounded-full hidden"></div>
        </div>
      </div>
    </div>
  );
}