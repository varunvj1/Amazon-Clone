import React from 'react'
import './Header.css'

//Matrial-ui Search icon
import SearchIcon from '@material-ui/icons/Search';

//Matrial-ui Shopping cart icon
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="logo" />

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className='header__optionCart'>
                    <span className='header__optionLineOne header__cartCount'> 0 </span>
                    <span className='header__optionLineTwo'>
                        <ShoppingCartIcon />
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Header
