

import { SimpleWidget } from "@/app/components/commonts/simple-widget/SimpleWidget";


export default function MainPage() {
  return (
    <div  className="text-black p-2 ">
       
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>
      <div className="flex flex-wrap p-2">
       
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
      </div>
    </div>
  );
}