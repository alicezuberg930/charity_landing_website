import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { importAll } from "../utils/import_img";
const images = importAll(
  require.context("../assets/design_image", false, /\.(png|jpe?g|svg)$/)
);

function DesignPage() {
  return (
    <>
      <Header />
      <div className="container">
        <Section
          title={"NHẬN THIẾT KẾ TỜ RƠI, BROCHURE, BANNER, ALBUM, QUẢNG CÁO"}
        />
        <div className="row mt-3 mb-3">
          <div className="col small-12 large-12">
            <div className="col-inner image-container-2">
              <img
                src={images["canh-en-mua-xuan-2016.jpg"]}
                alt="canh-en-mua-xuan-2016"
                width={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col small-12 large-12">
            <div className="col-inner image-container-2">
              <img src={images["chao.jpg"]} width={"100%"} />
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col small-12 large-12">
            <div className="col-inner image-container-2">
              <img src={images["cung-be-den-truong-a.jpg"]} width={"100%"} />
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col small-12 large-12">
            <div className="col-inner image-container-2">
              <img
                src={images["Mua-He-Yeu-Thuong-2018-1400x700.jpg"]}
                width={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col small-12 large-12">
            <div className="col-inner image-container-2">
              <img src={images["tiep-suc-tri-thuc.jpg"]} width={"100%"} />
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col small-12 large-12">
            <div className="col-inner image-container-2">
              <img src={images["vu-lan-trang.jpg"]} width={"100%"} />
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col small-12 large-12">
            <div className="col-inner image-container-2">
              <img
                src={images["vui-mua-trung-thu-1400x653.jpg"]}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DesignPage;
