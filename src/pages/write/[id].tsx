import React, { Component, ReactNode } from 'react';
import Navbar from '@/components/navbar/navbar';
import dynamic from 'next/dynamic';
import CowriteAssist from '@/components/cowrite-assist';
import ViewAssignment from '@/components/viewAssignment';
import SubmitAssignment from '@/components/submitAssignment';


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

export default class Write extends Component<{}, WriteState> {
    modules: any;
    formats: any;
    ReactQuill?: any;


    constructor(props: {}) {
        super(props);
        this.state = {
            value: '',
            isClient: false,
        };

        if (typeof window !== 'undefined') {
            this.ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
            require('react-quill/dist/quill.bubble.css');
        }

        this.modules = {
            toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
            ],
        };

        this.formats = [
            'header',
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'list',
            'bullet',
            'link',
            'image',
        ];
    }

    componentDidMount() {
        this.setState({ isClient: true });
        const styleElement = document.createElement('style');
        styleElement.innerHTML = componentStyles;
        document.head.appendChild(styleElement);
    }

    render() {
        const { value, isClient } = this.state;
        const ReactQuill = this.ReactQuill;

        return (
            <div className="bg-bgmain flex flex-col min-h-screen w-screen gap-14 relative">
                <div className="flex flex-col justify-center gap-0 fixed top-0 start-0 z-10">
                    <Navbar />
                </div>
                <div className="relative flex flex-col justify-start mt-40 lg:mt-40 md:mt-40 sm:mt-40 ">
                    {isClient ? (
                        <ReactQuill
                            theme="bubble"
                            value={value}
                            onChange={(newValue: string) => this.setState({ value: newValue })}
                            modules={{
                                ...this.modules,
                                clipboard: {
                                    matchVisual: false,
                                },
                            }}
                            formats={this.formats}
                            placeholder="Type or paste (Ctrl+v) your text here."
                            className="
                resize-none no-scrollbar overflow-y-auto scroll-smooth
                outline-none focus:outline-none
                font text-black text-4xl font-semibold text-justify
                border-none rounded-sm border-0 min-h-[45rem] bg-bgmain w-6/6 px-24 lg:px-44 md:px-44 sm:px-44
                lg:rounded-2xl md:rounded-2xl sm:rounded-2xl lg:w-4/6 md:w-4/6 sm:w-4/6 lg:border-2 md:border-2 sm:border-2 resize-vertical
              "
                        />

                    ) : (

                        <div className="placeholder" />
                    )}
                    <div className='flex flex-row gap-x-4 items-center ml-20'>
                        <ViewAssignment/>
                        <SubmitAssignment submissiontext={value} />
                    </div>
                    <CowriteAssist />
                </div>

            </div>
        );
    }
}

