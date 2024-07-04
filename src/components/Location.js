import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

function Location() {
    const { currency, dispatch } = useContext(AppContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const currencyMap = {
      '$': '$ Dollar',
      '£': '£ Pound',
      '€': '€ Euro',
      '₹': '₹ Rupee'
  };
  
    const handleCurrencyChange = (selectedCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
        setDropdownOpen(false); // Close dropdown after selection
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className='dropdown'>
            <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                id='currencyDropdownButton'
                onClick={toggleDropdown}
                style={{ backgroundColor: '#d4edda', border: 0 }}
            >
                Currency ({currencyMap[currency]})
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby='currencyDropdownButton' style={{ backgroundColor: '#d4edda' }}>
                <button className='dropdown-item' 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ffffff'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => handleCurrencyChange('$')}>
                    $ Dollar
                </button>
                <button style={{ backgroundColor: '#d4edda', border: 0 }} className='dropdown-item' 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ffffff'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => handleCurrencyChange('£')}>
                    £ Pound
                </button>
                <button style={{ backgroundColor: '#d4edda', border: 0 }}  className='dropdown-item' 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ffffff'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => handleCurrencyChange('€')}>
                    € Euro
                </button>
                <button style={{ backgroundColor: '#d4edda', border: 0 }}  className='dropdown-item' 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ffffff'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => handleCurrencyChange('₹')}>
                    ₹ Rupee
                </button>
            </div>
        </div>
    );
}

export default Location;
