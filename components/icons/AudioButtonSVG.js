import React from 'react';

export default function AudioButtonSVG({ className = '', onClick, dimensions = '24', enabled = false, ...rest }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={dimensions} height={dimensions} className={`${className} borderless-svg`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
    );
}
