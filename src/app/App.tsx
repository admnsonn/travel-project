import { useState } from "react";
import { CalendarDays, ChevronDown, Clock, Globe, MapPin, MessageCircle, Menu, Package, ShieldCheck, Users, Wifi, X } from "lucide-react";
import imgFrame1 from "../assets/gambar1.png";
import imgFrame31 from "../assets/gambar2.png";
import imgFrame32 from "../assets/gambar3.png";
import imgFrame30 from "../assets/gambar4.png";
import imgFrame33 from "../assets/gambar5.png";
import imgFrame34 from "../assets/gambar2.png";
import imgFrame35 from "../assets/gambar3.png";
import logo from "../assets/Frame 77.png";

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState("Pangandaran");
  const [selectedPeople, setSelectedPeople] = useState("Dua");
  const [startDate, setStartDate] = useState("12-08-2028");
  const [endDate, setEndDate] = useState("14-08-2028");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchMessage, setSearchMessage] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);
  const [showStartDateDropdown, setShowStartDateDropdown] = useState(false);
  const [showEndDateDropdown, setShowEndDateDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const destinations = [
    { name: "Pangandaran", image: imgFrame1, duration: "2 Hari", people: "Min 2 Orang", category: "Alam" },
    { name: "Puncak Bogor", image: imgFrame31, duration: "1 Hari", people: "Min 7 Orang", category: "Kota" },
    { name: "Jogjakarta", image: imgFrame32, duration: "3 Hari", people: "Min 10 Orang", category: "Trending" },
  ];
  const peopleOptions = ["Satu", "Dua", "Tiga", "Empat", "Lima"];
  const categories = ["Semua", "Trending", "Alam", "Kota"];
  const startDateOptions = ["10-08-2028", "11-08-2028", "12-08-2028", "13-08-2028"];
  const endDateOptions = ["13-08-2028", "14-08-2028", "15-08-2028", "16-08-2028"];

  const parseDate = (date: string) => {
    const [day, month, year] = date.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const handleSearch = () => {
    const start = parseDate(startDate);
    const end = parseDate(endDate);

    if (start > end) {
      setSearchMessage("Tanggal akhir harus setelah tanggal mulai.");
      return;
    }

    setSearchMessage(`Hasil pencarian: ${selectedDestination} untuk ${selectedPeople} orang, ${startDate} - ${endDate}.`);
    setBookingMessage("");
  };

  const handleBooking = () => {
    const bookingText = encodeURIComponent(
      `Halo GreenTrail Travel, saya ingin memesan perjalanan ke ${selectedDestination} untuk ${selectedPeople} orang, mulai ${startDate} sampai ${endDate}.`
    );

    window.open(`https://wa.me/6281234567890?text=${bookingText}`, "_blank");
    setBookingMessage(`Pesan pemesanan terkirim untuk ${selectedDestination}. Silakan lanjutkan di WhatsApp.`);
  };

  const handleWhatsApp = () => {
    const infoText = encodeURIComponent(
      "Halo GreenTrail Travel, saya ingin informasi lebih lanjut tentang paket perjalanan Anda."
    );
    window.open(`https://wa.me/6281234567890?text=${infoText}`, "_blank");
  };

  const filteredDestinations =
    selectedCategory === "Semua"
      ? destinations
      : destinations.filter((destination) => destination.category === selectedCategory);

  return (
    <div className="w-screen h-screen overflow-auto bg-[#f8faf6] font-poppins scroll-smooth">
      <div className="min-h-screen w-full flex flex-col items-center">
        {/* Hero Section */}
        <div id="home" className="w-full relative">
          <div className="w-full h-screen md:h-[520px] relative overflow-hidden">
            <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-[#7bc86c]/30 blur-3xl" />
            <div className="absolute right-0 top-28 h-56 w-56 rounded-full bg-[#d8f2e1]/50 blur-3xl" />
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFrame1} />

            {/* Navbar */}
            <div className="fixed inset-x-4 top-4 z-50 mx-auto max-w-[1320px] rounded-[28px] bg-white/95 backdrop-blur-xl border border-[#dbe9d0] shadow-[0_25px_60px_rgba(52,75,36,0.18)] px-4 md:px-[25px] py-4 md:py-[20px]">
              <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex gap-3 md:gap-[14px] items-center min-w-fit">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full text-[#4a8039]">
                    <img alt="GreenTrail Logo" className="h-full w-full object-contain" src={logo} />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-[20px] text-[#1f381b]">GreenTrail</p>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#58714f]">Travel</p>
                  </div>
                </div>

                {/* Menu */}
                <div className="hidden lg:flex gap-6 md:gap-[32px] items-center text-xs md:text-[15px] text-[#2f4e26] flex-1 justify-center">
                  <a href="#home" className="font-medium cursor-pointer transition hover:text-[#569643]">Home</a>
                  <a href="#tentang" className="font-normal cursor-pointer transition hover:text-[#569643]">Tentang Kami</a>
                  <a href="#destinasi" className="font-normal cursor-pointer transition hover:text-[#569643]">Destinasi</a>
                  <a href="#pelayanan" className="font-normal cursor-pointer transition hover:text-[#569643]">Pelayanan</a>
                  <a href="#galeri" className="font-normal cursor-pointer transition hover:text-[#569643]">Galeri Konsumen</a>
                </div>

                {/* Mobile menu toggle + booking */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleBooking}
                    className="hidden md:inline-flex items-center justify-center bg-gradient-to-r from-[#4f7a36] to-[#6db44f] px-4 py-2 rounded-[15px] text-xs md:text-[15px] font-bold text-white hover:from-[#3d652a] hover:to-[#5b9637] transition"
                  >
                    Booking Now
                  </button>
                  <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-[#d6e9d0] bg-[#f6fbf3] text-[#3f5f34] transition hover:bg-[#e9f5e6] lg:hidden"
                    aria-label="Toggle menu"
                  >
                    {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {showMobileMenu && (
                <div className="mt-4 flex flex-col gap-3 rounded-[24px] border border-[#d6e9d0] bg-[#f8fbf6] p-4 lg:hidden">
                  <a href="#home" onClick={() => setShowMobileMenu(false)} className="font-medium text-sm text-[#2f4e26] transition hover:text-[#569643]">Home</a>
                  <a href="#tentang" onClick={() => setShowMobileMenu(false)} className="font-medium text-sm text-[#2f4e26] transition hover:text-[#569643]">Tentang Kami</a>
                  <a href="#destinasi" onClick={() => setShowMobileMenu(false)} className="font-medium text-sm text-[#2f4e26] transition hover:text-[#569643]">Destinasi</a>
                  <a href="#pelayanan" onClick={() => setShowMobileMenu(false)} className="font-medium text-sm text-[#2f4e26] transition hover:text-[#569643]">Pelayanan</a>
                  <a href="#galeri" onClick={() => setShowMobileMenu(false)} className="font-medium text-sm text-[#2f4e26] transition hover:text-[#569643]">Galeri Konsumen</a>
                  <button
                    onClick={() => {
                      handleBooking();
                      setShowMobileMenu(false);
                    }}
                    className="w-full rounded-[15px] bg-[#569643] px-4 py-2 text-sm font-bold text-white hover:bg-[#4a8039] transition"
                  >
                    Booking Now
                  </button>
                </div>
              )}
            </div>

            {/* Hero Content */}
            <div className="absolute inset-0 top-16 md:top-[150px] left-0 right-0 flex flex-col items-center gap-4 md:gap-[34px] px-4 py-8 md:py-0">
              <div className="flex flex-col gap-3 md:gap-[15px] items-center text-white text-center max-w-3xl">
                <p className="font-bold text-2xl md:text-[48px] leading-tight">Teman Setia di Setiap Perjalanan.</p>
                <p className="font-normal text-sm md:text-[16px]">Lebih dari Sekadar Panduan, Kami Adalah Kompas Setia yang Menemani Setiap Petualanganmu.</p>
              </div>

              {/* Search Bar */}
              <div className="bg-white/95 border border-[#dce7d7] shadow-[0_30px_80px_rgba(34,78,41,0.12)] flex flex-col md:flex-row gap-4 md:gap-[38px] items-center px-4 md:px-[30px] py-4 md:py-[20px] rounded-[30px] w-full md:w-auto max-w-5xl mx-4">
                {/* Destination */}
                <div className="flex flex-col gap-2 md:gap-[10px] relative w-full md:w-auto">
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[21px] text-[#569643]">
                      <MapPin className="w-full h-full" />
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">Destinasi</p>
                  </div>
                  <div
                    className="flex gap-2 md:gap-[10px] items-center cursor-pointer"
                    onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}
                  >
                    <p className="font-medium text-xs md:text-[14px] text-[#333]">{selectedDestination}</p>
                    <div className="size-3 md:size-[16px] text-[#333]">
                      <ChevronDown className="w-full h-full" />
                    </div>
                  </div>
                  {showDestinationDropdown && (
                    <div className="absolute top-[70px] left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
                      {destinations.map((dest) => (
                        <div
                          key={dest.name}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal text-xs md:text-[14px]"
                          onClick={() => {
                            setSelectedDestination(dest.name);
                            setShowDestinationDropdown(false);
                          }}
                        >
                          {dest.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="hidden md:block h-[49.794px] w-0 rotate-90">
                  <svg className="w-[49.794px] h-[1px]" fill="none" viewBox="0 0 49.7938 1">
                    <line stroke="#878787" x2="49.7938" y1="0.5" y2="0.5" />
                  </svg>
                </div>

                {/* People */}
                <div className="flex flex-col gap-2 md:gap-[10px] relative w-full md:w-auto">
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[18px] text-[#569643]">
                      <Users className="w-full h-full" />
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">Orang</p>
                  </div>
                  <div
                    className="flex gap-2 md:gap-[10px] items-center cursor-pointer"
                    onClick={() => setShowPeopleDropdown(!showPeopleDropdown)}
                  >
                    <p className="font-medium text-xs md:text-[14px] text-[#333]">{selectedPeople}</p>
                    <div className="size-3 md:size-[16px] text-[#333]">
                      <ChevronDown className="w-full h-full" />
                    </div>
                  </div>
                  {showPeopleDropdown && (
                    <div className="absolute top-[70px] left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
                      {peopleOptions.map((option) => (
                        <div
                          key={option}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal text-xs md:text-[14px]"
                          onClick={() => {
                            setSelectedPeople(option);
                            setShowPeopleDropdown(false);
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="hidden md:block h-[49.794px] w-0 rotate-90">
                  <svg className="w-[49.794px] h-[1px]" fill="none" viewBox="0 0 49.7938 1">
                    <line stroke="#878787" x2="49.7938" y1="0.5" y2="0.5" />
                  </svg>
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-2 md:gap-[10px] relative w-full md:w-auto">
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[18px] text-[#569643]">
                      <CalendarDays className="w-full h-full" />
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">Start</p>
                  </div>
                  <div className="flex gap-2 md:gap-[10px] items-center cursor-pointer" onClick={() => setShowStartDateDropdown(!showStartDateDropdown)}>
                    <p className="font-medium text-xs md:text-[14px] text-[#333]">{startDate}</p>
                    <div className="size-3 md:size-[16px] text-[#333]">
                      <ChevronDown className="w-full h-full" />
                    </div>
                  </div>
                  {showStartDateDropdown && (
                    <div className="absolute top-[70px] left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
                      {startDateOptions.map((date) => (
                        <div
                          key={date}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal text-xs md:text-[14px]"
                          onClick={() => {
                            setStartDate(date);
                            setShowStartDateDropdown(false);
                          }}
                        >
                          {date}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="hidden md:block h-[49.794px] w-0 rotate-90">
                  <svg className="w-[49.794px] h-[1px]" fill="none" viewBox="0 0 49.7938 1">
                    <line stroke="#878787" x2="49.7938" y1="0.5" y2="0.5" />
                  </svg>
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-2 md:gap-[10px] relative w-full md:w-auto">
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[18px] text-[#569643]">
                      <CalendarDays className="w-full h-full" />
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">End</p>
                  </div>
                  <div className="flex gap-2 md:gap-[10px] items-center cursor-pointer" onClick={() => setShowEndDateDropdown(!showEndDateDropdown)}>
                    <p className="font-medium text-xs md:text-[14px] text-[#333]">{endDate}</p>
                    <div className="size-3 md:size-[16px] text-[#333]">
                      <ChevronDown className="w-full h-full" />
                    </div>
                  </div>
                  {showEndDateDropdown && (
                    <div className="absolute top-[70px] left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
                      {endDateOptions.map((date) => (
                        <div
                          key={date}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal text-xs md:text-[14px]"
                          onClick={() => {
                            setEndDate(date);
                            setShowEndDateDropdown(false);
                          }}
                        >
                          {date}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="bg-[#569643] px-3 md:px-[19px] py-2 md:py-[5px] rounded-[10px] hover:bg-[#4a8039] transition-colors w-full md:w-auto"
                >
                  <p className="font-normal text-xs md:text-[15px] text-white">Cari</p>
                </button>
              </div>
              {searchMessage && (
                <div className="mt-4 text-center text-sm md:text-base text-[#1B6D2A]">
                  {searchMessage}
                </div>
              )}
              {bookingMessage && (
                <div className="mt-2 text-center text-sm md:text-base text-[#425B19]">
                  {bookingMessage}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="w-full flex flex-col gap-12 md:gap-[60px] py-8 md:py-[78px] items-center px-4 md:px-[20px]">
          {/* Tentang Kami Section */}
          <div id="tentang" className="scroll-mt-28 flex flex-col gap-4 md:gap-[16px] items-center w-full max-w-3xl">
            <div className="bg-[rgba(86,150,67,0.22)] px-3 md:px-[10px] py-3 md:py-[10px] rounded-[10px]">
              <p className="font-medium text-xs md:text-[14px] text-[#569643]">TENTANG KAMI</p>
            </div>
            <p className="font-medium text-lg md:text-[24px] text-[#333]">Tentang Perusahaan</p>
            <p className="font-normal text-sm md:text-[16px] text-[#333] text-center">
              GreenTrail Travel adalah penyedia perjalanan yang menghubungkan petualang dengan destinasi lokal terbaik di Indonesia. Kami memudahkan perjalanan Anda dengan paket lengkap, dukungan personal, dan pengalaman ramah lingkungan.
            </p>
          </div>

          {/* Destinasi Section */}
          <div id="destinasi" className="scroll-mt-28 flex flex-col gap-8 md:gap-[37px] items-center w-full">
            <div className="flex flex-col gap-4 md:gap-[16px] items-center">
              <div className="bg-[rgba(86,150,67,0.22)] px-3 md:px-[10px] py-3 md:py-[10px] rounded-[10px]">
                <p className="font-medium text-xs md:text-[14px] text-[#569643]">DESTINASI</p>
              </div>
              <p className="font-medium text-lg md:text-[24px] text-[#333]">Explorasi Semua Destinasi Mimpimu</p>
              <p className="font-normal text-sm md:text-[16px] text-[#333] text-center max-w-2xl">
                Semua mimpimu ada di genggamanmu sendiri, mari jelajahi bersama kami.
              </p>
            </div>

            {/* Category Filter */}
            <div className="bg-[#e4f2de] flex gap-2 md:gap-[10px] px-2 md:px-[10px] py-2 md:py-[8px] rounded-[20px] flex-wrap justify-center shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 md:px-[20px] py-2 md:py-[10px] rounded-full transition-all text-xs md:text-[14px] ${
                    selectedCategory === category
                      ? 'bg-[#569643] text-white shadow-lg'
                      : 'bg-white/80 text-[#2d3f1e] hover:bg-[#d7e8cf]'
                  }`}
                >
                  <p className="font-medium">{category}</p>
                </button>
              ))}
            </div>

            {/* Destination Cards */}
            <div className="flex gap-4 md:gap-[37px] items-start flex-wrap justify-center">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((destination) => (
                  <div key={destination.name} className="flex flex-col gap-2 md:gap-[10px] w-full sm:w-80 md:w-[309px] bg-white rounded-[30px] p-4 shadow-[0_25px_60px_rgba(52,75,36,0.12)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="h-32 md:h-[157px] rounded-[24px] overflow-hidden">
                      <img alt={destination.name} className="w-full h-full object-cover" src={destination.image} />
                    </div>
                    <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">{destination.name}</p>
                    <div className="flex gap-4 md:gap-[29px] flex-wrap">
                      <div className="flex gap-2 md:gap-[10px] items-center">
                        <div className="size-4 md:size-[18px] text-[#878787]">
                          <Clock className="w-full h-full" />
                        </div>
                        <p className="font-normal text-xs md:text-[14px] text-[#878787]">{destination.duration}</p>
                      </div>
                      <div className="flex gap-2 md:gap-[10px] items-center">
                        <div className="size-4 md:size-[18px] text-[#878787]">
                          <Users className="w-full h-full" />
                        </div>
                        <p className="font-normal text-xs md:text-[14px] text-[#878787]">{destination.people}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-sm text-[#333] w-full">Tidak ada destinasi untuk kategori "{selectedCategory}".</p>
              )}
            </div>
          </div>

          {/* Pelayanan Section */}
          <div id="pelayanan" className="scroll-mt-28 flex flex-col gap-8 md:gap-[30px] w-full max-w-5xl">
            <div className="flex flex-col gap-4 md:gap-[16px]">
              <div className="bg-[rgba(86,150,67,0.22)] px-3 md:px-[10px] py-3 md:py-[10px] rounded-[10px] w-fit">
                <p className="font-medium text-xs md:text-[14px] text-[#569643]">PELAYANAN</p>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
                <p className="font-medium text-lg md:text-[24px] text-[#333] w-full md:w-1/2">Pelayanan Yang Kita Miliki</p>
                <p className="font-normal text-sm md:text-[16px] text-[#333] w-full md:w-full leading-relaxed">
                  GreenTrail Travel selalu siap memberi pengalaman perjalanan yang aman, nyaman, dan mudah. Dari pemesanan hingga perjalanan pulang, tim kami siap mendukung setiap langkah perjalanan Anda.
                </p>
              </div>
            </div>

            {/* Service Cards */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-[20px]">
              <div className="flex-1 bg-white border border-[#e7efdf] rounded-[30px] p-5 md:p-[18px] flex flex-col gap-4 items-center justify-center min-h-[220px] shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <Package className="size-12 md:size-[52px] text-[#569643]" />
                <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Penyewaan Alat Penunjang</p>
                <p className="font-normal text-xs md:text-[14px] text-[#333] text-center">
                  Seperti bantal leher, selimut, atau power bank yang disediakan untuk kenyamanan perjalanan Anda.
                </p>
              </div>
              <div className="flex-1 bg-white border border-[#e7efdf] rounded-[30px] p-5 md:p-[18px] flex flex-col gap-4 items-center justify-center min-h-[220px] shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <Wifi className="size-12 md:size-[52px] text-[#569643]" />
                <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Hiburan On-Board</p>
                <p className="font-normal text-xs md:text-[14px] text-[#333] text-center">
                  Akses Wi-Fi gratis dalam armada atau sistem hiburan on-board untuk perjalanan yang lebih seru.
                </p>
              </div>
              <div className="flex-1 bg-white border border-[#e7efdf] rounded-[30px] p-5 md:p-[18px] flex flex-col gap-4 items-center justify-center min-h-[220px] shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <ShieldCheck className="size-12 md:size-[52px] text-[#569643]" />
                <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Asuransi Perjalanan</p>
                <p className="font-normal text-xs md:text-[14px] text-[#333] text-center">
                  Proteksi perjalanan dan barang bawaan agar perjalanan Anda tetap aman dan tenang.
                </p>
              </div>
            </div>
          </div>

          {/* Galeri Konsumen Section */}
          <div id="galeri" className="scroll-mt-28 flex flex-col gap-8 md:gap-[37px] items-center w-full max-w-4xl">
            <div className="flex flex-col gap-4 md:gap-[16px] items-center">
              <div className="bg-[rgba(86,150,67,0.22)] px-3 md:px-[10px] py-3 md:py-[10px] rounded-[10px]">
                <p className="font-medium text-xs md:text-[14px] text-[#569643]">GALERI KONSUMEN</p>
              </div>
              <p className="font-medium text-lg md:text-[24px] text-[#333]">Cerita Nyata dari Setiap Perjalanan</p>
              <p className="font-normal text-sm md:text-[16px] text-[#333] text-center">
                Bukan Sekadar Testimoni, Ini Adalah Bukti Nyata Kenyamanan yang Kami Berikan di Setiap Kilometer Perjalanan Anda.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-[37px] items-start justify-between w-full">
              {/* Column 1 */}
              <div className="flex flex-col gap-4 md:gap-[37px] flex-1">
                <div className="flex flex-col gap-2 md:gap-[10px]">
                  <div className="h-40 md:h-[240px] rounded-[20px] overflow-hidden">
                    <img alt="Pangandaran" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={imgFrame30} />
                  </div>
                  <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Pangandaran</p>
                  <p className="font-normal text-xs md:text-[14px] text-[#333]">By andrialexa, di Instagram</p>
                </div>
                <div className="flex flex-col gap-2 md:gap-[10px]">
                  <div className="h-64 md:h-[515px] rounded-[20px] overflow-hidden">
                    <img alt="Bandung" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={imgFrame33} />
                  </div>
                  <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Bandung</p>
                  <p className="font-normal text-xs md:text-[14px] text-[#333]">By hadiadiputra, di Instagram</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 md:gap-[37px] flex-1">
                <div className="flex flex-col gap-2 md:gap-[10px]">
                  <div className="h-64 md:h-[522px] rounded-[20px] overflow-hidden">
                    <img alt="Puncak Bogor" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={imgFrame34} />
                  </div>
                  <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Puncak Bogor</p>
                  <p className="font-normal text-xs md:text-[14px] text-[#333]">By tonygeryy, di Instagram</p>
                </div>
                <div className="flex flex-col gap-2 md:gap-[10px]">
                  <div className="h-40 md:h-[240px] rounded-[20px] overflow-hidden">
                    <img alt="Bromo" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={imgFrame35} />
                  </div>
                  <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Bromo</p>
                  <p className="font-normal text-xs md:text-[14px] text-[#333]">By harrytraffic, di Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-black px-4 md:px-[140px] py-6 md:py-[20px] mt-12 md:mt-[78px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 text-white text-sm md:text-base">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:gap-[15px] text-center md:text-left">
              <p className="font-medium">PENDUKUNG</p>
              <p className="font-medium text-xs md:text-[14px]">FAQ</p>
              <p className="font-medium text-xs md:text-[14px]">Partner</p>
              <p className="font-medium text-xs md:text-[14px]">Semua Solusi</p>
            </div>

            {/* Column 2 - Center */}
            <div className="flex flex-col gap-3 md:gap-[15px] items-center">
              <p className="font-medium">GreenTrail Travel</p>
              <div className="flex gap-2 md:gap-[10px] items-center text-white">
                <MapPin className="size-4 md:size-[20.667px]" />
                <Globe className="size-4 md:size-[18px]" />
                <Clock className="size-4 md:size-[20px]" />
              </div>
              <div className="flex flex-col gap-1 md:gap-[6px] items-center justify-center">
                <div className="flex gap-2 md:gap-[10px] items-center">
                  <div className="size-4 md:size-[18px] text-white">
                    <MapPin className="w-full h-full" />
                  </div>
                  <p className="font-medium text-xs md:text-[14px]">Jl. Buahbatu No.04, Bandung</p>
                </div>
                <p className="font-medium text-xs md:text-[14px]">www.greentrailtravel.com</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 md:gap-[15px] text-center md:text-right">
              <p className="font-medium">EKSPOLARASI KITA</p>
              <p className="font-medium text-xs md:text-[14px]">Tentang Kita</p>
              <p className="font-medium text-xs md:text-[14px]">Review</p>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="fixed right-4 md:right-[50px] bottom-4 md:bottom-[50px] size-12 md:size-[65.733px] bg-white rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center border border-[#dbf0dd]"
        >
          <MessageCircle className="w-8 h-8 md:w-[34px] md:h-[34px] text-[#1FAF38]" />
        </button>
      </div>
    </div>
  );
}
