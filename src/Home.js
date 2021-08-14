import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      {/* showcase and newsletter */}
      <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 class="text-light">
                Connecting <span class="text-warning"> Communites </span>
              </h1>
              <p class="lead my-4">
                Out goal is to bring people and institutions together on one
                platform
              </p>
              <button
                class="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Join your Community
              </button>
            </div>
            <img
              class="img-fluid w-50 d-none d-sm-block"
              src="\img\800px_COLOURBOX20314358-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section class="bg-primary text-light p-5">
        <div class="container">
          <div class="d-md-flex justify-content-between align-items-center">
            <h3 class="mb-3 mb-md-0 text-light">Sign Up For Our Newsletter</h3>

            <div class="input-group news-input">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
              />
              <button class="btn btn-dark btn-lg" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <div calssName="widgets"></div>

      {/* boxes */}
      <section class="p-5">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-laptop"></i>
                  </div>
                  <h3 class="card-title mb-3 text-light">Virtual</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-primary text-light">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-secondary text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-person-square"></i>
                  </div>
                  <h3 class="card-title mb-3 text-light">Hybrid</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-people"></i>
                  </div>
                  <h3 class="card-title mb-3 text-light">In Person</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* main content */}
      <div></div>

      {/* carosel */}
      <div calssName="carosel carousel-dark slide mar">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner" magin>
            <div class="carousel-item active">
              <img
                src="https://th.bing.com/th/id/OIP.nCzR0GLJFT8ZRZfjwn5yogHaEK?w=280&h=180&c=7&o=5&pid=1.7"
                class="img-fluid rounded mx-auto width"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://th.bing.com/th/id/OIP.3TrZI4mMaLkDojrLdExN8AHaEK?w=280&h=180&c=7&o=5&pid=1.7"
                class="img-fluid rounded mx-auto width"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="data:image/jpeg;base64,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"
                class="img-fluid rounded mx-auto width"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
