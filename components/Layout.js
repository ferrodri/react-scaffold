import { Header } from '../components';
import { useIsMounted } from '../hooks';

export function Layout({ children }) {
    const isMounted = useIsMounted();

    return (
        isMounted && <>
            <Header />
            {children}
        </>
    );
}