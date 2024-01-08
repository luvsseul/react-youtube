import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({video}) {
    const {title, thumbnails, channelTitle, publishedAt} = video.snippet
    const navigate = useNavigate();
    return (
        <li onClick={()=>{navigate(`/video/watch/${video.id}`,{state:{video}});
        }}>
            <img className='w-full' src={thumbnails.medium.url} alt={title}></img>
            <div>
                <p className='font-semibold my-2 line-clamp-2'>{title}</p>                
                <p className='text-sm opacity-80'>{channelTitle}</p>
                <p className='text-sm opacity-80'>{publishedAt}</p>
            </div>
        </li>
        
    );
}
