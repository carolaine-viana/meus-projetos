// import React from "react";
// import axios from "axios";

// export default class Criar extends React.Component {
//   state = {
//     playlists: [],
//     valorInput: ""
//   };

//   guardaNomePlaylist = (event) => {
//     this.setState({ valorInput: event.target.value });
//   };

//   criaPlaylist = () => {
//     const body = {
//       name: this.state.valorInput
//     };

//     const request = axios.post(
//       "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
//       body,
//       {
//         headers: {
//           Authorization: "lais-petra-mello"
//         }
//       }
//     );

//     request
//       .then((resposta) => {
//         alert("Criada com sucesso!");
//         this.pegarPlaylists();
//         this.setState({ valorInput: "" });
//       })
//       .catch((erro) => {
//         alert("Nao consegui criar a playlist :(");
//       });
//   };

//   pegarPlaylists = () => {
//     const request = axios.get(
//       "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
//       {
//         headers: {
//           Authorization: "carolaine-viana-epps"
//         }
//       }
//     );

//     request
//       .then((resposta) => {
//         this.setState({ playlists: resposta.data.result.list });
//       })
//       .catch((erro) => {
//         alert("Impossivel pegar playlists :(" + erro.message);
//       });
//   };

//   componentDidMount = () => {
//     this.pegarPlaylists();
//   };

//   render() {
//     const playlistsRenderizadas = this.state.playlists.map((playlist) => {
//       return <p>{playlist.name}</p>;
//     });

//     return (
//       <div className="App">
//         <h1>Criar playlist</h1>
//         <input
//           onChange={this.guardaNomePlaylist}
//           value={this.state.valorInput}
//         />
//         <button onClick={this.criaPlaylist}>Criar playlist!</button>
//         <h1>Lista de playlists</h1>
//         {playlistsRenderizadas}
//       </div>
//     );
//   }
// }
