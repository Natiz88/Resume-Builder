import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import HomePage from '../components/HomePage';
import {useSelector} from 'react-redux';
import type { RootState } from '../redux/store';

export default function Home() {
  // const info = useSelector((state:RootState) => state.counter.value);
  console.log("infoo")
  return (
    <main className="w-full h-full">
      <HomePage />   
      <Link href = "/events">Event</Link>
      <button>Events</button> 
      </main>
  )
}
