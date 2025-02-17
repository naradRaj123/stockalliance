import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stock Alliance | Sign Up",
  description: "This is Sign Up Stock Alliance",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
