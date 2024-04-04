"use client";

import { SignIn } from "@clerk/nextjs";

export default function Page() {


    if (window) window.location.href = "/";

    return <SignIn />
}
