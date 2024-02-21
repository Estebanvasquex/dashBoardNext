
import Image from "next/image";
import { redirect } from "next/navigation";
import HomePage from "./dashboard/counter/page";

export default function Home() {

  redirect("/dashboard/counter");

}
