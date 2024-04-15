import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import '../src/app/globals.css'; // Import local CSS file for styling

const SecondPage = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [redirectDelay, setRedirectDelay] = useState(0); // Initialize redirect delay state
    const router = useRouter(); // Initialize useRouter
    const words = 'Kris8an';

    useEffect(() => {
        let timer;

        const type = () => {
            timer = setTimeout(() => {
                const nextCharIndex = isDeleting ? text.length - 1 : text.length + 1;
                const nextText = words.substring(0, nextCharIndex);
                setText(nextText);

                if (nextText === words) {
                    setTimeout(() => setIsDeleting(true), 2000); // Delay for 2 seconds after typing
                } else if (nextText === '') {
                    setRedirectDelay(1000); // Set redirect delay to 1 second after deletion
                }

                type();
            }, isDeleting ? 100 : 500); // Adjust typing and deleting speeds as needed
        };

        // Redirect to home page after deletion with delay
        if (redirectDelay > 0) {
            timer = setTimeout(() => {
                router.push('/home');
            }, redirectDelay);
        } else {
            type();
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, redirectDelay, router]);

    return (
        <div className="container">
            <div className="typewriter">
                <span className="text">{text}</span>
                <span className="cursor"></span>
            </div>
        </div>
    );
};

export default SecondPage;
