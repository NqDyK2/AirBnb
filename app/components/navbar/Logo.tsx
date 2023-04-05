'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

import imgLogo from "../../../public/images/logo.png"

const Logo = () => {
    const router = useRouter();

    return (
        <Image 
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src={imgLogo}
        />
    )
}

export default Logo