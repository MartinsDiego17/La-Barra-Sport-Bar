"use client";

import { useEffect } from "react";
import { supabaseClient } from "../supabase/client";

const page = () => {

    useEffect(() => {
        console.log("SUPABASE: ", supabaseClient);
    }, []);

    return (
        <div>

        </div>
    )
}

export default page;
