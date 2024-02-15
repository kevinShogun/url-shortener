import exp from 'constants';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NewUrl = ({ shortUrl }: { shortUrl: string }) => {

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(shortUrl);
        toast.success('Url copied to clipboard');
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <div className="flex gap-2 flex-wrap">
                    <span className="text-sm md:text-base lg:text-lg font-semibold">Shortened Url: </span>
                    <a
                        href={shortUrl}
                        target="_blank"
                        className="text-sm md:text-base lg:text-lg text-blue-500 hover:underline"
                    >
                        {shortUrl}
                    </a>
                </div>

                <button className="bg-blue-500 text-white p-2 rounded-md text-sm
                flex gap-2 items-center justify-center hover:bg-blue-600 shadow-md"
                    onClick={handleCopyUrl}
                >
                    <i className='bx bx-copy'></i>
                    Copy
                </button>

            </div>
            <div>
                <ToastContainer />
            </div>
        </>
    )
}

export default NewUrl;