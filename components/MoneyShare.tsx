"use client";
import { useState } from "react";

export default function MoneyShare() {
  const [money, setMoney] = useState(' ');
  const [people, setPeople] = useState(' ');
  const [moneyShare, setMoneyShare] = useState('0.00 ');

  const handleInputPeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(e.target.value);
  };

  const handleResetUIValue = () => {
    setMoney(' ');
    setPeople(' ');
    setMoneyShare('0.00 ');
  };

  const handleClickCalculateMoneyShare = () => {
    // Validate input
    if (money === ' ' || money <= '0') {
      alert('กรุณาป้อนจํานวนเงินที่ต้องการหาร');
      return;
    }
    if (people === ' ' || people <= '0') {
      alert('กรุณาป้อนจํานวนคนที่ต้องการหาร');
      return;
    }
    const result = parseFloat(money) / parseFloat(people);
    setMoneyShare(result.toFixed(2).toString());
  }

  return (
    <div>
      <h3 className="font-bold text-xl text-gray-600">
        จำนวนเงินที่ต้องการหาร :
      </h3>
      <input type="number" id="amount" min={0} placeholder="ป้อนจํานวนเงิน" className="w-full p-4 border border-blue-600 rounded-2xl focus:outline-none
      focus:ring-2 focus:ring-blue-600"
      value={money} onChange={(e) => setMoney(e.target.value)}/>

      <h3 className="font-bold text-xl text-gray-600 mt-4">
        จำนวนคนที่ต้องการหาร :
      </h3>

      <input type="number" id="amount" min={0} placeholder="ป้อนจํานวนเงิน" className="w-full p-4 border border-blue-600 rounded-2xl focus:outline-none
      focus:ring-2 focus:ring-blue-600"
      value={people} onChange={handleInputPeople}/>

      <button className="w-full mt-6 bg-blue-500 text-white text-xl font-bold p-4 rounded-2xl" onClick={handleClickCalculateMoneyShare}>
        คำนวณ
      </button>
      <button className="w-full mt-4 bg-red-500 text-white text-xl font-bold p-4 rounded-2xl" onClick={handleResetUIValue}>
        ยกเลิก
      </button>

      <div className="mt-5 text-center">
        <h3 className="text-xl font-bold text-gray-600">
            หารกันคนละ {" "}
            <span className="text-red-600 font-bold text-3xl">
              {moneyShare}
            </span>
            บาท
        </h3>
      </div>
    </div>
  )
}
