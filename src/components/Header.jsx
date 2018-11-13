import React from 'react';
import { ENTER_KEY } from '../constants';

const Header = ({addItem}) =>
  <header className='header'>
    <input className='new-todo'
           autoFocus='true'
           placeholder='What issue needs to be corrected ?'
           onKeyDown={e => {
              if (e.which === ENTER_KEY) {
                const text = e.target.value.trim();
                e.target.value = '';
                if (text) {
                  addItem(text);
                }
              }
           }} />
  </header>;

export default Header;
