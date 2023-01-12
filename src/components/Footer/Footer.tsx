import style from '../../global.module.scss';
import styleFooter from './Footer.module.scss';
import styleHr from './Footer.module.scss';
import styleSpan from './Footer.module.scss';
import styleHrTop from './Footer.module.scss';
import styleHrBottom from './Footer.module.scss';

export const Footer = () => {
  return(
    <>
      <div className={styleFooter.footer}>
        <div className={style.container}>
          <div className={styleHr.footer_all}>
            <hr className={styleHrTop.footer_hr}></hr>
            <div className={styleSpan.footer_span}>
              <span>© 2022 Global Games. 
                Все права защищены. Все торговые марки являются собственностью 
                соответствующих владельцев.
              </span>
            </div>
            <hr className={styleHrBottom.footer_hr}></hr>
          </div>
        </div>
      </div>
    </>
  );
};