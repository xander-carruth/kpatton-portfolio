import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
           smoothscroll.polyfill();
           window.__forceSmoothScrollPolyfill__ = true;
        }
     }, []);
}