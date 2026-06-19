const Introduction = () => {
  return (
    <section className="w-full py-20 bg-primary flex justify-center items-center">
      <div className="text-center flex flex-col items-center animate-fadeInUp">
        <h2 className="text-[64px] md:text-6xl font-bold font-heading tracking-tighter text-text-dark mb-6">
          Tenang....
        </h2>
        <p className="font-hanken text-3xl lg:text-[64px] leading-20.75 tracking-[-7%] text-[#735C58] w-full font-medium px-10">
          <span className="text-[#3E2723]">OutCoffee mengerti bahwa hari</span>
          mu tidak selalu harus penuh target. Kami hadir sebagai pelarian kecil,
          tempat di mana kamu bisa benar-benar melepaskan penat dan santai dulu
          di ruang yang hangat dan nyaman. Setelah rileks, barulah kami
          hidangkan kopi pilihan yang diseduh dengan hati untuk menemani momen
          berhargamu, karena bagaimanapun juga, kopi kemudian adalah penutup
          yang sempurna.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
