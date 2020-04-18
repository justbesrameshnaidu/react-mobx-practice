import React from 'react';
import { observer } from 'mobx-react'
import './App.css';
import trackStore, { TrackStore } from './trackStore';
import userStore from './userStore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Radhey Krishna Govinda Gopala, Vrindavanchandra, Gopi natha, Hare Krishna , Sita Rama...
        </p>
        <a
          className="App-link"
          href="https://www.google.com/search?q=radha+krishna+gopi&tbm=isch&ved=2ahUKEwimheD0qO_oAhU47zgGHXeTCfsQ2-cCegQIABAA&oq=radha+krishna+&gs_lcp=CgNpbWcQARgAMgQIIxAnMgQIABBDMgQIABBDMgQIABBDMgIIADIECAAQQzIECAAQQzIECAAQQzICCAAyBAgAEENQ8kxY8kxg51hoAHAAeACAAXKIAXKSAQMwLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ7gBAQ&sclient=img&ei=-Y2ZXuakDbje4-EP96am2A8&bih=754&biw=1536#imgrc=40JZavrhxOKFKM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Radha Krishna Gopi
        </a>
      {/* <button onClick={testTodoStore}>Radhey</button> */}
        {/* {observableTesing()}
        <button onClick={nameChange}>Radhey</button> */}
      </header>
    </div>
  );
}



  const nameChange = () => {
    console.log(userStore.me)
    userStore.me = "krishna";
    console.log(userStore.me)
  }

  const observableTesing = () => {
    console.log(userStore.me)
    userStore.me = "Radha";
    console.log(userStore.me)

    return (
      <>
        <h1>Mohan Das</h1>
        <h2>{userStore.me}</h2>
        {/* <TrackStore></TrackStore> */}
      </>
    )
}

export default App;
