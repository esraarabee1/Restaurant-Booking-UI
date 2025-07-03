import "../style/footer.css";
import {
  BsFacebook,
  BsWhatsapp,
  BsMessenger,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <ul className="list social-icons">
              <li className="icon-item">
                <BsFacebook />
              </li>
              <li className="icon-item">
                <BsWhatsapp />
              </li>
              <li className="icon-item">
                <BsMessenger />
              </li>
              <li className="icon-item">
                <BsTwitter />
              </li>
              <li className="icon-item">
                <BsYoutube />
              </li>
            </ul>
            <p className="footer-phone">📞 +20 100 123 4567</p>
          </div>
          <div className="footer-section">
            <ul className="list">
              <li>من نحن</li>
              <li>سياسة الخصوصية</li>
              <li>الشروط والأحكام</li>
              <li>تواصل معنا</li>
            </ul>
          </div>
          <div className="footer-section">
            <ul className="list">
              <li>الرئيسية</li>
              <li>المطاعم</li>
              <li>المناسبات</li>
              <li>المقالات</li>
            </ul>
          </div>
        </div>
        <p className="footer-copy">
          © 2025 جميع الحقوق محفوظة - موقع دليل المطاعم
        </p>
      </div>
    </footer>
  );
};

export default Footer;
