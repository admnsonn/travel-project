import { useState } from "react";
import svgPaths from "../imports/svg-xs6hpzersk";
import imgFrame1 from "../assets/gambar1.png";
import imgFrame31 from "../assets/gambar2.png";
import imgFrame32 from "../assets/gambar3.png";
import imgFrame30 from "../assets/gambar4.png";
import imgFrame33 from "../assets/gambar5.png";
import imgFrame34 from "../assets/gambar2.png";
import imgFrame35 from "../assets/gambar3.png";

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState("Semarang");
  const [selectedPeople, setSelectedPeople] = useState("Dua");
  const [startDate, setStartDate] = useState("12-08-2028");
  const [endDate, setEndDate] = useState("14-08-2028");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);
  const [showStartDateDropdown, setShowStartDateDropdown] = useState(false);
  const [showEndDateDropdown, setShowEndDateDropdown] = useState(false);
  const [startDateOptions] = useState(["10-08-2028", "11-08-2028", "12-08-2028", "13-08-2028"]);
  const [endDateOptions] = useState(["13-08-2028", "14-08-2028", "15-08-2028", "16-08-2028"]);

  const destinations = ["Semarang", "Jakarta", "Bandung", "Surabaya", "Yogyakarta"];
  const peopleOptions = ["Satu", "Dua", "Tiga", "Empat", "Lima"];
  const categories = ["Semua", "Trending", "Alam", "Kota"];

  const handleSearch = () => {
    alert(`Mencari: ${selectedDestination}, ${selectedPeople} orang, ${startDate} - ${endDate}`);
  };

  const handleBooking = () => {
    alert("Booking Now clicked!");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  return (
    <div className="w-screen h-screen overflow-auto bg-white font-poppins">
      <div className="min-h-screen w-full flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full relative">
          <div className="w-full h-screen md:h-[463px] relative overflow-hidden">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFrame1} />

            {/* Navbar */}
            <div className="absolute top-0 left-0 right-0 bg-[rgba(0,0,0,0.36)] px-4 md:px-[25px] py-4 md:py-[20px]">
              <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex gap-2 md:gap-[10px] items-center min-w-fit">
                  <div className="size-5 md:size-[23.593px] bg-[#D9D9D9] rounded-full" />
                  <p className="font-medium text-base md:text-[20px] text-white">Nama</p>
                </div>

                {/* Menu */}
                <div className="hidden lg:flex gap-6 md:gap-[32px] items-center text-xs md:text-[15px] text-white flex-1 justify-center">
                  <p className="font-medium cursor-pointer hover:opacity-80">Home</p>
                  <p className="font-normal cursor-pointer hover:opacity-80">Tentang Kami</p>
                  <p className="font-normal cursor-pointer hover:opacity-80">Destinasi</p>
                  <p className="font-normal cursor-pointer hover:opacity-80">Pelayanan</p>
                  <p className="font-normal cursor-pointer hover:opacity-80">Galeri Konsumen</p>
                </div>

                {/* Booking Button */}
                <button
                  onClick={handleBooking}
                  className="bg-[#569643] px-3 md:px-[19px] py-2 md:py-[5px] rounded-[15px] hover:bg-[#4a8039] transition-colors min-w-fit"
                >
                  <p className="font-bold text-xs md:text-[15px] text-white">Booking Now</p>
                </button>
              </div>
            </div>

            {/* Hero Content */}
            <div className="absolute inset-0 top-16 md:top-[150px] left-0 right-0 flex flex-col items-center gap-4 md:gap-[34px] px-4 py-8 md:py-0">
              <div className="flex flex-col gap-3 md:gap-[15px] items-center text-white text-center max-w-3xl">
                <p className="font-bold text-2xl md:text-[48px] leading-tight">Teman Setia di Setiap Perjalanan.</p>
                <p className="font-normal text-sm md:text-[16px]">Lebih dari Sekadar Panduan, Kami Adalah Kompas Setia yang Menemani Setiap Petualanganmu.</p>
              </div>

              {/* Search Bar */}
              <div className="bg-white flex flex-col md:flex-row gap-4 md:gap-[38px] items-center px-4 md:px-[30px] py-4 md:py-[20px] rounded-[20px] w-full md:w-auto max-w-5xl mx-4">
                {/* Destination */}
                <div className="flex flex-col gap-2 md:gap-[10px] relative w-full md:w-auto">
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[21px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 14.8861 18.0832">
                        <path clipRule="evenodd" d={svgPaths.p26a70d00.path} fill="#878787" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p33ef4800.path} fill="#878787" fillRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">Destinasi</p>
                  </div>
                  <div
                    className="flex gap-2 md:gap-[10px] items-center cursor-pointer"
                    onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}
                  >
                    <p className="font-medium text-xs md:text-[14px] text-[#333]">{selectedDestination}</p>
                    <div className="size-3 md:size-[16px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d={svgPaths.p1dffb80.path} fill="black" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {showDestinationDropdown && (
                    <div className="absolute top-[70px] left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
                      {destinations.map((dest) => (
                        <div
                          key={dest}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal text-xs md:text-[14px]"
                          onClick={() => {
                            setSelectedDestination(dest);
                            setShowDestinationDropdown(false);
                          }}
                        >
                          {dest}
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
                    <div className="size-4 md:size-[18px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 18 19">
                        <path d={svgPaths.p1dc69a80.path} stroke="#878787" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">Orang</p>
                  </div>
                  <div
                    className="flex gap-2 md:gap-[10px] items-center cursor-pointer"
                    onClick={() => setShowPeopleDropdown(!showPeopleDropdown)}
                  >
                    <p className="font-medium text-xs md:text-[14px] text-[#333]">{selectedPeople}</p>
                    <div className="size-3 md:size-[16px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d={svgPaths.p1dffb80.path} fill="black" fillRule="evenodd" />
                      </svg>
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
                    <div className="size-4 md:size-[18px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                        <path d={svgPaths.pdc56400.path} fill="#878787" />
                        <path d="M4 7H5V8H4V7Z" fill="#878787" />
                        <path d="M7 7H8V8H7V7Z" fill="#878787" />
                        <path d="M10 7H11V8H10V7Z" fill="#878787" />
                        <path d="M13 7H14V8H13V7Z" fill="#878787" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">Start</p>
                  </div>
                  <div className="flex gap-2 md:gap-[10px] items-center cursor-pointer" onClick={() => setShowStartDateDropdown(!showStartDateDropdown)}>
                    <p className="font-medium text-xs md:text-[14px] text-[#333]">{startDate}</p>
                    <div className="size-3 md:size-[16px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d={svgPaths.p1dffb80.path} fill="black" fillRule="evenodd" />
                      </svg>
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
                    <div className="size-4 md:size-[18px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                        <path d={svgPaths.pdc56400.path} fill="#878787" />
                        <path d="M4 7H5V8H4V7Z" fill="#878787" />
                        <path d="M7 7H8V8H7V7Z" fill="#878787" />
                        <path d="M10 7H11V8H10V7Z" fill="#878787" />
                        <path d="M13 7H14V8H13V7Z" fill="#878787" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">End</p>
                  </div>
                  <div className="flex gap-2 md:gap-[10px] items-center cursor-pointer" onClick={() => setShowEndDateDropdown(!showEndDateDropdown)}>
                    <p className="font-medium text-xs md:text-[14px] text-[#333]">{endDate}</p>
                    <div className="size-3 md:size-[16px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d={svgPaths.p1dffb80.path} fill="black" fillRule="evenodd" />
                      </svg>
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
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="w-full flex flex-col gap-12 md:gap-[60px] py-8 md:py-[78px] items-center px-4 md:px-[20px]">
          {/* Tentang Kami Section */}
          <div className="flex flex-col gap-4 md:gap-[16px] items-center w-full max-w-3xl">
            <div className="bg-[rgba(86,150,67,0.22)] px-3 md:px-[10px] py-3 md:py-[10px] rounded-[10px]">
              <p className="font-medium text-xs md:text-[14px] text-[#569643]">TENTANG KAMI</p>
            </div>
            <p className="font-medium text-lg md:text-[24px] text-[#333]">Tentang Perusahaan</p>
            <p className="font-normal text-sm md:text-[16px] text-[#333] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          {/* Destinasi Section */}
          <div className="flex flex-col gap-8 md:gap-[37px] items-center w-full">
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
            <div className="bg-[rgba(73,135,192,0.2)] flex gap-2 md:gap-[10px] px-2 md:px-[10px] py-2 md:py-[8px] rounded-[15px] flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 md:px-[18px] py-2 md:py-[10px] rounded-[10px] transition-colors text-xs md:text-[14px] ${
                    selectedCategory === category
                      ? 'bg-[#569643] text-white'
                      : 'bg-transparent text-[#333] hover:bg-[rgba(86,150,67,0.1)]'
                  }`}
                >
                  <p className="font-medium">{category}</p>
                </button>
              ))}
            </div>

            {/* Destination Cards */}
            <div className="flex gap-4 md:gap-[37px] items-start flex-wrap justify-center">
              {/* Pangandaran */}
              <div className="flex flex-col gap-2 md:gap-[10px] w-full sm:w-80 md:w-[309px]">
                <div className="h-32 md:h-[157px] rounded-[20px] overflow-hidden">
                  <img alt="Pangandaran" className="w-full h-full object-cover" src={imgFrame1} />
                </div>
                <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Pangandaran</p>
                <div className="flex gap-4 md:gap-[29px] flex-wrap">
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[18px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                        <path d={svgPaths.pdc56400.path} fill="#878787" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">2 Hari</p>
                  </div>
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[18px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 18 19">
                        <path d={svgPaths.p1dc69a80.path} stroke="#878787" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">Min 2 Orang</p>
                  </div>
                </div>
              </div>

              {/* Puncak Bogor */}
              <div className="flex flex-col gap-2 md:gap-[10px] w-full sm:w-80 md:w-[309px]">
                <div className="h-32 md:h-[157px] rounded-[20px] overflow-hidden">
                  <img alt="Puncak Bogor" className="w-full h-full object-cover" src={imgFrame31} />
                </div>
                <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Puncak Bogor</p>
                <div className="flex gap-4 md:gap-[29px] flex-wrap">
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[18px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                        <path d={svgPaths.pdc56400.path} fill="#878787" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">1 Hari</p>
                  </div>
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[18px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 18 19">
                        <path d={svgPaths.p1dc69a80.path} stroke="#878787" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">Min 7 Orang</p>
                  </div>
                </div>
              </div>

              {/* Jogjakarta */}
              <div className="flex flex-col gap-2 md:gap-[10px] w-full sm:w-80 md:w-[309px]">
                <div className="h-32 md:h-[157px] rounded-[20px] overflow-hidden">
                  <img alt="Jogjakarta" className="w-full h-full object-cover" src={imgFrame32} />
                </div>
                <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Jogjakarta</p>
                <div className="flex gap-4 md:gap-[29px] flex-wrap">
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[18px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                        <path d={svgPaths.pdc56400.path} fill="#878787" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">3 Hari</p>
                  </div>
                  <div className="flex gap-2 md:gap-[10px] items-center">
                    <div className="size-4 md:size-[18px]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 18 19">
                        <path d={svgPaths.p1dc69a80.path} stroke="#878787" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <p className="font-normal text-xs md:text-[14px] text-[#878787]">Min 10 Orang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pelayanan Section */}
          <div className="flex flex-col gap-8 md:gap-[30px] w-full max-w-5xl">
            <div className="flex flex-col gap-4 md:gap-[16px]">
              <div className="bg-[rgba(86,150,67,0.22)] px-3 md:px-[10px] py-3 md:py-[10px] rounded-[10px] w-fit">
                <p className="font-medium text-xs md:text-[14px] text-[#569643]">PELAYANAN</p>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
                <p className="font-medium text-lg md:text-[24px] text-[#333] w-full md:w-1/2">Pelayanan Yang Kita Miliki</p>
                <p className="font-normal text-sm md:text-[16px] text-[#333] w-full md:w-full leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>

            {/* Service Cards */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-[20px]">
              {/* Service 1 */}
              <div className="flex-1 border border-[#c4c4c4] rounded-[20px] p-4 md:p-[10px] flex flex-col gap-3 md:gap-[10px] items-center justify-center min-h-[202px]">
                <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Penyewaan Alat Penunjang</p>
                <p className="font-normal text-xs md:text-[14px] text-[#333] text-center">
                  Seperti bantal leher, selimut, atau bahkan power bank yang disediakan oleh pihak travel.
                </p>
                <div className="flex flex-col items-start">
                  <div className="size-8 md:size-[44px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 44 34.9533">
                      <rect fill="#569643" height="34.9533" rx="5" width="44" />
                      <path d={svgPaths.p36bdaf00.path} fill="white" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex-1 border border-[#c4c4c4] rounded-[20px] p-4 md:p-[10px] flex flex-col gap-3 md:gap-[10px] items-center justify-center min-h-[202px]">
                <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Hiburan On-Board</p>
                <p className="font-normal text-xs md:text-[14px] text-[#333] text-center">
                  Akses Wi-Fi gratis di dalam armada atau sistem hiburan (audio/video) selama perjalanan.
                </p>
                <div className="flex flex-col items-start">
                  <div className="size-8 md:size-[44px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 44 34.9533">
                      <rect fill="#569643" height="34.9533" rx="5" width="44" />
                      <path d={svgPaths.p36bdaf00.path} fill="white" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex-1 border border-[#c4c4c4] rounded-[20px] p-4 md:p-[10px] flex flex-col gap-3 md:gap-[10px] items-center justify-center min-h-[202px]">
                <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Asuransi Perjalanan</p>
                <p className="font-normal text-xs md:text-[14px] text-[#333] text-center">
                  Proteksi otomatis atau opsional untuk penumpang dan barang bawaan selama perjalanan antar kota.
                </p>
                <div className="flex flex-col items-start">
                  <div className="size-8 md:size-[44px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 44 34.9533">
                      <rect fill="#569643" height="34.9533" rx="5" width="44" />
                      <path d={svgPaths.p36bdaf00.path} fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Galeri Konsumen Section */}
          <div className="flex flex-col gap-8 md:gap-[37px] items-center w-full max-w-4xl">
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
                    <img alt="Pangandaran" className="w-full h-full object-cover" src={imgFrame30} />
                  </div>
                  <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Pangandaran</p>
                  <p className="font-normal text-xs md:text-[14px] text-[#333]">By andrialexa, di Instagram</p>
                </div>
                <div className="flex flex-col gap-2 md:gap-[10px]">
                  <div className="h-64 md:h-[515px] rounded-[20px] overflow-hidden">
                    <img alt="Bandung" className="w-full h-full object-cover" src={imgFrame33} />
                  </div>
                  <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Bandung</p>
                  <p className="font-normal text-xs md:text-[14px] text-[#333]">By hadiadiputra, di Instagram</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 md:gap-[37px] flex-1">
                <div className="flex flex-col gap-2 md:gap-[10px]">
                  <div className="h-64 md:h-[522px] rounded-[20px] overflow-hidden">
                    <img alt="Puncak Bogor" className="w-full h-full object-cover" src={imgFrame34} />
                  </div>
                  <p className="font-medium text-sm md:text-[16px] text-[#333] text-center">Puncak Bogor</p>
                  <p className="font-normal text-xs md:text-[14px] text-[#333]">By tonygeryy, di Instagram</p>
                </div>
                <div className="flex flex-col gap-2 md:gap-[10px]">
                  <div className="h-40 md:h-[240px] rounded-[20px] overflow-hidden">
                    <img alt="Bromo" className="w-full h-full object-cover" src={imgFrame35} />
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
              <p className="font-medium">NAMA TRAVEL</p>
              <div className="flex gap-2 md:gap-[10px] items-center">
                <div className="size-4 md:size-[20.667px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 20.6667 20.6667">
                    <path d={svgPaths.p1278b700.path} fill="white" />
                  </svg>
                </div>
                <div className="size-4 md:size-[18px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p12a54900.path} fill="white" />
                  </svg>
                </div>
                <div className="size-4 md:size-[20px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p99e5b00.path} fill="white" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-2 md:gap-[10px] items-center justify-center">
                <div className="size-4 md:size-[18px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 12.7595 14.6388">
                    <path clipRule="evenodd" d={svgPaths.p24655800.path} fill="white" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p3d25be00.path} fill="white" fillRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium text-xs md:text-[14px]">Jl. Buahbatu No.04 bla bla bla</p>
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
          className="fixed right-4 md:right-[50px] bottom-4 md:bottom-[50px] size-12 md:size-[65.733px] bg-[#E9E9E9] rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
        >
          <div className="size-8 md:size-[43px] relative">
            <svg className="absolute inset-[1.73%_1.73%_2.06%_1.73%]" fill="none" viewBox="0 0 41.5106 41.3742">
              <path d={svgPaths.p1abe9d00.path} fill="url(#paint0_linear_1_346)" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_346" x1="20.7553" x2="20.7553" y1="41.3742" y2="0">
                  <stop stopColor="#1FAF38" />
                  <stop offset="1" stopColor="#60D669" />
                </linearGradient>
              </defs>
            </svg>
            <svg className="absolute inset-[0_0_0.33%_0]" fill="none" viewBox="0 0 43 42.8578">
              <path d={svgPaths.p2ae62700.path} fill="url(#paint0_linear_1_363)" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_363" x1="21.5" x2="21.5" y1="42.8578" y2="0">
                  <stop stopColor="#F9F9F9" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
            <svg className="absolute inset-[26.58%_24.53%_26.89%_24.91%]" fill="none" viewBox="0 0 21.743 20.0089">
              <path d={svgPaths.p280c3270.path} fill="white" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
