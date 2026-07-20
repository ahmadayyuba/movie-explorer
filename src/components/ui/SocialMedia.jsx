import React from "react";

import {
    InstagramIcon,
    GitHubIcon,
    LinkedinIcon,
    GmailIcon,
    WhatsappIcon,
    FacebookIcon,
} from "../icons/icons";

export const SocialMedia = ({}) => {

    return (
    <div className="flex items-center gap-4">
    

{/* Instagram Icon */}
    <a 
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        className=" p-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400  hover:bg-neutral-800 hover:text-white "
    >
        <InstagramIcon className ="w-5 h-5"/>
    </a>


{/* 2. GITHUB Icon */}
    <a 
        href="https://github.com" 
        target="_blank" 
        rel="noreferrer" 
        className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 "
    >
        <GitHubIcon className="w-5 h-5" />
    </a>
    


{/* 3. FACEBOOK (Hover: Biru FB) */}
    <a 
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"
    >
        <FacebookIcon className = "w-5 h-5"/>
    </a>


{/* 4. LINKEDIN Icon */}
    <a 
        href="https://www.linkedin.com/in/ahmad-ayyuba-9w6a1b5390/"
        target="_blank"
        rel="noreferrer"
        className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"

    >
        <LinkedinIcon className= "w-5 h-5"/>
    </a>


{/* 5. GMAIL Icon */}
    <a 
        href="ahmadayyuba429@gmail.com"
        target="_blank"
        rel="norerferrer"
        className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"

    >
        <GmailIcon className= "w-5 h-5"/>
    </a>


{/* 4. Whatsapp Icon*/}
    <a 
        href="https://wa.me/+6285894779108" 
        target="_blank"
        rel="norerferrer"
        className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 "

    >
        <WhatsappIcon className= "w-5 h-5"/>
    </a>
    </div>
    );
};
