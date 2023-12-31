import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function ReactQuery({ children }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    });

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
