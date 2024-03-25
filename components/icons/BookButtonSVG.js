import React from 'react';

export default function BookButtonSVG({ className = '', onClick, dimensions = '24', enabled = false, ...rest }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={dimensions} height={dimensions} className={`${className} borderless-svg`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
    );
}
