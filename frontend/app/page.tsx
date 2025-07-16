'use client';
import { ApolloProvider, useMutation } from '@apollo/client';
import { CREATE_USER } from './mutations/createUser';
import { useState } from 'react';
import client from './lib/apolloClient';

export default function Home() {
  const [createUser] = useMutation(CREATE_USER);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
          },
        },
      });
      console.log('Користувач створений:', data.createUser);
    } catch (error) {
      console.error('Помилка при створенні користувача:', error);
    }
  };

  return (
    <ApolloProvider client={client}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Зареєструватися</button>
      </form>
    </ApolloProvider>
  );
}
