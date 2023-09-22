import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed top-0 left-0 z-10 w-full duration-300 ease-in'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='text-4xl font-bold'>
            MRCC
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/'>الصفحة الرئيسية</Link>
          </li>
          <li className='p-4 hover:text-orange-300' style={{    fontFamily: 'Raleway'}}>

          <button onClick={toggleLanguage}>
            {isEnglish ? 'تبديل إلى الإنجليزية' : 'تبديل إلى العربية'}
          </button>
          <Link href={isEnglish ? '/indexar' : '/'}>
            {isEnglish ? 'العربية' : 'الإنجليزية'}
          </Link>
          </li>
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/about'>معلومات عنا</Link>
          </li>
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/بروفايل شركة ضخور المدينه للمقاولات.pdf'>ملف الشركة</Link>
          </li>
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/project'>المشروعات</Link>
          </li>
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/resources'>المصادر</Link>
          </li>
          <li className='p-4 hover:text-orange-300' style={{ fontFamily: 'Raleway' }}>
            <Link href='/contact'>اتصل بنا</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='z-10 block sm:hidden'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>الصفحة الرئيسية</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#about'>معلومات عنا</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/project'>المشروعات</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/resources'>المصادر</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>اتصل بنا</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
