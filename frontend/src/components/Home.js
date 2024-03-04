import React from 'react';
import Wallpaper from './Wallpaper';
import Quicksearch from './Quicksearch';
import Header from './Header';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Wallpaper></Wallpaper>
      <Quicksearch></Quicksearch>
    </div>
  )
}
