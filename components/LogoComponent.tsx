import Image from "next/image";
import React from "react"; // Import React

const LogoComponent: React.FC = () => {
    return (
        <Image
            src={'/logo.png'}
            alt='Codex'
            width='35'
            height='35'
        />
    );
};

export default LogoComponent;
