import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import chart from "../assets/other/organizational_chart.jpg";
import GoogleMap from "../components/GoogleMap";

function ContactPage() {
  return (
    <>
      <Header />
      <div className="container">
        <Section title={"THÔNG TIN LIÊN HỆ NHÓM ÁNH SÁNG TỪ THIỆN"} />
        <GoogleMap />
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Section title={"THÔNG TIN LIÊN HỆ"} />
            <ul>
              <li>
                <p>
                  <strong>
                    Website:
                    <a href="https://anhsangtuthien.com"> www.anhsangtuthien.com</a>
                  </strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>Hotline</strong>
                </p>
                <p>0986.44.99.14 (Tân)</p>
                <p>0934.323.278 (Thảo)</p>
                <p>0983.770.671 (Toàn)</p>
              </li>
              <li>
                <p>
                  <strong>Địa chỉ</strong>: 1647/55 Phạm Thế Hiển P6, Q8, Tp.Hồ
                  Chí Minh.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Telephone:<a href="tel:02866802558"> 028.66.802.558</a>
                  </strong>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Section title={"THÔNG TIN CHUYỂN KHOẢN"} />
            <ul>
              <li>
                <p>
                  <strong>Chuyển khoản:</strong> Chủ Tài Khoản Nguyễn Thanh Tân.
                </p>
              </li>
              <li>
                <p>Ngân hàng Á Châu: 119.743.029 (chi nhánh: Minh Phụng).</p>
              </li>
              <li>
                <p>
                  Ngân hàng Viettinbank: 711A.151.29031 (chi nhánh số 5, Quận
                  5).
                </p>
              </li>
              <li>
                <p>Ngân hàng Sacombank: 0601.0913.4905 (chi nhánh Chợ Lớn).</p>
              </li>
              <li>
                <p>
                  Ngân hàng Vietcombank: 0181.00.33.57.031 (chi nhánh Tp.HCM).
                </p>
              </li>
              <li>
                <p>Ngân hàng Agribank: 6421205182610 (chi nhánh Hùng Vương).</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
