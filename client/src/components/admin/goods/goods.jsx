import React from 'react';
import classes from './goods.module.css';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const Goods = function () {
    return (
        <div className={classes.container}>

            <div className={classes.container_goods__card}>
                <div className={classes.container_goods__card_container}>
                    <p className={classes.card_title}>235</p>
                    <p className={classes.card_subtitle}>Total count</p>
                </div>
                <div className={classes.container_goods__card_container}>
                    <div className={classes.container_goods__card_image}>
                        <Inventory2OutlinedIcon sx={{ fontSize: 26 }} />
                    </div>
                </div>
            </div>

            
            <div className={classes.container_goods__card} style={{backgroundColor: '#EA4C89'}}>
                <div className={classes.container_goods__card_container}>
                    <p className={classes.card_title}>1251</p>
                    <p className={classes.card_subtitle}>Total reviews</p>
                </div>
                <div className={classes.container_goods__card_container}>
                    <div className={classes.container_goods__card_image} style={{color: '#EA4C89'}}>
                        <Inventory2OutlinedIcon sx={{ fontSize: 26 }} />
                    </div>
                </div>
            </div>

            <div className={classes.container_goods__card} style={{backgroundColor: '#FA6536'}}>
                <div className={classes.container_goods__card_container}>
                    <p className={classes.card_title}>2642</p>
                    <p className={classes.card_subtitle}>Total favs</p>
                </div>
                <div className={classes.container_goods__card_container}>
                    <div className={classes.container_goods__card_image} style={{color: '#FA6536'}}>
                        <Inventory2OutlinedIcon sx={{ fontSize: 26 }} />
                    </div>
                </div>
            </div>

            <div className={classes.container_goods__card} style={{backgroundColor: '#5CC858'}}>
                <div className={classes.container_goods__card_container}>
                    <p className={classes.card_title}>163</p>
                    <p className={classes.card_subtitle}>Total orders</p>
                </div>
                <div className={classes.container_goods__card_container}>
                    <div className={classes.container_goods__card_image} style={{color: '#5CC858'}}>
                        <Inventory2OutlinedIcon sx={{ fontSize: 26 }} />
                    </div>
                </div>
            </div>

            <div className={classes.container__goods + " " + classes.goods_overview}>
                <p className={classes.container_goods_title}>Goods overview</p>
            </div>

            <div className={classes.container__goods}>
                <p className={classes.container_goods_title}>Goods creating</p>
            </div>

            <div className={classes.container__goods}>
                <p className={classes.container_goods_title}>Goods stats</p>
                <div className={classes.container_goods_overview_content}>
                    <div className={classes.goods_overview_content}>
                        <div className={classes.goods_overview__item}>
                            <div className={classes.item_title_container}>
                                <span className={classes.item_title}>0 </span>
                                <Inventory2OutlinedIcon sx={{ fontSize: 26 }} />
                            </div>
                            <div className={classes.item_subtitle}>
                                Total count
                            </div>
                        </div>

                        <div className={classes.goods_overview__item}>
                            <div className={classes.item_title_container}>
                                <span className={classes.item_title}>0 </span>
                                <EditOutlinedIcon sx={{ fontSize: 26 }} />
                            </div>
                            <div className={classes.item_subtitle}>
                                Total reviews
                            </div>
                        </div>

                        <div className={classes.goods_overview__item}>
                            <div className={classes.item_title_container}>
                                <span className={classes.item_title}>0 </span>
                                <FavoriteBorderOutlinedIcon sx={{ fontSize: 26 }} />
                            </div>
                            <div className={classes.item_subtitle}>
                                Total favs
                            </div>
                        </div>

                        <div className={classes.goods_overview__item}>
                            <div className={classes.item_title_container}>
                                <span className={classes.item_title}>0 </span>
                                <ShoppingBasketOutlinedIcon sx={{ fontSize: 26 }} />
                            </div>
                            <div className={classes.item_subtitle}>
                                Total orders
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goods;