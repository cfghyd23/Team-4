import React from "react";
import Header from "./Header";

export default function Carousel() {
  return (
    <div>
      <Header />
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://static.wixstatic.com/media/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg/v1/fill/w_1372,h_1023,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg "
              class="d-block w-100"
              alt="https://static.wixstatic.com/media/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg/v1/fill/w_1372,h_1023,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg "
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Intern-Volunteer Helping Nature</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://static.wixstatic.com/media/2cdbfc_81772f33ec23481cb244b78229811afd~mv2.jpeg/v1/fit/w_916,h_672,q_90/2cdbfc_81772f33ec23481cb244b78229811afd~mv2.jpeg "
              class="d-block w-100"
              alt="https://static.wixstatic.com/media/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg/v1/fill/w_1372,h_1023,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg "
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Falicitation</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://static.wixstatic.com/media/2cdbfc_047bae773ad14937817e4bee047c46c3~mv2.jpg/v1/fit/w_1072,h_687,q_90/2cdbfc_047bae773ad14937817e4bee047c46c3~mv2.jpg"
              class="d-block w-100"
              alt="https://static.wixstatic.com/media/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg/v1/fill/w_1372,h_1023,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg "
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Fund-raising Falicitation</h5>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
