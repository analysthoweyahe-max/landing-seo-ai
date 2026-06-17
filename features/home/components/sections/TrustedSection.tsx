const platforms = ["WordPress", "Shopify", "سلة", "زد"];
const initialPlatforms = Array.from({ length: 5 }, () => platforms).flat();

function PlatformLogo({ name }: { name: string }) {
  return (
    <div className='logo-item'>
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        {name === "WordPress" ? (
          <>
            <circle cx='16' cy='16' r='13' />
            <path d='M8 11 L10.5 22 L14 14 L17.5 22 L20 11' />
          </>
        ) : name === "Shopify" ? (
          <>
            <path d='M9 11h14l-1.3 14a2 2 0 0 1-2 1.8H12.3a2 2 0 0 1-2-1.8z' />
            <path d='M12.5 11V9.5a3.5 3.5 0 0 1 7 0V11' />
          </>
        ) : name === "سلة" ? (
          <>
            <path d='M7 13h18l-2 11.5a2 2 0 0 1-2 1.7H11a2 2 0 0 1-2-1.7z' />
            <path d='M11 13l3-6M21 13l-3-6' />
            <path d='M13.5 17.5v5M18.5 17.5v5' />
          </>
        ) : (
          <>
            <path d='M6 13l1.8-5h16.4L26 13' />
            <path d='M7.5 13v11.5h17V13' />
            <path d='M13 24.5V18h6v6.5' />
            <path d='M6 13a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0' />
          </>
        )}
      </svg>
    </div>
  );
}

export function TrustedSection() {
  return (
            <section
              id='trusted'
              className='bg-pattern relative overflow-hidden py-14 lg:py-16 border-y border-[#f0f3ea]'
            >
              <div className='layer-content'>
                <p
                  className='trusted-title text-center text-sm sm:text-base font-bold text-[#9aa49a] mb-9 px-5'
                  data-anim='fade-up'
                >
                  موثوق به ومتكامل مع أبرز منصات المتاجر وأنظمة إدارة المحتوى
                </p>
                <div className='marquee mb-4'>
                  <div className='marquee-track marquee-ltr' data-marquee>
                    <div className='marquee-group'>
                      {initialPlatforms.map((name, index) => (
                        <PlatformLogo key={`${name}-${index}`} name={name} />
                      ))}
                    </div>
                    <div className='marquee-group' aria-hidden='true'>
                      {initialPlatforms.map((name, index) => (
                        <PlatformLogo key={`${name}-${index}`} name={name} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
  );
}

