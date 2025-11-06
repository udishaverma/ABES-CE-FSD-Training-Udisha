import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import image from './assets/Images/fairy.png';
function App() {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <img src={image} height={60} width={60} alt="fairy" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Search"></input>
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <button type="button" class="btn btn-warning">Warning</button>
      <div class="cards">
        <div class="card" style={{ width: '400px' }}>
          <img class="card-img-top" src={image} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title">Angel 1</h4>
            <p class="card-text">Me</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div class="card" style={{ width: '400px' }}>
          <img class="card-img-top" src={image} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title">Angel 2</h4>
            <p class="card-text">Myself</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div class="card" style={{ width: '400px' }}>
          <img class="card-img-top" src={image} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title">Angel 3</h4>
            <p class="card-text">& I</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
