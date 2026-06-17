export function PricingSection() {
  return (
    <section
      id='pricing'
      className='bg-pattern relative overflow-hidden py-20 lg:py-28'
    >
      <div className='glow w-[480px] h-[480px] -top-20 -left-24 opacity-55'></div>

      <div className='layer-content mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center' data-anim='fade-up'>
          <div className='eyebrow mb-6'>الأسعار</div>
          <h2 className='text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold leading-[1.25] text-ink'>
            باقات تناسب حجم أعمالك
          </h2>
          <p className='mt-5 text-lg text-[#4a5a4c]'>
            ابدأ مجاناً، وارتقِ متى احتجت. بدون عقود ملزمة.
          </p>
          <div className='pricing-toggle-wrap mt-8 inline-flex items-center'>
            <span
              id='lbl-monthly'
              className='text-base font-extrabold text-ink'
            >
              شهري
            </span>
            <div
              id='billing-toggle'
              className='toggle-track mx-2'
              role='switch'
              aria-checked='false'
            >
              <span className='toggle-thumb'></span>
            </div>
            <span
              id='lbl-annual'
              className='annual-label inline-flex items-center gap-3 text-base font-bold text-[#9aa49a]'
            >
              <span>سنوي</span>

              <span className='discount-badge text-xs font-bold text-primary-700 bg-primary/15 px-2.5 py-1 rounded-full'>
                وفّر 20%
              </span>
            </span>
          </div>
        </div>
        <div className='mt-14 grid lg:grid-cols-3 gap-6 lg:gap-5 items-center max-w-5xl mx-auto'>
          <div className='hover-lift surface p-8' data-anim='fade-up'>
            <h3 className='text-lg font-extrabold text-ink'>المبتدئ</h3>
            <p className='text-sm text-[#9aa49a] mt-1'>لموقع واحد صغير</p>
            <div className='mt-6 flex items-end gap-1'>
              <span className='text-4xl font-extrabold text-ink'>
                <span className='price' data-monthly='0' data-annual='0'>
                  0
                </span>
              </span>
              <span className='text-[#9aa49a] font-bold mb-1'>
                ر.س / <span className='period'>شهرياً</span>
              </span>
            </div>
            <a href='#' className='btn btn-ghost w-full py-3.5 mt-6'>
              ابدأ مجاناً
            </a>
            <ul className='mt-7 space-y-3.5 text-[15px] text-[#4a5a4c]'>
              <li className='flex items-center gap-3'>
                <span className='check'></span> فحص حتى ١٠٠ صفحة
              </li>
              <li className='flex items-center gap-3'>
                <span className='check'></span> تقرير صحة SEO أساسي
              </li>
              <li className='flex items-center gap-3'>
                <span className='check'></span> ٢٠ اقتراح بالذكاء الاصطناعي
                شهرياً
              </li>
              <li className='flex items-center gap-3'>
                <span className='check'></span> تكامل واحد
              </li>
            </ul>
          </div>
          <div className='relative' data-anim='fade-up'>
            <div className='surface p-8 border-2 border-primary shadow-[0_40px_80px_-30px_rgba(160,205,57,0.55)] bg-white lg:-translate-y-5'>
              <span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-[#14210a] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap'>
                الأكثر اختياراً
              </span>
              <h3 className='text-lg font-extrabold text-primary-700'>
                الاحترافي
              </h3>
              <p className='text-sm text-[#9aa49a] mt-1'>
                للمتاجر والمواقع النامية
              </p>
              <div className='mt-6 flex items-end gap-1'>
                <span className='text-5xl font-extrabold text-ink'>
                  <span
                    className='price'
                    data-monthly='199'
                    data-annual='159'
                  >
                    199
                  </span>
                </span>
                <span className='text-[#9aa49a] font-bold mb-1'>
                  ر.س / <span className='period'>شهرياً</span>
                </span>
              </div>
              <a
                href='#'
                className='btn btn-primary w-full py-4 mt-6 text-lg cta-pulse'
              >
                ابدأ الآن
              </a>
              <ul className='mt-7 space-y-3.5 text-[15px] text-[#3d4a3f] font-semibold'>
                <li className='flex items-center gap-3'>
                  <span className='check'></span> فحص حتى ٥٠٠٠ صفحة
                </li>
                <li className='flex items-center gap-3'>
                  <span className='check'></span> تقارير متقدمة ومراقبة
                  مستمرة
                </li>
                <li className='flex items-center gap-3'>
                  <span className='check'></span> اقتراحات ذكاء اصطناعي غير
                  محدودة
                </li>
                <li className='flex items-center gap-3'>
                  <span className='check'></span> توليد مخططات وأسئلة شائعة
                </li>
                <li className='flex items-center gap-3'>
                  <span className='check'></span> كل التكاملات + كشف 404
                </li>
              </ul>
            </div>
          </div>
          <div className='hover-lift surface p-8' data-anim='fade-up'>
            <h3 className='text-lg font-extrabold text-ink'>المؤسسات</h3>
            <p className='text-sm text-[#9aa49a] mt-1'>
              لعدة مواقع وفرق كبيرة
            </p>
            <div className='mt-6 flex items-end gap-1'>
              <span className='text-4xl font-extrabold text-ink'>
                <span
                  className='price'
                  data-monthly='499'
                  data-annual='399'
                >
                  499
                </span>
              </span>
              <span className='text-[#9aa49a] font-bold mb-1'>
                ر.س / <span className='period'>شهرياً</span>
              </span>
            </div>
            <a href='#' className='btn btn-ghost w-full py-3.5 mt-6'>
              تواصل مع المبيعات
            </a>
            <ul className='mt-7 space-y-3.5 text-[15px] text-[#4a5a4c]'>
              <li className='flex items-center gap-3'>
                <span className='check'></span> صفحات غير محدودة
              </li>
              <li className='flex items-center gap-3'>
                <span className='check'></span> مواقع متعددة + صلاحيات فرق
              </li>
              <li className='flex items-center gap-3'>
                <span className='check'></span> تقارير تاريخية كاملة
              </li>
              <li className='flex items-center gap-3'>
                <span className='check'></span> مدير حساب مخصّص
              </li>
              <li className='flex items-center gap-3'>
                <span className='check'></span> دعم أولوية على مدار الساعة
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

