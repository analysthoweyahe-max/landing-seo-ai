import Image from 'next/image';

export function SiteHeader() {
  return (
          <header
            id='site-header'
            className='site-header fixed top-0 inset-x-0 z-50'
          >
            <div className='mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between'>
              <a href='#hero' className='flex items-center shrink-0'>
                <Image
              src="/logo.webp"
                  alt='هويّة'
                  width={180}
                  height={120}
                  className='h-10 w-auto'
                  priority
                />
              </a>
              <nav className='hidden lg:flex items-center gap-8'>
                <a href='#about' className='nav-link text-[15px]'>
                  من نحن
                </a>
                <a href='#usecases' className='nav-link text-[15px]'>
                  استخدامات الأداة
                </a>
                <a href='#stats' className='nav-link text-[15px]'>
                  الأرقام والإحصائيات
                </a>
                <a href='#pricing' className='nav-link text-[15px]'>
                  الأسعار
                </a>
                <a href='#testimonials' className='nav-link text-[15px]'>
                  آراء العملاء
                </a>
                <a href='#faq' className='nav-link text-[15px]'>
                  الأسئلة الشائعة
                </a>
              </nav>
              <div className='flex items-center gap-3'>
                <a
                  href='#pricing'
                  className='btn btn-primary px-6 py-3 hidden sm:inline-flex'
                >
                  ابدأ الآن
                </a>
                <button
                  id='menu-toggle'
                  aria-label='القائمة'
                  className='lg:hidden w-11 h-11 rounded-full border border-[#ecefe7] bg-white flex items-center justify-center'
                >
                  <svg
                    width='22'
                    height='22'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  >
                    <line x1='3' y1='6' x2='21' y2='6' />
                    <line x1='3' y1='12' x2='21' y2='12' />
                    <line x1='3' y1='18' x2='21' y2='18' />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id='mobile-menu'
              className='mobile-menu lg:hidden bg-white border-t border-[#ecefe7]'
            >
              <nav className='px-5 py-4 flex flex-col gap-1'>
                <a href='#about' className='py-3 text-ink/80 font-semibold'>
                  من نحن
                </a>
                <a href='#usecases' className='py-3 text-ink/80 font-semibold'>
                  استخدامات الأداة
                </a>
                <a href='#stats' className='py-3 text-ink/80 font-semibold'>
                  الأرقام والإحصائيات
                </a>
                <a href='#pricing' className='py-3 text-ink/80 font-semibold'>
                  الأسعار
                </a>
                <a href='#testimonials' className='py-3 text-ink/80 font-semibold'>
                  آراء العملاء
                </a>
                <a href='#faq' className='py-3 text-ink/80 font-semibold'>
                  الأسئلة الشائعة
                </a>
                <a href='#pricing' className='btn btn-primary px-6 py-3 mt-2'>
                  ابدأ الآن
                </a>
              </nav>
            </div>
          </header>
  );
}

