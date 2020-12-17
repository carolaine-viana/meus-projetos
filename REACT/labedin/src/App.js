import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardLinguage from './components/CardLinguage/CardLinguage';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>DADOS PESSOAIS</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQH6Scf-czryxA/profile-displayphoto-shrink_200_200/0/1595620231176?e=1613606400&v=beta&t=j4a4t7WfmOJsBZagwySgLRPjlBexwKAhy-Zhlfn2AL4" 
          nome="Carolaine Viana" 
          descricao="Oi, eu sou a Carolaine, tenho 23 anos, e moro no estado do Espirito Santo."
        /> 
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem = "https://img.icons8.com/windows/32/000000/email-open.png"
          email="carolsantos14@hotmail.com"
          imagem2 = "https://img.icons8.com/pastel-glyph/64/000000/home.png"
          endereco="RUA ABC"
          telefone = "27-995086910"
          imagem3 = "https://img.icons8.com/dotty/80/000000/iphone.png"
        />
      </div>

    <div className="page-section-container">
      <h2>IDIOMAS</h2>
      <CardLinguage
        idiomas = "Ingles"
        nivel = "Intermediário"
        imagem = "https://img.icons8.com/plasticine/100/000000/around-the-globe.png"
      />
    </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://img.icons8.com/color/48/000000/computer-support.png" 
          nome="Time Now Engenharia" 
          descricao="Suporte N1."
        />

        <CardGrande 
          imagem="https://img.icons8.com/dusk/64/000000/woman-at-computer.png" 
          nome="Analista de processos ITIL" 
          descricao="Analise e aplicabilidade de metodologias ITIL para a empresa VALE." 
        />

        <CardGrande
        imagem="https://img.icons8.com/bubbles/64/000000/train.png"
        nome="Alta Rail Technology"
        descricao="Leitura de logs, lançamento de relátorios de SLA."
        />
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
        <ImagemButton
          imagem = "https://img.icons8.com/cute-clipart/64/000000/github.png"
          texto="GitHub"
        />       
      </div>
    </div>
  );
}

export default App;
