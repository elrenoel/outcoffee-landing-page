const Location = () => {
  return (
    <section className="w-full px-4 pt-16 md:pt-24 pb-12 bg-primary">
      <div className="w-full flex flex-col gap-12" id="maps">
        {/* Texts */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/2 animate-fadeInUp">
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter text-text-dark leading-[1.1]">
              Capeknya Valid
              <br className="hidden md:block" /> Santainya Harus.
            </h2>
          </div>
          <div
            className="md:w-[45%] animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg text-text-dark/80 font-medium md:text-right leading-[1.6]">
              <strong className="font-bold text-text-dark italic">
                Dunia lagi nggak ramah?
              </strong>{" "}
              Sudut-sudut kami selalu terbuka. Duduk di sini bukan buat
              produktif, tapi buat ngerasain tenang yang selama ini kamu cari.
            </p>
          </div>
        </div>

        {/* Info Blocks */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-1">
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl md:text-3xl font-bold font-heading text-text-dark mb-1">
              Buka
            </h3>
            <p className="text-xl font-medium text-text-dark/80 uppercase">
              senin - minggu
            </p>
            <p className="text-xl font-medium text-text-dark/80">
              10.00 - 23.00
            </p>
          </div>

          <div
            className="md:text-right animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-xl md:text-3xl font-bold font-heading text-text-dark mb-1">
              JL.Cempaka Putih No.25
            </h3>
            <p className="text-xl font-medium text-text-dark/80 md:text-right">
              Medan
            </p>
          </div>
        </div>

        {/* Map */}
        <div
          className="w-full h-100 md:h-125 rounded-lg overflow-hidden mt-2 bg-[#e8e8df] animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.0705015192757!2d98.65656007773357!3d3.5712569871280815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMzQnMTYuNSJOIDk4wrAzOSc0MS4yIkU!5e0!3m2!1sid!2sid!4v1776439476760!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="OutCoffee Location Map"
            className="filter grayscale-10 contrast-95"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
