export function SiteFooter() {
  return (
    <footer className="mt-16 rounded-t-[40px] border border-white/10 bg-[#0b141d]/95 p-10 text-sm text-white/60">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold text-white">زخم</h4>
          <p className="mt-2 leading-relaxed">
            منتج عربي يحترم إنسانيتك. نصمم للراحة بقدر ما نصمم للإنتاجية، لأن
            الاتزان النفسي هو الوقود الحقيقي للنجاح.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">الثقة والخصوصية</h4>
          <ul className="mt-2 space-y-2">
            <li>• بياناتك مشفرة ولا تُباع إطلاقاً.</li>
            <li>• بإمكانك طلب حذف كامل لأي نشاط في أي وقت.</li>
            <li>• المراقبة مبنية على الموافقة الواعية فقط.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">رسالة ودية</h4>
          <p className="mt-2 leading-relaxed">
            إذا كان يومك صعباً اليوم، فهذا طبيعي. زخم هنا ليحمل عنك الضغط، لا
            ليضيفه. نراك كإنسان أولاً، ومنجز ثانياً.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-4 text-xs md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} زخم. كل الحقوق محفوظة.</span>
        <div className="flex flex-wrap gap-3 text-white/50">
          <a href="#how-it-works" className="hover:text-white/80">
            كيف يعمل
          </a>
          <a href="#features" className="hover:text-white/80">
            المميزات
          </a>
          <a href="/pricing" className="hover:text-white/80">
            الأسعار
          </a>
          <a href="/about" className="hover:text-white/80">
            عن زخم
          </a>
        </div>
      </div>
    </footer>
  );
}
