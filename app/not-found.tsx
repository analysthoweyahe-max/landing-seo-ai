import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-ink flex items-center justify-center px-5 text-center">
      <div>
        <p className="eyebrow mb-5">404</p>
        <h1 className="text-3xl font-extrabold">الصفحة غير موجودة</h1>
        <Link href="/#hero" className="btn btn-primary px-7 py-4 mt-8">العودة للرئيسية</Link>
      </div>
    </main>
  );
}
