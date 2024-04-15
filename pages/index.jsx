import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to '/first' when the root path is accessed
        router.push('/first');
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return null; // This component doesn't render anything visible
};

export default HomePage;



