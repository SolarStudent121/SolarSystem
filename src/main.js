
import './styles.scss';
import { registerSW } from 'virtual:pwa-register';
import jQuery from 'jquery';
import * as bootstrap from 'bootstrap'
const $ = jQuery;

const intervalMS = 60 * 60 * 1000;

const updateSW = registerSW({
    onNeedRefresh() {
        document.querySelector("update-btn").ariaHidden = "true";
    },
    onRegisteredSW(swUrl, r) {
        r && setInterval(async () => {
            if (!(!r.installing && navigator))
                return

            if (('connection' in navigator) && !navigator.onLine)
                return

            const resp = await fetch(swUrl, {
                cache: 'no-store',
                headers: {
                    'cache': 'no-store',
                    'cache-control': 'no-cache',
                },
            })

            if (resp?.status === 200)
                await r.update()
        }, intervalMS)
    },
},);
$("update-btn").on('click', updateSW());
document.body.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" role="navigation">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="/assets/icons/favicon.ico" alt="Logo" width="40" height="40"
                        class="d-inline-block align-text-left p-1">SolarSystem</a>

        <div class="collapse navbar-collapse" id="navlink">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/index.html/#contents">Contents</a>
            </li>
            <li class="nav-item d-flex">
                <button class="btn btn-primary" hidden="true" id="update_btn" aria-hidden="true">Update</button>
            </li>
          </ul>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navlink"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <div class="container.fluid p-2 pt-5 my-2" id="root">
      <div id="Welcome" align="center">
        <br>
        <br>
        <br>
        <h1 class="display-2"><b>SolarSystem</b></h1>
        <h3 class="lead">Learn about the sun, planets and many other celestial bodies in the Solar System.</h3>
      </div>
      <div id="contents">
        <br>
        <hr class="border border-primary border-3 opacity-75">
        <br>
        <h2 class="display-4">Contents:</h2>
        <br>
        <div class="list-group list-group-flush">
          <button class="list-group-item list-group-item-action" id="1">
            <h3>The Sun</h3>
          </button>
          <a class="list-group-item list-group-item-action" id="2">
            <h3>Mercury</h3>
          </a>
          <a class="list-group-item list-group-item-action" id="3">
            <h3>Venus</h3>
          </a>
          <a class="list-group-item list-group-item-action" id="4">
            <h3>Earth</h3>
          </a>
          <a class="list-group-item list-group-item-action" id="5">
            <h3>Mars</h3>
          </a>
          <a class="list-group-item list-group-item-action" id="6">
            <h3>Jupiter</h3>
          </a>
          <a class="list-group-item list-group-item-action" id="7">
            <h3>Saturn</h3>
          </a>
          <a class="list-group-item list-group-item-action" id="8">
            <h3>Uranus</h3>
          </a>
          <a class="list-group-item list-group-item-action" id="9">
            <h3>Neptune</h3>
          </a>
          <a class="list-group-item list-group-item-action" id="10">
            <h3>Pluto</h3>
          </a>
        </div>
      </div>
    </div>`

$("#1").on('click', () => $("#root").load("./content/1.html"));
$("#2").on('click', () => $("#root").load("./content/2.html"));
$("#3").on('click', () => $("#root").load("./content/3.html"));
$("#4").on('click', () => $("#root").load("./content/4.html"));
$("#5").on('click', () => $("#root").load("./content/5.html"));
$("#6").on('click', () => $("#root").load("./content/6.html"));
$("#7").on('click', () => $("#root").load("./content/7.html"));
$("#8").on('click', () => $("#root").load("./content/8.html"));
$("#9").on('click', () => $("#root").load("./content/9.html"));
$("#10").on('click', () => $("#root").load("./content/10.html"));
