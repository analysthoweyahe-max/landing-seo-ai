import Image from 'next/image';

export function StatsSection() {
  return (
    <section
      id='stats'
      className='bg-pattern relative overflow-hidden py-14 lg:py-20'
    >
      <div className='glow w-[520px] h-[520px] -bottom-32 -left-20 opacity-55'></div>

      <div className='layer-content mx-auto max-w-7xl px-5 lg:px-8'>
        <div
          className='max-w-2xl mx-auto text-center mb-14'
          data-anim='fade-up'
        >
          <div className='eyebrow mb-6'>الأرقام والإحصائيات</div>
          <h2 className='text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold leading-[1.25] text-ink'>
            أرقام تتحدّث عن نتائج حقيقية
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[180px]'>
          <div
            className='hover-lift lg:col-span-2 lg:row-span-2 p-8 flex flex-col justify-between relative overflow-visible bg-primary rounded-[1.5rem] border border-primary-500/40 shadow-[0_30px_60px_-32px_rgba(160,205,57,0.6)]'
            data-anim='fade-up'
          >
            <Image
              src='/digital_print.png'
              alt='إحصائيات'
              width={260}
              height={260}
              className='absolute  -translate-x-1/2  object-cover opacity-20'
              priority
            />

            <div
              className='swirl-watermark inset-0 bg-center'
              style={{ opacity: '0.12' }}
            ></div>

            <div className='relative z-20'>
              <div className='text-sm font-extrabold text-[#274011]/80'>
                مواقع تمت خدمتها
              </div>
            </div>

            <div className='relative z-20'>
              <div className='text-6xl lg:text-7xl font-extrabold text-[#1d3208] leading-none'>
                <span data-counter data-target='12500'>0</span>
                <span>+</span>
              </div>

              <p className='mt-4 text-[#274011]/85 font-semibold max-w-xs'>
                متاجر ومواقع عربية تثق في هويّة لتحسين حضورها على محركات البحث.
              </p>
            </div>
          </div>

          <div
            className='hover-lift surface lg:col-span-2 p-7 flex flex-col justify-center'
            data-anim='fade-up'
          >
            <div className='text-sm font-extrabold text-[#9aa49a] mb-2'>
              صفحات تم تحليلها
            </div>

            <div className='text-4xl lg:text-5xl font-extrabold text-ink leading-none'>
              <span data-counter data-target='8400000'>0</span>
              <span className='text-primary-600'>+</span>
            </div>

            <div className='mt-3 h-2 rounded-full bg-[#eef2e6] overflow-hidden'>
              <div className='h-full w-[78%] bg-primary rounded-full'></div>
            </div>
          </div>

          <div
            className='hover-lift surface p-7 flex flex-col justify-center'
            data-anim='fade-up'
          >
            <div className='text-sm font-extrabold text-[#9aa49a] mb-2'>
              تحسينات تم تنفيذها
            </div>

            <div className='text-4xl font-extrabold text-ink leading-none'>
              <span data-counter data-target='2300000'>0</span>
              <span className='text-primary-600'>+</span>
            </div>
          </div>

          <div
            className='hover-lift surface p-7 flex flex-col justify-center'
            data-anim='fade-up'
          >
            <div className='text-sm font-extrabold text-[#9aa49a] mb-2'>
              متوسط زيادة الأداء
            </div>

            <div className='text-4xl font-extrabold text-primary-700 leading-none'>
              +
              <span data-counter data-target='63'>0</span>
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
