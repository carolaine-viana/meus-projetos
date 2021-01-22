import React from "react";
import axios from "axios";
import styled from 'styled-components'
import './App.css';

const DivMain = styled.div`
  margin: auto;
  width: 500px;
  text-align: center;
  background-color: #2fe68c;
`

const BotaoStyle = styled.div`
  margin: auto;
  width: 140px;
  height: 30px;
  background-color: black;
  color: white;
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: center;
`


export default class App extends React.Component {
  state = {
    playlists: [], //array do nome das playlist
    inputValueplaylist: "", //string p salvar nome playlist nova
    inputNameMusic: '', //string input para salvar musica
    inputArtist: '', //string input salvar string
    inputUrl: '', //string input salvr url
    allTracks: [], //array para salvar todas as musicas
    // ligar: false
  };

//   ligarLista = () =>{
//     this.setState({
//       ligar: !this.state.ligar
//     })
// }

  // ************************************ PLAYLIST *********************************************

  createPlaylist = () => {
    const body = {
      name: this.state.inputValueplaylist
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    );

    request.then((resposta) => {
      alert("Criada com sucesso!");
      this.getAllPlaylists();
      this.setState({ inputValueplaylist: "" });
    })
      .catch((erro) => {
        alert("Nao consegui criar a playlist :(");
      });
  };

  getAllPlaylists = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    );

    request.then((resposta) => {
      this.setState({ playlists: resposta.data.result.list });
    })
      .catch((erro) => {
        alert("Impossivel pegar playlists :(" + erro.message);
      });
  };

  deletePlaylist = (id) => {
    const request = axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    )
    request.then((respondeu) => {
      alert('deletou')
      this.getAllPlaylists()
    }).catch((error) => {
      alert('nao deletou a playlist')
    })
  }

  // ************************************ MUSICAS *********************************************

  addTrackToPlaylist = (event) => {
    const id = event.target.value
    const body = {
      name: this.state.inputNameMusic,
      artist: this.state.inputArtist,
      url: this.state.inputUrl
    };
    const request = axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      body,
      {
        headers: {
          Authorization: "carolaine-viana-epps",
        }
      }
    );
    request.then((respondeu) => {
      alert('musica criada')
    }).catch((erro) => {
      alert('erro ao criar nova musica')
    })
  }


  getPlaylistTracks = (id) => {
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    ).then((res) => {
      this.setState({ allTracks: res.data.result.tracks })
      console.log(res.data.result.tracks)
    }).catch((err) => {
      alert('erro!!!!')
    })
  }

  searchTracks = (id) => {
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    ).then((respondeu) => {
      this.setState({ allTracks: respondeu.data.result.tracks })
    }).catch((error) => {
      alert('nao posso mostrar as musicas :(')
    })
  }

  // removeTrackFromPlaylist = (id) =>{
  //   const request = axios.delete(
  //     `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId`
  //   )
  // }

  // ************************************ DIDMOUNT *********************************************


  componentDidMount = () => {
    this.getAllPlaylists();
  };

  // ************************************ TARGET VALUE *********************************************


  onChangeNamePlaylist = (event) => {
    this.setState({ inputValueplaylist: event.target.value })
  };


  //nome da musica
  onChangeTrackName = (event) => {
    this.setState({ inputNameMusic: event.target.value })
  }

  //nome do artista
  onChangeInputAddArtist = (event) => {
    this.setState({ inputArtist: event.target.value })
  };

  //nome do artista
  onChangeInputAddUrl = (event) => {
    this.setState({ inputUrl: event.target.value })
  };



  // ************************************ RENDER *********************************************

  render() {
    const playlistsRenderizadas = this.state.playlists.map((playlist) => {
      return(
      <DivMain>
        {/* lista de playlit */}
        <strong>{playlist.name}</strong>
        <button onClick={() => { this.searchTracks(playlist.id) }}>Acessar</button>
        <button onClick={() => { this.deletePlaylist(playlist.id) }}>Deletar</button>
      </DivMain>
      )
    });
    const mostrardetalhes = this.state.allTracks.map((detalhes) => {
      return (
        // mostra as musicas
        <div>
          <h1>Musica <img src="https://img.icons8.com/windows/48/000000/sound-cloud-.png"/></h1>
          <p><strong>Artista: </strong>{detalhes.artist}</p>
          <p><strong>Nome da musica: </strong>{detalhes.name}</p>
          <audio controls>
            <source src={detalhes.url} />
          </audio>
        </div>
      )
    })
    return (
      <div>
        <DivMain>
          <h1>Labefy <img src="https://img.icons8.com/doodle/50/000000/spotify.png"/></h1>
          <h2>Criar playlist</h2>
          <input onChange={this.onChangeNamePlaylist} value={this.state.inputValueplaylist} placeholder="Digite o nome da playlist"/>
          <br></br>
          <button onClick={this.createPlaylist}>Criar</button>
          {/* lista de playlists */}
          <h2>Lista de playlists</h2>
          {playlistsRenderizadas}
          {/* adicionar musica */}
          <h2>Adicionar Musica</h2>
          <label>Nome da musica: </label>
          <input value={this.state.inputNameMusic} onChange={this.onChangeTrackName} placeholder="Nome da musica"/>
          <br></br>
          <label>Artista: </label>
          <input value={this.state.inputArtist} onChange={this.onChangeInputAddArtist} placeholder="Nome do artista"/>
          <br></br>
          <label>URL da musica: </label>
          <input value={this.state.inputUrl} onChange={this.onChangeInputAddUrl} placeholder="URL da muica"/>
          {/* lista de playlists */}
          <h2>Adicionar musica a playlist</h2>
          <select onChange={this.addTrackToPlaylist}>
            <option></option>
            {this.state.playlists.map((i) => {
              return (
                <option value={i.id}>{i.name}</option>
              )
            })}
          </select>
          {mostrardetalhes}
        </DivMain>
      </div>
    );
  }
}
