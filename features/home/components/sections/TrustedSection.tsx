export function TrustedSection() {
  return (
            <section
              id='trusted'
              className='bg-pattern relative overflow-hidden py-14 lg:py-16 border-y border-[#f0f3ea]'
            >
              <div className='layer-content'>
                <p
                  className='text-center text-sm font-bold text-[#9aa49a] mb-9 px-5'
                  data-anim='fade-up'
                >
                  موثوق به ومتكامل مع أبرز منصات المتاجر وأنظمة إدارة المحتوى
                </p>
                <div className='marquee mb-4'>
                  <div className='marquee-track marquee-ltr' data-marquee></div>
                </div>
                <div className='marquee'>
                  <div className='marquee-track marquee-rtl' data-marquee></div>
                </div>
              </div>
            </section>
  );
}

