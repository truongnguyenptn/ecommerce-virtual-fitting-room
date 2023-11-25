"use client"
import Image from "next/image";
import { Button } from "antd";
import { Input } from "antd";
import { useState } from "react";
import Products from "@/components/Products`";
export default function Home() {
  const [clothes,setClothes] = useState([1,2,3,4])
  return (
    <main className="flex min-h-screen bg-slate-50 flex-col items-center justify-between p-24">
      <div className=" w-full flex gap-3 items-center">
        <div className="flex flex-col w-1/6 text-black gap-3">
          <p>Link</p>
          <p>Describe your situation</p>
        </div>
        <div className="flex flex-col w-4/6 text-black gap-3">
          <div className="flex gap-2">
            <Input className="flex-1" placeholder="Insert link heer" />;
          </div>
          <div className="flex gap-2">
            <Input className="flex-1" placeholder="" />;
          </div>
        </div>
        <div className="flex flex-col w-1/6 text-black gap-3">
          <Button type="primary" className="bg-red-200">
            Suggest
          </Button>
          <Button type="primary" className="bg-red-200">
            Suggest
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {clothes.map((curr)=>(<Products/>))}
      </div>
    </main>
  );
}
