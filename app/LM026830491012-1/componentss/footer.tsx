export default function Footer() {

    return (
        <footer className="bg-slate-900 text-slate-300 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <span className="text-2xl font-bold text-white">จักรภัทร คำสม</span>
        <p className="mt-4 text-sm text-slate-400">026830491012-1</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider"></h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition"></a></li>
          <li><a href="#" className="hover:text-white transition"></a></li>
          <li><a href="#" className="hover:text-white transition"></a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider"></h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition"></a></li>
          <li><a href="#" className="hover:text-white transition"></a></li>
          <li><a href="#" className="hover:text-white transition"></a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">สอบ การเขียนโปรแกรม</h4>
        <p className="mt-4 text-sm text-slate-400">รหัสวิชา 04-06-215</p>
        
      </div>
    </div>

    <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
      <p className="text-xs text-slate-400">&copy; 2026 Your Company, Inc. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 sm:mt-0">
        <a href="#" className="text-slate-400 hover:text-white">Facebook icon</a>
        <a href="#" className="text-slate-400 hover:text-white">Instagram icon</a>
        <a href="#" className="text-slate-400 hover:text-white">Tiktok icon</a>
        <a href="#" className="text-slate-400 hover:text-white">Twitter icon</a>
      </div>
    </div>
  </div>
</footer>
    );
}