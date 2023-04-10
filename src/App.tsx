import { Post } from "./Components/Post";
import { Header } from './Components/Header';

import styles from './App.module.css';

import './global.css'
import { Sidebar } from "./Components/Sidebar";

export function App() {
  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post />
          
        </main>
      </div>
    </div>
  )
}


