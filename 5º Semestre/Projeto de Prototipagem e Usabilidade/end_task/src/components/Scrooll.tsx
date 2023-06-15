import React from 'react';

interface Props{
    children: React.ReactNode;
}

export default function Scroll({children}: Props){
    return(
        <div className="overflow-y-scroll h-64 bg-gray-200 p-4">
            {children}
        </div>
    )
}
