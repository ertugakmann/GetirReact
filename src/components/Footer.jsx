import React from "react";

function Footer() {
  return (
    <div className="w-full h-96 bg-white mt-14 shadow-lg flex justify-center ">
      <div className="grid gap-x-16 grid-cols-5 mt-10">
        <div className="col-span-1 flex flex-col gap-y-5">
          <h2 className="text-lg text-brand-color tracking-wide">
            Getir'i İndirin
          </h2>
          <a href="#">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </a>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg text-brand-color tracking-wide">
            Getir'i İndirin
          </h2>
          <ul className="space-y-3 mt-3">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Kariyer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Teknoloji Kariyerleri
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                İletişim
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Sosyal Sorumluluk Projeleri
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Basın Bültenleri
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg text-brand-color tracking-wide">
            Yardıma mı ihtiyacın var?
          </h2>
          <ul className="space-y-3 mt-3">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Sıkça Sorulan Sorular
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Kişisel Verilerin Korunması
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Gizlilik Politikası
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Kullanım Koşulları
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Çerez Politikası
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                İşlem Rehberi
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg text-brand-color tracking-wide">
            İş Ortağımız Ol
          </h2>
          <ul className="space-y-3 mt-3">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Bayimiz Olun
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Deponu Kirala
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                GetirYemek Restoranı Olun
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                GetirÇarşı Mağazası Olun
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-opacity-100 text-sm"
              >
                Zincir Restoranlar
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <div className=" flex justify-center items-center">
            <div className="w-24 h-24 bg-whitesmoke ">
              <a href="#">
                <img src="https://cdn.getir.com/getirweb-images/common/etbis.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
