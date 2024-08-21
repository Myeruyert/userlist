import Image from "next/image";
import { Inter } from "next/font/google";
import UserList from "@/components/table/user-list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="w-5/6 m-auto text-center p-5 text-4xl">User List</h1>
      <UserList />
    </>
  );
}
