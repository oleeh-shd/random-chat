import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "../context/auth-context";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
