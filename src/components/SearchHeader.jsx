import React, { useEffect, useState } from 'react';
import { FaYoutube, FaSearch } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [ text, setText ] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/video/${text}`);
    };
    useEffect(()=> setText(keyword || ''),[keyword]);
    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link to ='/' className='flex items-center'>
            <span><FaYoutube className='text-4xl text-brand' /></span>
            <h1 className='font-bold ml-2 text-3xl'>WENDYTUBE</h1>
            </Link>
            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
                <input className='w-7/12 p-2 outline-none bg-black text-gray-50' type='text' id='search' placeholder='Search..' value={text} onChange={e=> setText(e.target.value)}/>
                <label htmlFor='search'><button className='h-full bg-zinc-600 px-4'><FaSearch /></button></label>
            </form>
        </header>
    );
}


