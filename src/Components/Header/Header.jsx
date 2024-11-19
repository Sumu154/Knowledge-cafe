// import PropTypes from 'prop-types';

import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className='w-[85%] mx-auto flex justify-between items-center py-4 border-b-2 border-gray border-opacity-15'>
      <h3 className='text-3xl font-bold'> Knowledge Cafe </h3>
      <img src={profile} alt="" />
    </header>
  );
};



// Header.PropTypes = {
  
// }

export default Header;