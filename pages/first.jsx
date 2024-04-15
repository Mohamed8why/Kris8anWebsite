import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const VideoPage = () => {
    const videoRef = useRef(null);
    const router = useRouter();

    const handleVideoEnd = () => {
        router.push('/second');
    };

    useEffect(() => {
        const resizeVideo = () => {
            const video = videoRef.current;
            if (!video) return;

            const containerHeight = window.innerHeight;

            // Fixed aspect ratio of 1080x1920
            const aspectRatioWidth = 1080;
            const aspectRatioHeight = 1920;

            // Calculate width based on aspect ratio and container height
            const width = (containerHeight / aspectRatioHeight) * aspectRatioWidth;

            // Apply dimensions to the video element
            video.style.width = `${width}px`;
            video.style.height = `${containerHeight}px`;
        };

        // Resize video on initial load and when window is resized
        resizeVideo();
        window.addEventListener('resize', resizeVideo);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', resizeVideo);
        };
    }, []);

    return (
        <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                controls={false}
                onEnded={handleVideoEnd}
                style={{ width: '100%', height: '100%' }}
                src="/static/introk.mp4" // Adjust the path to your video file
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPage;
