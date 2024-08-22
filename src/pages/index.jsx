import Image from "next/image";
import { Inter } from "next/font/google";
import UserList from "@/components/table/user-list";
import React, { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-5/6 m-auto">
      <h1 className=" text-center p-5 text-4xl">User List</h1>
      <UserList />
    </div>
  );
}
