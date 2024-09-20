import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient()

type ReactQueryProviderProps = {
    children: ReactNode
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
} 