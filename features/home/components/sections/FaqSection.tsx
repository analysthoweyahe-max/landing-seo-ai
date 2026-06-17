export function FaqSection() {
  return (
            <section
              id='faq'
              className='bg-pattern relative overflow-hidden py-20 lg:py-28'
            >
              <div className='glow w-[420px] h-[420px] bottom-0 left-1/4 opacity-45'></div>
    
              <div className='layer-content mx-auto max-w-3xl px-5 lg:px-8'>
                <div className='text-center mb-12' data-anim='fade-up'>
                  <div className='eyebrow mb-6'>الأسئلة الشائعة</div>
                  <h2 className='text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold leading-[1.25] text-ink'>
                    كل ما تريد معرفته عن هويّة
                  </h2>
                </div>
    
                <div className='space-y-4' id='faq-list'>
                  <div
                    className='faq-item surface overflow-hidden'
                    data-anim='fade-up'
                  >
                    <button className='faq-head w-full flex items-center gap-4 text-right px-6 py-5'>
                      <span className='text-lg font-extrabold text-ink flex-1'>
                        كيف تعمل المنصة بالضبط؟
                      </span>
                      <span className='faq-icon w-9 h-9 shrink-0 rounded-full bg-[#f3f6ec] text-primary-700 flex items-center justify-center text-xl font-bold'>
                        +
                      </span>
                    </button>
                    <div className='faq-body'>
                      <p className='px-6 pb-6 text-[#4a5a4c] leading-relaxed'>
                        تضيف موقعك، فتقوم هويّة بفحص جميع الصفحات تلقائياً واكتشاف
                        مشاكل الـ SEO، ثم يولّد الذكاء الاصطناعي تحسينات جاهزة.
                        تراجعها وتعتمد ما يناسبك ليُطبَّق مباشرة على موقعك.
                      </p>
                    </div>
                  </div>
    
                  <div
                    className='faq-item surface overflow-hidden'
                    data-anim='fade-up'
                  >
                    <button className='faq-head w-full flex items-center gap-4 text-right px-6 py-5'>
                      <span className='text-lg font-extrabold text-ink flex-1'>
                        هل أحتاج إلى خبرة تقنية أو في الـ SEO؟
                      </span>
                      <span className='faq-icon w-9 h-9 shrink-0 rounded-full bg-[#f3f6ec] text-primary-700 flex items-center justify-center text-xl font-bold'>
                        +
                      </span>
                    </button>
                    <div className='faq-body'>
                      <p className='px-6 pb-6 text-[#4a5a4c] leading-relaxed'>
                        لا. صُمِّمت المنصة لتكون بسيطة للجميع. الذكاء الاصطناعي يقوم
                        بالعمل الثقيل، وكل ما عليك هو مراجعة الاقتراحات والموافقة
                        عليها بنقرة واحدة.
                      </p>
                    </div>
                  </div>
    
                  <div
                    className='faq-item surface overflow-hidden'
                    data-anim='fade-up'
                  >
                    <button className='faq-head w-full flex items-center gap-4 text-right px-6 py-5'>
                      <span className='text-lg font-extrabold text-ink flex-1'>
                        ما المنصات التي تدعمها هويّة؟
                      </span>
                      <span className='faq-icon w-9 h-9 shrink-0 rounded-full bg-[#f3f6ec] text-primary-700 flex items-center justify-center text-xl font-bold'>
                        +
                      </span>
                    </button>
                    <div className='faq-body'>
                      <p className='px-6 pb-6 text-[#4a5a4c] leading-relaxed'>
                        ندعم WordPress وShopify وسلة وزد، مع إضافة تكاملات جديدة
                        باستمرار. يمكنك ربط موقعك خلال دقائق وتطبيق التحسينات مباشرة
                        على نظام إدارة المحتوى.
                      </p>
                    </div>
                  </div>
    
                  <div
                    className='faq-item surface overflow-hidden'
                    data-anim='fade-up'
                  >
                    <button className='faq-head w-full flex items-center gap-4 text-right px-6 py-5'>
                      <span className='text-lg font-extrabold text-ink flex-1'>
                        هل بياناتي وموقعي في أمان؟
                      </span>
                      <span className='faq-icon w-9 h-9 shrink-0 rounded-full bg-[#f3f6ec] text-primary-700 flex items-center justify-center text-xl font-bold'>
                        +
                      </span>
                    </button>
                    <div className='faq-body'>
                      <p className='px-6 pb-6 text-[#4a5a4c] leading-relaxed'>
                        نعم. نستخدم اتصالات مشفّرة ولا نطبّق أي تغيير دون موافقتك
                        الصريحة. تبقى دائماً المتحكّم الكامل في كل تعديل يتم على
                        موقعك.
                      </p>
                    </div>
                  </div>
    
                  <div
                    className='faq-item surface overflow-hidden'
                    data-anim='fade-up'
                  >
                    <button className='faq-head w-full flex items-center gap-4 text-right px-6 py-5'>
                      <span className='text-lg font-extrabold text-ink flex-1'>
                        كيف تتم المراقبة المستمرة للـ SEO؟
                      </span>
                      <span className='faq-icon w-9 h-9 shrink-0 rounded-full bg-[#f3f6ec] text-primary-700 flex items-center justify-center text-xl font-bold'>
                        +
                      </span>
                    </button>
                    <div className='faq-body'>
                      <p className='px-6 pb-6 text-[#4a5a4c] leading-relaxed'>
                        تفحص المنصة موقعك بشكل دوري على مدار الساعة، تكتشف المشاكل
                        الجديدة وصفحات 404 فور ظهورها، وتنبّهك مع اقتراحات للإصلاح
                        وتقارير تاريخية لمتابعة التطور.
                      </p>
                    </div>
                  </div>
    
                  <div
                    className='faq-item surface overflow-hidden'
                    data-anim='fade-up'
                  >
                    <button className='faq-head w-full flex items-center gap-4 text-right px-6 py-5'>
                      <span className='text-lg font-extrabold text-ink flex-1'>
                        هل يمكنني تغيير الباقة أو الإلغاء في أي وقت؟
                      </span>
                      <span className='faq-icon w-9 h-9 shrink-0 rounded-full bg-[#f3f6ec] text-primary-700 flex items-center justify-center text-xl font-bold'>
                        +
                      </span>
                    </button>
                    <div className='faq-body'>
                      <p className='px-6 pb-6 text-[#4a5a4c] leading-relaxed'>
                        بالتأكيد. يمكنك الترقية أو التخفيض أو الإلغاء في أي وقت دون
                        عقود ملزمة. تبدأ مجاناً، وتدفع فقط عندما تكون جاهزاً للنمو.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  );
}

