import React, { useState } from 'react';
import classes from '../../styles/components/header/header.module.css';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import '../../styles/App.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import InputField from '../../ui/input/inputfield';
import Search from '../../ui/input/search';
import Button from '../../ui/button/button'
import TikTok from '../../ui/tiktok'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Header = function () {

    const [searchActive, setSearchActive] = useState(false);
    const [loginActive, setLoginActive] = useState(false);
    const [menuActive, setMenuActive] = useState(true);

    function ClickSearch() {
        setSearchActive(!searchActive);
        console.log('search module displaying: ' + searchActive);
    }

    function DisplayLogin() {
        setLoginActive(!loginActive);
        preventScrolling(setLoginActive);
        console.log('login module displaying: ' + searchActive);
    }

    function DisplayMenu() {
        setMenuActive(!menuActive);
        console.log('menu module displaying: ' + menuActive);

        if (menuActive) {
            document.body.classList.add(
                'body-prevent-scrolling'
            );
        }
        else {
            document.body.classList.remove(
                'body-prevent-scrolling'
            );
        }
    }

    function preventScrolling(prophidden) {
        if (prophidden) {
            document.body.classList.remove(classes.stop_scrolling);
            console.log(prophidden + "stop-scrolling");
        }
        else {
            document.body.classList.add(classes.stop_scrolling);
            console.log(prophidden + "stop-scrolling");
        }
    }

    const preventClick = event => {
        event.preventDefault();
        event.stopPropagation();
        // alert('asd');
        // console.log('asdd');
        // return false;
    }

    return (
        <div className={classes.header}>
            <div className={classes.header_container}>
                <ul className={classes.header_container__stuff + ' ' + 'flex_between'}>
                    <div className={classes.logo_navs + ' ' + 'flex'}>
                        <div className={classes.mobile_content}>
                            <li className={classes.nav_item + ' ' + classes.nav_mobile}>
                                <div onClick={DisplayMenu} className={classes.nav_item__button}>
                                    {menuActive ? <MenuRoundedIcon className={classes.nav_mobile_item__button} sx={{ fontSize: 30 }} /> :
                                        <CloseRoundedIcon className={classes.nav_mobile_item__button} sx={{ fontSize: 30 }} />}
                                </div>
                            </li>
                            <li className={classes.nav_item + ' ' + classes.header_logo}>automarket</li>
                            {/*<div className={classes.logo_placeholder}>
                                 <svg className={classes.logo_props}>
                                    <path className={classes.logo}
                                        d="m 0 23.7838 C 1.2936 27.6646 -0.5544 30.991 5.544 32.0998 C 16.632 30.991 7.9834 30.991 26.0568 22.9522 C 24.948 28.7734 21.6216 37.0894 29.9376 39.8614 C 36.036 40.5266 38.808 34.8718 44.352 32.4878 C 54.3312 27.8863 63.2016 22.675 72.072 18.7942 C 75.9528 17.131 77.616 15.4678 77.616 9.9238 C 77.616 8.9998 77.616 8.0758 77.0616 7.1518 C 77.2464 5.3038 77.4312 4.3798 75.9528 3.8254 C 74.2896 3.271 72.072 3.8254 43.2432 17.6854 C 45.2945 12.6958 44.352 15.1351 46.5696 8.2606 C 47.6784 3.8254 46.0152 1.6078 45.6826 1.6078 C 45.4608 1.1088 41.58 -0.6098 38.808 1.0534 C 27.72 6.5974 16.632 12.511 5.544 18.7942 C 3.696 20.4574 0 20.4574 0 23.7838" />
                                </svg> 
                            </div> */}
                            <li className={classes.nav_item + ' ' + classes.nav_mobile}>
                                <NavLink to="/cart">
                                    {/* <div className={classes.nav_item__button}>
                                        <ShoppingCartOutlinedIcon sx={{fontSize: 30}}/>
                                    </div> */}
                                    <div onClick={DisplayLogin} className={classes.nav_item__button}>
                                        <AccountCircleOutlinedIcon className={classes.nav_mobile_item__button} sx={{ fontSize: 30 }} />
                                    </div>
                                </NavLink>
                            </li>
                            {/* <li className={classes.nav_item + ' ' + classes.nav_mobile}><AccountCircleOutlinedIcon /></li> */}
                        </div>
                        <div className={classes.header_container__navbuttons + ' ' + 'flex'}>

                            <li className={classes.nav_item + ' ' + classes.nav_link}>
                                <NavLink to="/" className={({ isActive }) => isActive ? classes.nav_item__active : '' + ' ' + classes.nav_link_additional} end>
                                    <span><span className={classes.nav_item_icon}>🚗</span>Каталог</span>
                                </NavLink>
                                <ul className={classes.site_nav}>
                                    <div className={classes.site_nav_content + ' ' + classes.site_nav__primary}>
                                        <Link to="/">
                                            <li className={classes.site_nav_content__item}>🚗 Купить машину</li>
                                        </Link>
                                        {/* <li className={classes.site_nav_content__item}>🔥 Скидочки</li> */}
                                        <hr className={classes.site_nav_content__separator} />
                                        <li className={classes.site_nav_content__item}>🧺 Продать машину</li>
                                        {/* <hr className={classes.site_nav_content__separator} />
                                        <li className={classes.site_nav_content__item}>📝 Reviews</li> */}
                                    </div>
                                </ul>
                            </li>

                            <li className={classes.nav_item + ' ' + classes.nav_link}>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? classes.nav_item__active : '' + ' ' + classes.nav_link_additional} end>
                                    <span><span className={classes.nav_item_icon}>✍️</span>Контакты</span>
                                </NavLink>
                                <ul className={classes.site_nav}>
                                    <div className={classes.site_nav_content + ' ' + classes.site_nav__primary}>
                                        <li className={classes.site_nav_content__item}>❓ Помощь</li>
                                        <hr className={classes.site_nav_content__separator} />
                                        <a href="https://www.instagram.com/vidi_automarket/"><li className={classes.site_nav_content__item}>🍎 Инстаграм</li></a>
                                        <a href="https://vidi-automarket.com.ua/ua/catalog"><li className={classes.site_nav_content__item}>🥝 Наш фейк</li></a>
                                        <a href="https://www.youtube.com/playlist?list=PL3xNvVz0rJ5TGPTkxc9XoVIte2mIy-IMO"><li className={classes.site_nav_content__item}>🍒 Ютуб</li></a>
                                        <a href="https://www.facebook.com/vidi.automarket"><li className={classes.site_nav_content__item}>🤮 Фейсбук</li></a>
                                        <a href="tg://resolve?domain=autozprobihom"><li className={classes.site_nav_content__item}>📱 Телеграм</li></a>
                                    </div>
                                </ul>
                            </li>

                            <li className={classes.nav_item + ' ' + classes.nav_link}>
                                <NavLink to="/about" className={({ isActive }) => isActive ? classes.nav_item__active : '' + ' ' + classes.nav_link_additional} end>
                                    <span><span className={classes.nav_item_icon}>🗒️</span>О нас</span>
                                </NavLink>
                                <ul className={classes.site_nav}>
                                    <div className={classes.site_nav_content + ' ' + classes.site_nav__primary}>
                                        <a href="https://vidi-automarket.com.ua/ua/about-company/vacancy">
                                            <li className={classes.site_nav_content__item}>🏘️ Компания</li>
                                        </a>
                                        <hr className={classes.site_nav_content__separator} />
                                        <a href="https://vidi-automarket.com.ua/ua/news">
                                            <li className={classes.site_nav_content__item}>📰 Новости </li>
                                        </a>
                                        <a href="https://c.tenor.com/b6ymPWEJEAIAAAAd/cat-dance.gif">
                                            <li className={classes.site_nav_content__item}>👥 Команда</li>
                                        </a>
                                    </div>
                                </ul>
                            </li>


                            <li className={classes.nav_item + ' ' + classes.nav_link}>
                                <NavLink to="/delivery" className={({ isActive }) => isActive ? classes.nav_item__active : '' + ' ' + classes.nav_link_additional} end>
                                    <span><span className={classes.nav_item_icon}>📦</span>Услуги</span>
                                </NavLink>
                                <ul className={classes.site_nav}>
                                    <div className={classes.site_nav_content + ' ' + classes.site_nav__primary}>
                                        <li className={classes.site_nav_content__item}>🛎️ Кредитование</li>
                                        <hr className={classes.site_nav_content__separator} />
                                        <li className={classes.site_nav_content__item}>⏲️ Страховка</li>
                                    </div>
                                </ul>
                            </li>
                        </div>
                    </div>
                    <div className={classes.header_container__navbuttons + ' ' + 'flex'}>
                        <li className={classes.nav_item}>
                            <div onClick={ClickSearch} className={classes.nav_item__button + ' ' + classes.nav_item__search}>
                                <SearchOutlinedIcon sx={{ fontSize: 26 }} />
                            </div>
                        </li>

                        <li className={classes.nav_item}>
                            <NavLink to="/cart" end>
                                <div className={classes.nav_item__button}>
                                    <LocalMallOutlinedIcon sx={{ fontSize: 26 }} />
                                </div>
                            </NavLink>
                        </li>

                        <li className={classes.nav_item}>
                            {/* <NavLink to="/profile" end> */}
                            <NavLink className={classes.nav_item__button} to="login" end>
                                <AccountCircleOutlinedIcon sx={{ fontSize: 26 }} />
                            </NavLink>
                            <ul className={classes.site_nav + ' ' + classes.site_nav_profile}>
                                <div className={classes.site_nav_content}>
                                    <li className={classes.site_nav_content__item}>👤 Profile</li>
                                    <hr className={classes.site_nav_content__separator} />
                                    <li className={classes.site_nav_content__item}>🛒 My Cart</li>
                                    <li className={classes.site_nav_content__item}>❤️ My Likes</li>
                                    <NavLink to="/admin/dashboard/?" className={({ isActive }) => isActive ? classes.site_nav_content__item_active : ''} end>
                                        <li className={classes.site_nav_content__item}>🛠️ Dashboard</li>
                                    </NavLink>
                                    <hr className={classes.site_nav_content__separator} />
                                    <li className={classes.site_nav_content__item}>❌ Sign out</li>
                                </div>
                            </ul>
                            {/* </NavLink> */}
                        </li>
                    </div>
                </ul>
            </div>
            <div className={menuActive ? classes.mobile_menu : classes.mobile_menu_active}>
                <ul className={classes.mobile_menu_container}>
                    <div className={classes.mobile_menu__search}>
                        <Search />
                    </div>

                    <NavLink to="/" className={({ isActive }) => isActive ? classes.nav_item__active : ''} end>
                        <li className={classes.mobile_menu__item}>🛍️ Shop</li>
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => isActive ? classes.nav_item__active : ''} end>
                        <li className={classes.mobile_menu__item}>✍️ Contact</li>
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) => isActive ? classes.nav_item__active : ''} end>
                        <li className={classes.mobile_menu__item}>🗒️ About</li>
                    </NavLink>

                    <NavLink to="/delivery" className={({ isActive }) => isActive ? classes.nav_item__active : ''} end>
                        <li className={classes.mobile_menu__item}>📦 Delivery</li>
                    </NavLink>

                    <NavLink to="/cart" className={({ isActive }) => isActive ? classes.nav_item__active : ''} end>
                        <li className={classes.mobile_menu__item}>🛒 Cart</li>
                    </NavLink>

                    <NavLink to="/profile" className={({ isActive }) => isActive ? classes.nav_item__active : ''} end>
                        <li className={classes.mobile_menu__item}>👤 Profile</li>
                    </NavLink>
                </ul>
                <div className={classes.mobile_socials}>
                    <div className={classes.nav_item__button + ' ' + classes.nav_item__button_social}>
                        <InstagramIcon sx={{ fontSize: 26 }} />
                    </div>

                    <div className={classes.nav_item__button + ' ' + classes.nav_item__button_social}>
                        <PinterestIcon sx={{ fontSize: 26 }} />
                    </div>

                    <div className={classes.nav_item__button + ' ' + classes.nav_item__button_social}>
                        <TikTok />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;