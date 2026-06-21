import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className='relative overflow-hidden bg-[#0f140f] text-white'>
      <div
        className='swirl-watermark -left-20 -top-20 w-[520px] h-[520px]'
        style={{ opacity: '0.04' }}
      ></div>
      <div className='relative border-b border-white/10'>
        <div className='glow w-[520px] h-[520px] -top-40 left-1/2 -translate-x-1/2 opacity-40'></div>
        <div
          className='layer-content mx-auto max-w-7xl px-5 lg:px-8 py-14 lg:py-20 text-center'
          data-anim='fade-up'
        >
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.3]'>
            جاهز لترفع موقعك إلى صدارة نتائج البحث؟
          </h2>
          <p className='mt-5 text-lg text-white/70'>
            انضم إلى آلاف المتاجر والمواقع العربية التي تنمو مع هويّة. ابدأ
            مجاناً اليوم.
          </p>
          <a
            href='#pricing'
            className='btn btn-primary px-10 py-4 mt-9 text-lg cta-pulse'
          >
            ابدأ الآن
          </a>
        </div>
      </div>
      {/* <div className='relative layer-content mx-auto w-full max-w-7xl px-5 lg:px-8 py-12 lg:py-14'>
        <div className='grid gap-10 lg:gap-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]'>                <div>
          <Image
            src='/logo.webp'
            alt='هويّة'
            width={180}
            height={120}
            className='h-10 w-auto bg-white rounded-xl p-1.5'
          />
          <p className='mt-5 text-white/65 leading-relaxed max-w-sm'>
            منصة ذكية لتحسين محركات البحث، تساعد المتاجر والمواقع العربية
            على النمو والوصول لعملائها بثقة وأمان.
          </p>
          <div className='mt-6 flex items-center gap-3'>
            <a
              href='#'
              aria-label='X'
              className='w-10 h-10 rounded-full bg-white/8 hover:bg-primary hover:text-[#14210a] flex items-center justify-center transition-colors'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
              </svg>
            </a>
            <a
              href='#'
              aria-label='LinkedIn'
              className='w-10 h-10 rounded-full bg-white/8 hover:bg-primary hover:text-[#14210a] flex items-center justify-center transition-colors'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17V9.99H6V17h2.34zM7.17 8.96a1.36 1.36 0 100-2.72 1.36 1.36 0 000 2.72zM18 17v-3.84c0-2.05-1.1-3-2.56-3-1.18 0-1.71.65-2 1.11V9.99H11.1V17h2.34v-3.9c0-.94.18-1.85 1.34-1.85 1.14 0 1.16 1.07 1.16 1.91V17H18z' />
              </svg>
            </a>
            <a
              href='#'
              aria-label='Instagram'
              className='w-10 h-10 rounded-full bg-white/8 hover:bg-primary hover:text-[#14210a] flex items-center justify-center transition-colors'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <rect x='3' y='3' width='18' height='18' rx='5' />
                <circle cx='12' cy='12' r='4' />
                <circle
                  cx='17.5'
                  cy='6.5'
                  r='1'
                  fill='currentColor'
                  stroke='none'
                />
              </svg>
            </a>
          </div>
        </div>
          <div>
            <h4 className='font-extrabold mb-4'>المنصة</h4>
            <ul className='space-y-3 text-white/65'>
              <li>
                <a
                  href='#usecases'
                  className='hover:text-primary transition-colors'
                >
                  استخدامات الأداة
                </a>
              </li>
              <li>
                <a
                  href='#usecases'
                  className='hover:text-primary transition-colors'
                >
                  كيف تعمل
                </a>
              </li>
              <li>
                <a
                  href='#stats'
                  className='hover:text-primary transition-colors'
                >
                  الإحصائيات
                </a>
              </li>
              <li>
                <a
                  href='#pricing'
                  className='hover:text-primary transition-colors'
                >
                  الأسعار
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-extrabold mb-4'>الشركة</h4>
            <ul className='space-y-3 text-white/65'>
              <li>
                <a
                  href='#about'
                  className='hover:text-primary transition-colors'
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href='#testimonials'
                  className='hover:text-primary transition-colors'
                >
                  آراء العملاء
                </a>
              </li>
              <li>
                <a
                  href='#faq'
                  className='hover:text-primary transition-colors'
                >
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
          <div className='md:col-span-2 lg:col-span-1'>
            <h4 className='font-extrabold mb-4'>موثوقون رسمياً</h4>
            <div className='rounded-2xl bg-white p-4 inline-flex max-w-full'>
              <Image
                src='/ministry-commerce-certification 1.png'
                alt='موثق لدى وزارة التجارة والاستثمار'
                width={301}
                height={153}
                className='h-16 w-auto'
              />
            </div>
            <div className='mt-4 space-y-1.5 text-sm text-white/70'>
              <p className='flex items-center gap-2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#a0cd39'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='20 6 9 17 4 12' />
                </svg>
                علامة تجارية مسجلة برقم 181546
              </p>
              <p className='flex items-center gap-2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#a0cd39'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='20 6 9 17 4 12' />
                </svg>
                موثق لدى وزارة التجارة والاستثمار
              </p>
            </div>
          </div>
        </div>

      </div> */}

      <div className='relative border-t border-white/10'>
      

        <div className='mx-auto max-w-7xl px-3 py-6 lg:px-8' dir='rtl'>
          <div className='grid grid-cols-1 items-start gap-16 md:grid-cols-3'>

            <div>
              <h5 className='mb-4 text-base font-extrabold text-white'>مكاتبنا</h5>
              <div className='space-y-3 text-sm text-white/65'>
                <p className='flex items-start gap-2.5'>
                  <svg className='mt-0.5 h-4 w-4 shrink-0 text-primary' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                  </svg>
                  <span><strong className='font-bold text-white/90'>مكتب تركيا:</strong> الفاتح مقابل مول هستوريا</span>
                </p>
                <p className='flex items-start gap-2.5'>
                  <svg className='mt-0.5 h-4 w-4 shrink-0 text-primary' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                  </svg>
                  <span><strong className='font-bold text-white/90'>مكتب سلطنة عُمان:</strong> بركاء شارع السوق</span>
                </p>
              </div>
            </div>

            <div className='flex flex-col items-center text-center'>
              <div className='inline-flex rounded-2xl bg-white p-3'>
                <Image
                  src='/ministry-commerce-certification 1.png'
                  alt='موثق لدى وزارة التجارة والاستثمار'
                  width={200}
                  height={100}
                  className='h-16 w-auto'
                />
              </div>
              <p className='mt-3 text-sm font-semibold text-white/65'>موثق بوزارة التجارة والاستثمار</p>
            </div>

            <div>
              <h5 className='mb-4 text-base font-extrabold text-white'>جوالـ / واتسـاب</h5>
              <div className='space-y-3 text-sm text-white/65'>
                <p className='flex items-center gap-2.5'>
                  <svg className='h-4 w-4 shrink-0 text-primary' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                  </svg>
                  <span dir='ltr'>(+90)75 67 031 536</span>
                </p>
                <p className='flex items-center gap-2.5'>
                  <svg className='h-4 w-4 shrink-0 text-primary' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.4 0-17-7.6-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                  </svg>
                  <span dir='ltr'>(+968) 4555 9520</span>
                </p>
                <p className='flex items-center gap-2.5'>
                  <svg className='h-4 w-4 shrink-0 text-primary' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.4 0-17-7.6-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                  </svg>
                  <span dir='ltr'>(+968) 1971 9525</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className='border-t border-white/10 bg-black/20 py-5 text-center'>
          <p className='text-sm font-semibold text-white/60'>© 2024 جميع الحقوق محفوظة — شركة هويّة</p>
          <p className='mt-1.5 text-xs text-white/40'>تابعة لشركة مسار للحلول الرقمية · سجل تجاري 1640611</p>
        </div>
      </div>
    </footer>
  );
}

