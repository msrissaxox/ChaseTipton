import React from "react";

export default function Footer() {
    return (
        <div className="flex justify-between items-center w-full text-center p-4">
            <div>&copy; {new Date().getFullYear()} Chase Tipton. All rights reserved.</div>
            <div>site by @rissa_codes</div>
        </div>
    );
}