import React from 'react';
import styled from 'styled-components';
import MoviesCss from '../Movies/MoviesCss.css';
import Register from '../Register/Register';
import Button from '@material-ui/core/Button';

const Botao = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    background-color: #F43E3D;
    color: white;
    font-size: 1rem;
    margin-top: 5px;
`

const Movies = () =>{
    return(
        <div className="conteiner">
           <div className="card">
               <Register
                    titulo="Enter The Void"
                    diretor="Gaspar Noé"
                    categoria="Drama/Fantasia"
                    ano="2019"
                    imagem={"https://a.ltrbxd.com/resized/film-poster/2/9/0/4/1/29041-enter-the-void-0-230-0-345-crop.jpg?k=6ecc6c314e"}
               />
               <Botao>ASSISTIR</Botao>
           </div>
           
           <div className="card">
               <Register
                titulo="Simon Killer"
                diretor="Antonio Campos"
                categoria="Drama/Suspense"
                ano="2012"
                imagem={"https://m.media-amazon.com/images/M/MV5BMTM4MzU2ODMxNV5BMl5BanBnXkFtZTcwNDk1MDE3OA@@._V1_.jpg"}
               />
                <Botao>ASSISTIR</Botao>
           </div>

           <div className="card">
               <Register
                titulo="Prisoners"
                diretor="Dennis Villeneuve"
                categoria="Crime/Drama/Mistério/Suspense"
                ano="2013"
                imagem={"https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg"}
               />
                 <Botao>ASSISTIR</Botao>
           </div>
           <div className="card">
               <Register
                titulo="Queen and Slim"
                diretor="Melina Matsoukas"
                categoria="Crime/Drama/Romance"
                ano="2019"
                imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTri-cYP2sR-ldpHwL8fgHdQ4iaCTgu72_mA&usqp=CAU"}
               />
                <Botao>ASSISTIR</Botao>
           </div>

           <div className="card">
               <Register
                titulo="Nothing bad can happen"
                diretor="Ketrin Gebbe"
                categoria="Crime/Drama/Terror/Suspense"
                ano="2013"
                imagem={"https://m.media-amazon.com/images/M/MV5BMTQzOTAxNDcxNF5BMl5BanBnXkFtZTgwNzE0ODM5MTE@._V1_.jpg"}
               />
               <Botao>ASSISTIR</Botao>
           </div>

           <div className="card">
               <Register
                titulo="Parasite"
                diretor="Bong Joon Ho"
                categoria="Comédia/Drama/Suspense"
                ano="2019"
                imagem={"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"}
               />
               <Botao>ASSISTIR</Botao>
           </div>

           <div className="card">
               <Register
                titulo="Closet Monster"
                diretor="Stephen Dunn"
                categoria="Drama/Fantasia/Misterio"
                ano="2015"
                imagem={"https://m.media-amazon.com/images/M/MV5BMTg5MTM3ODMxOF5BMl5BanBnXkFtZTgwNzg3NzAyOTE@._V1_.jpg"}
               />
               <Botao>ASSISTIR</Botao>
           </div>

           <div className="card">
               <Register
                titulo="Baby Driver"
                diretor="Edgar Wright"
                categoria="Crime/Drama/Música/Suspense"
                ano="2015"
                imagem={"https://i.pinimg.com/originals/25/0b/8a/250b8ad47d92ba9d7d6ffeaee380afed.jpg"}
               />
               <Botao>ASSISTIR</Botao>
           </div>

           <div className="card">
               <Register
                titulo="The Wailing"
                diretor="Hong-jin Na"
                categoria="Terror/Misterio/Suspense"
                ano="2016"
                imagem={"https://m.media-amazon.com/images/M/MV5BODkwMTgxNjA2NF5BMl5BanBnXkFtZTgwMDc0OTcwOTE@._V1_.jpg"}
               />
               <Botao>ASSISTIR</Botao>
           </div>

        </div>
        
    )
}

export default Movies;