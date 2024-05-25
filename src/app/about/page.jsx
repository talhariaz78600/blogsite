"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AboutPage = () => {
    const router = useRouter();
    const { counter } = router.query || {};

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (counter) {
            setCount(parseInt(counter, 10));
        }
    }, [counter]);

    const incrementCounter = () => {
        router.push(`/about?search=${1 + 1}`);
    };

    return (
        <div>
            <h1>About Page</h1>
            <p>Counter: {count}</p>
            <button onClick={incrementCounter}>Increment Counter</button>
        </div>
    );
};

export default AboutPage;