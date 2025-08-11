export default function Footer() {
  return (
    <div className="w-full bg-white border-t border-gray-100 py-8 md:py-10">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-8 xl:px-16">
        <div className="text-center space-y-4">
          <div className="text-sm text-[#04040566] font-montserrat">© Lailo 2025</div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <a href="#" className="text-sm text-[#04040566] hover:text-[#040405] font-montserrat">Suporte</a>
            <a href="#" className="text-sm text-[#04040566] hover:text-[#040405] font-montserrat">Politica de Privacidade</a>
            <a href="#" className="text-sm text-[#04040566] hover:text-[#040405] font-montserrat">Termos</a>
          </div>
        </div>
      </div>
    </div>
  );
}
