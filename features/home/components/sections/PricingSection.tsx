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
        </div>

        <div className='pricing-grid mt-12 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5'>
          {displayPlans.map((plan) => {
            const isFeatured = featuredPlan === plan.id;

            return (
              <article
                key={plan.id}
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
                className={`pricing-card-v2 pattern-card relative flex min-h-[524px] flex-col bg-white p-7 text-right ${
                  isFeatured ? 'pricing-card-v2-featured lg:-translate-y-5' : ''
                }`}
                data-anim='fade-up'
              >
                <div className='pricing-card-v2__head'>
                  <h3 className={`text-2xl font-extrabold ${isFeatured ? 'text-primary-700' : 'text-ink'}`}>{plan.name}</h3>
                  <p className='mt-1 text-base font-semibold text-[#9aa49a]'>{plan.description}</p>
                </div>

                <div className='mt-9 flex items-end justify-center gap-2 text-center' dir='rtl'>
                  <span className={`${isFeatured ? 'text-[4.4rem]' : 'text-[3.6rem]'} leading-none font-black text-ink`}>
                    <span className='price' data-monthly={plan.monthly} data-annual={plan.annual}>
                      {isAnnual ? plan.annual : plan.monthly}
                    </span>
                  </span>
                  <span className='mb-3 text-2xl font-extrabold text-[#a0aaa0]'>
                    ر.س / <span className='period'>{isAnnual ? 'سنوياً' : 'شهرياً'}</span>
                  </span>
                </div>

                <span className={`btn mt-9 w-full ${isFeatured ? 'btn-primary pricing-main-cta py-5 text-xl' : 'btn-ghost py-4 text-lg'}`}>
                  {plan.action}
                </span>

                <ul className='mt-9 space-y-4 text-lg font-semibold leading-7 text-[#526056]'>
                  {plan.features.map((feature) => (
                    <li className='flex items-center gap-3' key={feature}>
                      <span className='check pricing-check'></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.extra && (
                  <div className='mt-auto pt-8'>
                    <div className='pricing-extra inline-flex w-full items-center justify-center gap-3 rounded-[1.1rem] border border-dashed border-primary/60 bg-primary/10 px-4 py-3 text-lg font-extrabold text-primary-700'>
                      <span className='check pricing-check'></span>
                      {plan.extra}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
