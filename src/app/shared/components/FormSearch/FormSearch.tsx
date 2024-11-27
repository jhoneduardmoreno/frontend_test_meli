'use client';
import { useState, FormEvent } from 'react';
import styles from './FormSearch.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const FormSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/items?search=${searchQuery}`);
  };

  return (
    <form 
      role="search"
      aria-label="Formulario de búsqueda"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <label htmlFor="search-input" className={styles.label}>
        Búsqueda
      </label>
      <input
        id="search-input"
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Nunca dejes de buscar"
        className={styles.input}
        aria-label="Campo de búsqueda"
      />
      <button
        type="submit"
        aria-label="Realizar búsqueda"
        className={styles.button}
      >
        <Image 
          src="/assets/search_small.png"
          alt="Buscar"
          width={20}
          height={20}
          aria-hidden="true"
          className={styles.icon}
          priority
        />
      </button>
    </form>
  );
};
