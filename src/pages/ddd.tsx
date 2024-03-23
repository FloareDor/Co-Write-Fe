import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/navbar/navbar';
import dynamic from 'next/dynamic';

export interface WriteState {
    value: string;
    isClient: boolean;
    ReactQuill?: any;
}

export const useWriteState = (): WriteState => {
    const [value, setValue] = useState<string>('');
    const [isClient, setIsClient] = useState<boolean>(false);
    const ReactQuill = useRef<any>(null);

    // ... state management logic with type annotations

    return { value, setValue, isClient, ReactQuill };
};

interface WriteState {
    value: string;
    isClient: boolean;
    ReactQuill?: any;
}

const componentStyles = `
  .ql-editor {
    font-size: 26px;
  }
`;

const Write: React.FC = () => {
    const [value, setValue] = useState<string>(''); // Explicitly define type for state variables
    const [isClient, setIsClient] = useState<boolean>(false);
    const ReactQuill = useRef<any>(null); // Use useRef with generic type

    // ... rest of your component logic

    return (
        <div className="bg-bgmain flex flex-col min-h-screen w-screen gap-14 relative">
            {/* ... JSX with type annotations */}
        </div>
    );
};

export default Write;
