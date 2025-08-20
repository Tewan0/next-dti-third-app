"use client";

export default function MoneyShare() {
  return (
    <div>
      <h3 className="font-bold text-xl text-gray-600">
        จำนวนเงินที่ต้องการหาร :
      </h3>
      <input type="tel" id="amount" min={0} placeholder="ป้อนจํานวนเงิน" className="w-full p-4 border border-blue-600 rounded-2xl focus:outline-none
      focus:ring-2 focus:ring-blue-600"/>

      <h3 className="font-bold text-xl text-gray-600 mt-4">
        จำนวนคนที่ต้องการหาร :
      </h3>

      <input type="tel" id="amount" min={0} placeholder="ป้อนจํานวนเงิน" className="w-full p-4 border border-blue-600 rounded-2xl focus:outline-none
      focus:ring-2 focus:ring-blue-600"/>

      <button className="w-full mt-6 bg-blue-500 text-white text-xl font-bold p-4 rounded-2xl">
        คำนวณ
      </button>
      <button className="w-full mt-4 bg-red-500 text-white text-xl font-bold p-4 rounded-2xl">
        ยกเลิก
      </button>

      <div className="mt-5 text-center">
        <h3 className="text-xl font-bold text-gray-600">
            หารกันคนละ
            <span className="text-red-600 font-bold text-3xl">
                0.00
            </span>
            บาท
        </h3>
      </div>
    </div>
  )
}
