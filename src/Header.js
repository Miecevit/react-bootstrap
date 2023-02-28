import React from 'react';


const Header = () => {
  return (
    <>
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="bootstrap_exp_site.html" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <i className="fa-solid fa-compass-drafting fa-2xl"></i>
          </a>


          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="bootstrap_exp_site.html" className="nav-link px-2 text-secondary">Ana Sayfa</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Eğitimler</a></li>
            <li><a href="bootstrap_form.html" className="nav-link px-2 text-white">Hemen Başvur</a></li>
            <li><a href="#" className="nav-link px-2 text-white">S.S.S.</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Hakkımızda</a></li>
          </ul>


          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark bg-dark text-white" placeholder="Ara..." aria-label="Search" />
          </form>


          <div className="text-end" id="header_sag">
            <div id="btn_div">
              <a href="signin_page.html"><button type="button" className="btn btn-outline-light me-2">Giriş</button></a>
              <a href="signup_page.html"><button type="button" className="btn btn-warning">Kayıt Ol</button></a>
            </div>
          </div>


          <div className="text-end">
            <button id="logout_Btn" type="button" className="btn btn-danger" style={{ display: 'none' }}>Çıkış</button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};


export default Header;