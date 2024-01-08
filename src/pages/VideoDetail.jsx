import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';

export default function VideoDetail() {
    const {state:{video}} = useLocation();
    const {title, channelId, channelTitle, description} = video.snippet;
    return (
        <section>
            <iframe id="player" type="text/html" width="100%" height="640" src={`https://www.youtube.com/embed/${video.id}`} title={title} />
            <div className='p-8'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <ChannelInfo id={channelId} name={channelTitle} />
                <pre>{description}</pre>
            </div>
        </section>
    );
}

