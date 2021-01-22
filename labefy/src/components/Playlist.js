// import React from 'react'
// import styled from 'styled-components'
// import axios from 'axios'
// import Criar from './Criar'

// class Playlist extends React.Component{

//     state = {
//         playlists: []
//     }

//     pegarTudo = () => {
//         const request = axios.get(
//             "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
//             {
//                 headers: {
//                     Authorization: "carolaine-viana-epps"
//                 }
//             }
//         );
//         request.then((resposta) => {
//             this.setState({
//                 playlists: resposta.data.result.list
//             })
//             this.props.criarPlaylist();
//             console.log(this.state.playlists)
//         }).catch((error) => {
//             alert('nao foi')
//         })
//     }

//     componentDidMount=()=>{
//         this.pegarTudo()
//     }

//     render(){
//         const playlistRenderizadas = this.state.playlists.map((playlists=>{
//             return <h3>{playlists.name}</h3>
//         }))
//         return(
//             <div>
//                 <h1>PLAYLISTS:</h1>
//                 {playlistRenderizadas}
//             </div>
//         )
//     }

// }

// export default Playlist; 