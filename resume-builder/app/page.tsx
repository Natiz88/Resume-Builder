import Image from 'next/image';
import Button from '@mui/material/Button';
import HomePage from '../components/HomePage';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full h-full">
      <HomePage />   
      <Link href = "/events">Event</Link>
      <button>Events</button> 
      </main>
  )
}
