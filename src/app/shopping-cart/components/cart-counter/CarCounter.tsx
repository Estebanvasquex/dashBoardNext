"use client";
import React, { useState } from "react";

export const CarCounter = () => {
  const [count, setCount] = useState(0);


  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-3">
        <div>
          <button
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] "
            onClick={()=>{setCount(count + 1)}}
          >
            (+)10
          </button>
        </div>

        <div>
          <button
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] "
            onClick={()=>{setCount(count - 1)}}
          >
            (-)10
          </button>
        </div>
      </div>
    </>
  );
};
