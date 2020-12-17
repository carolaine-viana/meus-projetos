import React from 'react';
import './App.css';
import Post from './components/Post/Post';
//import SavePost from './components/savePost/SavePost;

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Carolaine'}
          fotoUsuario={'https://picsum.photos/50/50/?blur'}
          fotoPost={'https://picsum.photos/200/150/?blur=2'}
        />
        <Post
          nomeUsuario={'Joselindo'}
          fotoUsuario={'https://picsum.photos/50/50.jpg'}
          fotoPost={'https://picsum.photos/seed/picsum/200/150'}
        />
        <Post
          nomeUsuario={'Douglas Manson'}
          fotoUsuario={'https://picsum.photos/id/237/200/300'}
          fotoPost={'https://picsum.photos/id/237/200/150'}
        />
      </div>
    );
  }
}

export default App;
