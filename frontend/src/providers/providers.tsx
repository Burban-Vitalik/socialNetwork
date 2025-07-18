'use client';

import { ApolloProvider } from '@apollo/client';
import client from 'src/lib/apolloClient';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
