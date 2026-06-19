import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BookingPage = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    booking_time: "",
    people_count: "1",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Placeholder IDs - User needs to fill these from EmailJS account
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      // For demonstration if IDs are not set
      console.log("Form Data:", formData);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
      },
      (error) => {
        console.log(error.text);
        setIsSubmitting(false);
        setError("Gagal mengirim pesan. Silakan coba lagi nanti.");
      },
    );
  };

  return (
    <div className="bg-primary min-h-screen font-body text-text-dark">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-tighter animate-fadeInUp">
            Booking
          </h1>
          <p
            className="text-text-dark/60 max-w-lg mx-auto md:text-lg animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Pesan tempat pilihanmu sekarang dan nikmati suasana tenang di
            OutCoffee.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-12 items-start">
          {/* Left Side: Contact Information */}
          <div className="w-full lg:w-5/12 bg-text-dark text-primary p-8 md:p-12 rounded-lg shadow-2xl shadow-black/10 animate-fadeInUp">
            <h2 className="text-3xl font-heading font-bold mb-8">
              Informasi Reservasi
            </h2>
            <p className="text-primary/70 mb-10 leading-relaxed">
              Silakan isi formulir di samping untuk melakukan booking tempat.
              Kami akan menghubungi Anda kembali untuk konfirmasi ketersediaan.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg border border-white/5">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Telepon</h4>
                  <p className="text-primary/60">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg border border-white/5">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-primary/60">hello@outcoffee.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg border border-white/5">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Lokasi</h4>
                  <p className="text-primary/60">
                    JL.Cempaka Putih No.25, Medan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg border border-white/5">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Jam Operasional</h4>
                  <p className="text-primary/60">
                    Senin - Minggu: 10.00 - 23.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-7/12 bg-white p-8 md:p-12 rounded-lg shadow-xl shadow-black/5 animate-fadeInUp">
            {!isSubmitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="user_name"
                      className="text-sm font-bold uppercase tracking-wider text-text-dark/40"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.user_name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-lg bg-primary/50 border border-transparent focus:border-text-dark/10 focus:bg-white outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="user_phone"
                      className="text-sm font-bold uppercase tracking-wider text-text-dark/40"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="user_phone"
                      name="user_phone"
                      required
                      placeholder="Contoh: 08123456789"
                      value={formData.user_phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-lg bg-primary/50 border border-transparent focus:border-text-dark/10 focus:bg-white outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="booking_time"
                      className="text-sm font-bold uppercase tracking-wider text-text-dark/40"
                    >
                      Waktu Booking
                    </label>
                    <input
                      type="datetime-local"
                      id="booking_time"
                      name="booking_time"
                      required
                      value={formData.booking_time}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-lg bg-primary/50 border border-transparent focus:border-text-dark/10 focus:bg-white outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="people_count"
                      className="text-sm font-bold uppercase tracking-wider text-text-dark/40"
                    >
                      Jumlah Orang (Maks. 30)
                    </label>
                    <input
                      type="number"
                      id="people_count"
                      name="people_count"
                      min="1"
                      max="30"
                      required
                      value={formData.people_count}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-primary/50 border border-transparent focus:border-text-dark/10 focus:bg-white outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold uppercase tracking-wider text-text-dark/40"
                  >
                    Pesan Tambahan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Ada pesan khusus? (Opsional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-primary/50 border border-transparent focus:border-text-dark/10 focus:bg-white outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary mt-4 flex items-center justify-center gap-3 py-3.5 md:py-5 text-base md:text-lg"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Kirim Booking Sekarang</span>
                      <Send size={20} />
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-red-500 text-sm text-center font-medium mt-2">
                    {error}
                  </p>
                )}
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fadeInScale">
                <div className="bg-green-100 p-4 rounded-full mb-6">
                  <CheckCircle2 size={48} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">
                  Booking Berhasil!
                </h3>
                <p className="text-text-dark/60 max-w-sm mb-8">
                  Terima kasih sudah memesan tempat di OutCoffee. Tim kami akan
                  segera menghubungi Anda melalui nomor telepon yang diberikan.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline px-10"
                >
                  Buat Booking Baru
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
