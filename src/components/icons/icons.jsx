import React from "react";

// 1. Search Icon
export const SearchIcon = ({ className = "w-5 h-5" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
    <path
        d="M21 21L17 17M19 11C19 13.1217 18.1571 15.1566 16.6569 16.6569C15.1566 18.1571 13.1217 19 11 19C8.87827 19 6.84344 18.1571 5.34315 16.6569C3.84285 15.1566 3 13.1217 3 11C3 8.87827 3.84285 6.84344 5.34315 5.34315C6.84344 3.84285 8.87827 3 11 3C13.1217 3 15.1566 3.84285 16.6569 5.34315C18.1571 6.84344 19 8.87827 19 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    </svg>
);

// 2. Arrow Top Icon
export const ArrowIcon = ({className = "w-6 h-6"}) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
    <path
        d="M17 14L12 9L7 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
    />  
    </svg>
);

// 3, Arrow Left Icon 
export const ArrowLeftIcon = ({className = "w-6 h-6"}) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
    
    <path
        d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z" fill="currentColor"
    />

    <path
        d="M20.5 12.75H3.67004C3.26004 12.75 2.92004 12.41 2.92004 12C2.92004 11.59 3.26004 11.25 3.67004 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z"
        fill="currentColor"
    />
    </svg>
);

// 4. Calendar Icon
export const CalendarIcon = ({className = "w-6 h-6"}) =>(
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
    <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 9.09009H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.6947 13.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.6947 16.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9955 16.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// 5. Check Icon (Perbaikan Total)
export const CheckIcon = ({ className = "w-6 h-6" }) => (
    <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    >

    <mask id="check-icon-mask" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
    <path d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
<   path d="M8 12L11 15L17 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

    </mask>
    <g mask="url(#check-icon-mask)">
    <path d="M0 0H24V24H0V0Z" fill="currentColor"/>
    </g>
    </svg>
);

// 6. CLose Bold Icon 
export const CloseBoldIcon = ({className = "w-6 h-6"}) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
    <mask id="close-bold-icon-mask" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="white" stroke="white" strokeWidth="2" stroke-linejoin="round"/>
    <path d="M14.8285 9.17139L9.17151 14.8284M9.17151 9.17139L14.8285 14.8284" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </mask>
    <g mask="url(#close-bold-icon-mask)">
    <path d="M0 0H24V24H0V0Z" fill="currentColor"/>
    </g>
    </svg>
);

// 7. Close Icon
export const CloseIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// 8. Heart Bold Icon
export const HeartBoldIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z" fill="currentColor"/>
    </svg>
);

// 9. Heart Icon
export const HeartIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// 10. Menu Icon
export const MenuIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="currentColor"/>
    <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill="currentColor"/>
    <path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill="currentColor"/>
    </svg>
);

// 11. Star Bold Icon
export const StarBoldIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10.9718 2.70846C11.4382 1.93348 12.5618 1.93348 13.0282 2.70847L15.3586 6.58087C15.5262 6.85928 15.7995 7.05784 16.116 7.13116L20.5191 8.15091C21.4002 8.35499 21.7474 9.42356 21.1545 10.1066L18.1918 13.5196C17.9788 13.765 17.8744 14.0863 17.9025 14.41L18.2932 18.9127C18.3714 19.8138 17.4625 20.4742 16.6296 20.1214L12.4681 18.3583C12.1689 18.2316 11.8311 18.2316 11.5319 18.3583L7.37038 20.1214C6.53754 20.4742 5.62856 19.8138 5.70677 18.9127L6.09754 14.41C6.12563 14.0863 6.02124 13.765 5.80823 13.5196L2.8455 10.1066C2.25257 9.42356 2.59977 8.35499 3.48095 8.15091L7.88397 7.13116C8.20053 7.05784 8.47383 6.85928 8.64138 6.58087L10.9718 2.70846Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

// 12. Star Icon
export const StarIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13.73 3.51014L15.49 7.03014C15.73 7.52014 16.37 7.99014 16.91 8.08014L20.1 8.61014C22.14 8.95014 22.62 10.4301 21.15 11.8901L18.67 14.3701C18.25 14.7901 18.02 15.6001 18.15 16.1801L18.86 19.2501C19.42 21.6801 18.13 22.6201 15.98 21.3501L12.99 19.5801C12.45 19.2601 11.56 19.2601 11.01 19.5801L8.02003 21.3501C5.88003 22.6201 4.58003 21.6701 5.14003 19.2501L5.85003 16.1801C5.98003 15.6001 5.75003 14.7901 5.33003 14.3701L2.85003 11.8901C1.39003 10.4301 1.86003 8.95014 3.90003 8.61014L7.09003 8.08014C7.62003 7.99014 8.26003 7.52014 8.50003 7.03014L10.26 3.51014C11.22 1.60014 12.78 1.60014 13.73 3.51014Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// 13. Video Icon
export const VideoIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z" fill="currentColor"/>
    </svg>
);


