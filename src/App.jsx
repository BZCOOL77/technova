
import './App.css'
import monLogo from './assets/logo1.png'
import catalogue from './assets/catalogue.png'

function App() {
  
  return (
    <div className="app-container">
      <header>
        <h1>Bienvenue sur le site TECHNOVATE</h1>
        <img className="image" src={monLogo} alt="logo" />
        <h2>Solution professionnel pour votre business</h2>
      </header>
      <div className="image-container">
        <img className="image" src={catalogue} alt="catalogue" />
      </div>
      <p>Nous sommes une entreprise de développement web spécialisée dans la création de sites internet et d applications web sur mesure. <br /> Nous offrons des services de qualité pour répondre aux besoins de nos clients, en utilisant les dernières technologies et les meilleures pratiques du développement web.</p>
      <p>Pour votre business, magasin, boutique, école et autre nous fournissons un site en bonne et due forme.</p>
      <p>Pour tous vos sites web nous sommes là :</p>
      <ul>
        <li>Site e-commerce</li>
        <li>Site vitrine</li>
        <li>Site de gestions internes des entreprises</li>
        <li>Application web</li>
      </ul>
      <p id="p1">Personnalisez votre site comme vous voulez avec nous.</p>
      <p id="p2">Nous proposons également des services de maintenance et de support pour garantir la performance et la sécurité de vos sites web.</p>
      <p id="p3">Écrivez-nous sur <a href='mailto:boazmwamba70@gmail.com'>notre email</a> pour plus d informations.</p>
      
      <p id="p4">notre contact : +243 977798524</p>

      <footer>
        <p>© 2024 TECHNOVATE. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App
