// import React from "react";

// import { HeartBoldIcon, HeartIcon } from "../icons/icons";

// export const FavoriteButton = ({ isFavorite = false, onClick, ...props }) => {
//     return (
//         <button type="button" className="bg-neutral-800 border rounded-full border-neutral-900 p-2 hover:bg-neutral-700" onClick={onClick} {...props}>
            
//         {isFavorite ? (
//             <HeartBoldIcon className="w-5 h-5 rounded-full text-red-700" /> ): (
//             <HeartIcon className="w-5 h-5 text-neutral-400"/>
//         )}
//         </button>
//     );
// }; di pakai nanti klo udah mausukinn api yang dibawah untuk demo aja

import React, { useState } from "react"; // 1. Import useState dari React
import { HeartBoldIcon, HeartIcon } from "../icons/icons";

export const FavoriteButton = ({ isFavorite: initialFavorite = false, onClick, ...props }) => {
    // 2. Bikin memori lokal (state) buat nyimpen status favorit
    const [isFav, setIsFav] = useState(initialFavorite);

    // 3. Fungsi untuk membalik status (true jadi false, false jadi true)
    const handleToggle = (e) => {
        setIsFav(!isFav); // Dibalik nilainya
        
        // Kalau ada fungsi onClick dari luar (misal buat nampilin Toast), jalankan juga
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button 
            type="button" 
            className="bg-neutral-800 border rounded-full border-neutral-900 p-2 hover:bg-neutral-700 transition-colors" 
            onClick={handleToggle} // 4. Panggil handleToggle pas diklik
            {...props}
        >
            {/* 5. Sekarang kita pakai variabel 'isFav' dari useState */}
            {isFav ? (
                <HeartBoldIcon className="w-5 h-5 text-red-700" />
            ) : (
                <HeartIcon className="w-5 h-5 text-neutral-400"/>
            )}
        </button>
    );
};

