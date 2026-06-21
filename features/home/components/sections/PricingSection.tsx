'use client';

import { useState } from 'react';

const plans = [
  {
    id: 'enterprise',
    name: 'المؤسسات',
    description: 'للفرق الكبيرة وعدة مواقع',
    monthly: '499',
    annual: '399',
    action: 'تواصل مع المبيعات',
    badgeClass: 'bg-[#14210a]/8 text-[#14210a] ring-1 ring-[#14210a]/15',
    barClass: 'from-[#caa24a] via-[#5d7a2c] to-[#14210a]',
    features: [
      'صفحات غير محدودة',
      'مواقع متعددة + صلاحيات فرق',
      'تقارير تاريخية كاملة',
      'مدير حساب مخصص',
      'دعم أولوية على مدار الساعة',
      'واجهة برمجة تطبيقات (API) مفتوحة',
      'تسجيل دخول موحد (SSO) وأمان مؤسسي',
      'تقارير مخصصة بعلامتك التجارية',
      'اتفاقية مستوى خدمة (SLA) مضمونة',
    ],
    extra: '+20 ميزة احترافية إضافية',
  },
  {
    id: 'pro',
    name: 'الاحترافي',
    description: 'للمتاجر والمواقع النامية',
    monthly: '199',
    annual: '159',
    action: 'ابدأ الآن',
    featured: true,
    badgeClass: 'bg-primary/15 text-primary-700 ring-1 ring-primary/20',
    barClass: 'from-[#9ed25a] to-[#3f6e1f]',
    features: [
      'فحص حتى 5000 صفحة',
      'تقارير متقدمة ومراقبة مستمرة',
      'اقتراحات ذكاء اصطناعي غير محدودة',
      'توليد مخططات وأسئلة شائعة',
      'كل التكاملات + كشف 404',
    ],
  },
  {
    id: 'starter',
    name: 'المبتدئ',
    description: 'لموقع واحد صغير',
    monthly: '0',
    annual: '0',
    action: 'ابدأ مجاناً',
    badgeClass: 'bg-[#eef3e6] text-[#6f8a4a] ring-1 ring-[#6f8a4a]/15',
    barClass: 'from-[#dbe7c8] to-[#a9c787]',
    features: ['فحص حتى 100 صفحة', 'تقرير صحة SEO أساسي', '20 اقتراح بالذكاء الاصطناعي شهرياً', 'تكامل واحد'],
  },
];


export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [featuredPlan, setFeaturedPlan] = useState('pro');
  const featured = plans.find((plan) => plan.id === featuredPlan) ?? plans[1];
  const displayPlans = [plans.find((plan) => plan.id !== featured.id), featured, [...plans].reverse().find((plan) => plan.id !== featured.id)].filter(
    Boolean,
  ) as typeof plans;

  return (
    <section id='pricing' className='pricing-section bg-pattern relative overflow-hidden py-16 lg:py-24' dir='rtl'>
      <div className='glow pricing-glow h-[560px] w-[560px] -bottom-40 left-1/2 opacity-60'></div>

      <div className='layer-content mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center' data-anim='fade-up'>
          <div className='eyebrow mb-5'>الأسعار</div>
          <h2 className='text-3xl font-extrabold leading-[1.25] text-ink sm:text-4xl lg:text-[2.7rem]'>باقات تناسب حجم أعمالك</h2>
          <p className='mt-4 text-lg text-[#4a5a4c]'>ابدأ مجاناً، وارتقِ متى احتجت. بدون عقود ملزمة.</p>

          <div className='pricing-toggle-wrap mt-7 inline-flex items-center justify-center'>
            <span id='lbl-monthly' className={`text-base font-extrabold ${isAnnual ? 'text-[#9aa49a]' : 'text-ink'}`}>
              شهري
            </span>
            <button
              id='billing-toggle'
              type='button'
              className={`toggle-track mx-2 ${isAnnual ? 'on' : ''}`}
              role='switch'
              aria-checked={isAnnual}
              onClick={() => setIsAnnual((current) => !current)}
            >
              <span className='toggle-thumb'></span>
            </button>
            <span id='lbl-annual' className={`annual-label inline-flex items-center gap-3 text-base font-bold ${isAnnual ? 'text-ink' : 'text-[#9aa49a]'}`}>
              <span>سنوي</span>
              <span className='discount-badge rounded-full bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary-700'>وفّر 20%</span>
            </span>
          </div>

          <p className='mt-4 text-sm font-bold text-[#9aa49a]'>انقر على أي باقة لعرض تفاصيلها في المنتصف</p>
        </div>

        <div className='pricing-grid mt-12 grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.24fr_0.92fr] lg:gap-5'>
          {displayPlans.map((plan) => {
            const isFeatured = featuredPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col transition-all duration-300 ${isFeatured ? 'lg:-translate-y-6 lg:scale-[1.02]' : ''}`}
                data-anim='fade-up'
              >
                {isFeatured && (
                  <div className='absolute -top-3.5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#14210a] px-4 py-1.5 text-xs font-extrabold text-primary shadow-sm'>
                    الأكثر شيوعاً ✦
                  </div>
                )}
                <article
                  role='button'
                  tabIndex={0}
                  aria-pressed={isFeatured}
                  onClick={() => setFeaturedPlan(plan.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setFeaturedPlan(plan.id);
                    }
                  }}
                  className={`pricing-card-v2 group relative flex flex-1 flex-col overflow-hidden text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isFeatured
                      ? 'pricing-card-v2-featured cursor-pointer p-8 shadow-[0_30px_70px_-25px_rgba(20,33,10,0.35)] ring-1 ring-[#14210a]/10 lg:p-10'
                      : 'cursor-pointer bg-white p-7 hover:-translate-y-1 hover:shadow-xl'
                  }`}
                >
                  <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${plan.barClass}`}></span>

                  <div className='pricing-card-v2__head'>
                    <h3 className={`text-2xl font-extrabold ${isFeatured ? 'text-[#14210a]' : 'text-ink'}`}>{plan.name}</h3>
                    <p className={`mt-1 text-base font-semibold ${isFeatured ? 'text-[#2a4510]/65' : 'text-[#9aa49a]'}`}>{plan.description}</p>
                  </div>

                  <div className='mt-9 flex items-end justify-center gap-2 text-center' dir='rtl'>
                    <span className={`${isFeatured ? 'text-[4.8rem]' : 'text-[3.6rem]'} font-black leading-none ${isFeatured ? 'text-[#14210a]' : 'text-ink'}`}>
                      <span className='price' data-monthly={plan.monthly} data-annual={plan.annual}>
                        {isAnnual ? plan.annual : plan.monthly}
                      </span>
                    </span>
                    <span className={`mb-3 text-2xl font-extrabold ${isFeatured ? 'text-[#2a4510]/55' : 'text-[#a0aaa0]'}`}>
                      ر.س / <span className='period'>{isAnnual ? 'سنوياً' : 'شهرياً'}</span>
                    </span>
                  </div>

                  <span
                    className={`btn mt-9 w-full transition-transform duration-200 group-hover:scale-[1.02] ${
                      isFeatured ? 'pricing-main-cta-featured py-5 text-xl' : 'btn-ghost py-4 text-lg'
                    }`}
                  >
                    {plan.action}
                  </span>

                  <ul className={`mt-9 space-y-4 text-lg font-semibold leading-7 ${isFeatured ? 'text-[#14210a]/80' : 'text-[#526056]'}`}>
                    {plan.features.map((feature) => (
                      <li className='flex items-center gap-3' key={feature}>
                        <span className='check pricing-check'></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.extra && (
                    <div className='mt-auto pt-8'>
                      <div className={`pricing-extra inline-flex w-full items-center justify-center gap-3 rounded-[1.1rem] border border-dashed px-4 py-3 text-lg font-extrabold ${
                        isFeatured
                          ? 'border-[#14210a]/25 bg-[#14210a]/10 text-[#14210a]'
                          : 'border-primary/60 bg-primary/10 text-primary-700'
                      }`}>
                        <span className='check pricing-check'></span>
                        {plan.extra}
                      </div>
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}