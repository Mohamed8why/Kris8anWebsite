import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to '/first' when the root path is accessed
        router.push('/first');
    }, [router]); // Include router in the dependency array

    return null; // This component doesn't render anything visible
};

export default HomePage;



