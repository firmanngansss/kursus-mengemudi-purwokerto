import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock3, CreditCard, MapPin, MessageCircle, Phone, Quote, ShieldCheck, Star, Users, Wallet, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import logoBaru from "./assets/logo-baru.jpg";


const LogoMark = ({ className = "h-20 md:h-24 w-auto" }) => (
  <img
    src={logoBaru}
    alt="Elite Driving Academy logo"
    className={`${className} object-contain`}
  />
);

export default function EliteDrivingAcademyWebsite() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    packageName: "Gold",
    schedule: "Weekday",
    transmission: "Manual",
    pickup: "",
    notes: "",
  });

  const waNumber = "6287734799346";
  const mapsUrl = "https://maps.app.goo.gl/j4EeCusHbb7MkGhg9";
  const isMobilPribadi = form.packageName === "Mobil Pribadi";

  const packages = [
    {
      name: "Basic",
      price: "Rp299.000",
      sessions: "4x pertemuan / 4 jam",
      desc: "Cocok untuk pemula yang ingin belajar dasar mengemudi dengan tempo santai.",
      highlight: "Mulai hemat",
    },
    {
      name: "Gold",
      price: "Rp499.000",
      sessions: "6x pertemuan / 6 jam",
      desc: "Pilihan paling seimbang untuk latihan lebih stabil sampai percaya diri di jalan.",
      highlight: "Paling diminati",
    },
    {
      name: "Premium",
      price: "Rp749.000",
      sessions: "8x pertemuan / 8 jam",
      desc: "Untuk yang ingin latihan lebih intensif dan siap berkendara lebih mandiri.",
      highlight: "Super promo",
    },
    {
      name: "Mobil Pribadi",
      price: "Rp280.000",
      sessions: "4x pertemuan / 4 jam",
      desc: "Belajar pakai mobil pribadi manual atau matic. Area Banyumas.",
      highlight: "Lebih hemat",
    },
  ];

  const benefits = [
    "Harga terjangkau",
    "Free drink & candies",
    "Materi lengkap",
    "Instruktur Gen-Z yang komunikatif",
    "Area latihan lengkap",
    "Weekday & weekend tersedia",
  ];

  const testimonials = [
    {
      name: "Nabila",
      text: "Awalnya takut banget nyetir, tapi instruktur sabar dan ngajarnya enak dipahami. Sekarang sudah berani bawa mobil sendiri.",
      role: "Paket Gold",
    },
    {
      name: "Rizky",
      text: "Jadwal fleksibel, admin cepat respon, dan materinya runtut. Tidak cuma praktik, tapi juga dikasih pemahaman situasi jalan.",
      role: "Paket Premium",
    },
    {
      name: "Dinda",
      text: "Worth it. Cocok untuk pemula karena diajar dari nol sampai parkir dan putar balik. Tempat latihan juga nyaman.",
      role: "Paket Basic",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Belajar dengan aman",
      text: "Pendekatan latihan bertahap supaya peserta tidak panik saat mulai mengemudi.",
    },
    {
      icon: Users,
      title: "Instruktur ramah",
      text: "Penjelasan dibuat sederhana, langsung praktik, tidak dibuat ribet seperti hidup manusia pada umumnya.",
    },
    {
      icon: Clock3,
      title: "Jadwal fleksibel",
      text: "Tersedia weekday dan weekend, jadi tidak perlu berantem dulu dengan jadwal kuliah atau kerja.",
    },
  ];

  const whatsappMessage = useMemo(() => {
    const text = `Halo Elite Driving Academy, saya ingin memesan kursus mengemudi.%0A%0A` +
      `Nama: ${encodeURIComponent(form.name || "-")}%0A` +
      `No. WhatsApp: ${encodeURIComponent(form.phone || "-")}%0A` +
      `Paket: ${form.packageName}%0A` +
      `Jadwal: ${form.schedule}%0A` +
      `Transmisi: ${form.transmission}%0A` +
      (isMobilPribadi
        ? `Alamat Jemput: ${encodeURIComponent(form.pickup || "-")}%0A`
        : `Lokasi Latihan: ${encodeURIComponent(mapsUrl)}%0A`) +
      `Catatan: ${encodeURIComponent(form.notes || "-")}%0A%0A` +
      `Mohon info langkah pembayaran dan konfirmasi jadwal. Terima kasih.`;

    return `https://wa.me/${waNumber}?text=${text}`;
  }, [form]);

  const onChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f0df_0%,#fbf8ef_45%,#f4efe1_100%)] text-slate-900">
      <section className="relative overflow-hidden border-b border-emerald-900/10 bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.18),_transparent_28%),linear-gradient(135deg,#f8f3e6_0%,#fffdf8_42%,#eef8f1_100%)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-emerald-300/70 blur-3xl" />
          <div className="absolute top-12 right-0 h-80 w-80 rounded-full bg-yellow-200/80 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-teal-200/60 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.45)_35%,transparent_72%)] opacity-40" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-8 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-14">
          <div>
            <div className="mb-8 inline-flex items-center rounded-[2rem] border border-white/60 bg-white/80 px-4 py-3 shadow-lg shadow-emerald-900/10 backdrop-blur">
              <LogoMark className="h-20 w-auto md:h-24" />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-6xl"
            >
              Kursus Mengemudi Purwokerto 
            </motion.h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Belajar mobil manual atau matic dengan instruktur yang sabar, jadwal fleksibel, dan sistem pemesanan langsung lewat WhatsApp. Praktis dan cepat.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl bg-emerald-700 px-6 py-6 text-base shadow-lg shadow-emerald-900/10 hover:bg-emerald-800">
                <a href="#form-pemesanan">Pesan Sekarang</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-emerald-700 bg-white/70 px-6 py-6 text-base text-emerald-800 backdrop-blur">
                <a href="#paket">Lihat Paket Harga</a>
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card key={idx} className="rounded-3xl border border-white/80 bg-white/80 shadow-lg shadow-emerald-900/5 backdrop-blur">
                    <CardContent className="p-5">
                      <div className="mb-3 inline-flex rounded-2xl bg-gradient-to-br from-emerald-100 to-yellow-50 p-3 text-emerald-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="self-center"
          >
            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl shadow-emerald-900/10 backdrop-blur">
              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#0f766e_0%,#14805e_28%,#1f9d67_58%,#f0b429_130%)] p-6 text-white shadow-inner">
                <Badge className="rounded-full bg-yellow-300 px-3 py-1 text-slate-900 hover:bg-yellow-300">Promo aktif</Badge>
                <h2 className="mt-4 text-3xl font-black">Mulai dari Rp280.000</h2>
                <p className="mt-3 text-white/90">
                  Paket belajar untuk pemula sampai yang ingin latihan lebih intensif. Bisa weekday maupun weekend.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <div className="text-sm text-white/80">Area layanan</div>
                    <div className="mt-1 font-semibold">Purwokerto & Banyumas</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <div className="text-sm text-white/80">Extra time</div>
                    <div className="mt-1 font-semibold">Rp100.000 / 1 jam</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {benefits.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-[linear-gradient(180deg,#fffdf7_0%,#f1faf4_100%)] p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-700" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="paket" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Paket harga</div>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Pilih paket yang cocok untuk ritme belajarmu</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            Semua paket tersedia untuk weekday dan weekend. Tinggal pilih intensitas latihan yang sesuai. Manusia memang suka menunda, tapi setidaknya pilihan paketnya kami buat jelas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, idx) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.08 }}>
              <Card className={`h-full rounded-[2rem] border-0 shadow-xl shadow-black/5 ${pkg.name === "Gold" ? "bg-[linear-gradient(135deg,#0f766e_0%,#198f69_55%,#f2c14f_140%)] text-white" : "bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,252,247,0.98)_100%)]"}`}>
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <Badge className={`${pkg.name === "Gold" ? "bg-yellow-300 text-slate-900 hover:bg-yellow-300" : "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"} rounded-full px-3 py-1`}>
                      {pkg.highlight}
                    </Badge>
                    <Wallet className={`h-5 w-5 ${pkg.name === "Gold" ? "text-yellow-300" : "text-emerald-700"}`} />
                  </div>
                  <h3 className="text-2xl font-black">{pkg.name}</h3>
                  <div className={`mt-4 text-4xl font-black ${pkg.name === "Gold" ? "text-white" : "text-emerald-700"}`}>{pkg.price}</div>
                  <div className={`mt-3 font-semibold ${pkg.name === "Gold" ? "text-white/90" : "text-slate-700"}`}>{pkg.sessions}</div>
                  <p className={`mt-4 text-sm leading-7 ${pkg.name === "Gold" ? "text-white/85" : "text-slate-600"}`}>{pkg.desc}</p>
                  <div className="mt-6 flex-1" />
                  <Button
                    onClick={() => {
                      onChange("packageName", pkg.name);
                      document.getElementById("form-pemesanan")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`mt-4 rounded-2xl px-5 py-6 text-base ${pkg.name === "Gold" ? "bg-white text-emerald-800 hover:bg-white/90" : "bg-emerald-700 hover:bg-emerald-800"}`}
                  >
                    Pilih Paket <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-emerald-900/10 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf8_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Kenapa pilih kami</div>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Belajar dari dasar sampai lebih percaya diri di jalan</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Program dirancang untuk membantu peserta memahami kontrol kendaraan, etika berkendara, latihan area, hingga kesiapan menghadapi kondisi jalan nyata. Tidak asal suruh gas dan rem lalu berharap semesta bekerja sama.
              </p>

              <div className="mt-8 grid gap-4">
                {benefits.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm shadow-emerald-900/5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="rounded-[2rem] border-0 bg-[linear-gradient(145deg,#fffdf8_0%,#f1fbf5_100%)] shadow-lg shadow-emerald-900/5">
                <CardContent className="p-6">
                  <CreditCard className="h-9 w-9 text-emerald-700" />
                  <h3 className="mt-4 text-xl font-black">Payment via WhatsApp</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Setelah isi form, pengguna langsung diarahkan ke WhatsApp admin untuk konfirmasi paket dan pembayaran. Cepat, familiar, dan tidak perlu drama akun tambahan.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-[2rem] border-0 bg-[linear-gradient(145deg,#fffdf8_0%,#f1fbf5_100%)] shadow-lg shadow-emerald-900/5">
                <CardContent className="p-6">
                  <Phone className="h-9 w-9 text-emerald-700" />
                  <h3 className="mt-4 text-xl font-black">Admin responsif</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Pengunjung bisa langsung menghubungi admin untuk tanya jadwal, area latihan, ketersediaan instruktur, atau kebutuhan khusus lainnya.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-[2rem] border-0 bg-[linear-gradient(145deg,#fffdf8_0%,#f1fbf5_100%)] shadow-lg shadow-emerald-900/5">
                <CardContent className="p-6">
                  <MapPin className="h-9 w-9 text-emerald-700" />
                  <h3 className="mt-4 text-xl font-black">Area Purwokerto & Banyumas</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Lokasi layanan disesuaikan dengan area operasional, termasuk opsi belajar menggunakan mobil pribadi di area Banyumas.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-[2rem] border-0 bg-[linear-gradient(145deg,#fffdf8_0%,#f1fbf5_100%)] shadow-lg shadow-emerald-900/5">
                <CardContent className="p-6">
                  <Star className="h-9 w-9 text-emerald-700" />
                  <h3 className="mt-4 text-xl font-black">Pengalaman belajar nyaman</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Ada materi lengkap, free drink & candies, serta suasana belajar yang dibuat santai supaya peserta tidak tegang terus.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="testimoni" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Testimoni</div>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Cerita dari peserta</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 leading-8">
            Bukti sosial, karena manusia kadang baru percaya setelah melihat manusia lain juga berhasil.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.08 }}>
              <Card className="h-full rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fcfa_100%)] shadow-xl shadow-emerald-900/5">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-emerald-700" />
                  <p className="mt-4 text-slate-700 leading-8">“{item.text}”</p>
                  <div className="mt-6 border-t pt-4">
                    <div className="font-black">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="lokasi" className="border-y border-emerald-900/10 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf8_100%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Lokasi</div>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Area layanan dan kontak</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Elite Driving Academy melayani area Purwokerto dan Banyumas. Informasi titik jemput, jadwal latihan, dan detail lokasi dapat dikonfirmasi langsung melalui WhatsApp.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-[linear-gradient(180deg,#fffdf7_0%,#f1faf4_100%)] p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-emerald-700" />
                  <div>
                    <div className="font-bold">Lokasi layanan</div>
                    <div className="mt-1 text-slate-600">Purwokerto & Banyumas</div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-[linear-gradient(180deg,#fffdf7_0%,#f1faf4_100%)] p-5">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-emerald-700" />
                  <div>
                    <div className="font-bold">WhatsApp</div>
                    <div className="mt-1 text-slate-600">0877 3479 9346</div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-[linear-gradient(180deg,#fffdf7_0%,#f1faf4_100%)] p-5">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 text-emerald-700" />
                  <div>
                    <div className="font-bold">Instagram</div>
                    <div className="mt-1 text-slate-600">@elitedriving.id</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-900/10 bg-[linear-gradient(135deg,#064e3b_0%,#0f766e_38%,#198f69_70%,#f1c453_120%)] p-3 shadow-2xl shadow-emerald-900/15">
            <div className="flex h-full min-h-[380px] flex-col justify-between rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 text-white backdrop-blur">
              <div>
                <div className="inline-flex rounded-2xl bg-white/10 p-3">
                  <MapPin className="h-10 w-10 text-yellow-300" />
                </div>
                <h3 className="mt-5 text-2xl font-black">Lokasi Google Maps</h3>
                <p className="mt-4 max-w-lg leading-8 text-white/85">
                  Lokasi kursus sudah terhubung ke Google Maps. Pengunjung bisa langsung lihat titik lokasi, buka rute, dan navigasi tanpa harus menebak-nebak alamat.
                </p>

                <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white p-2 shadow-lg shadow-black/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4514053595562!2d109.2386597741609!3d-7.4151890925951385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e8435a37065%3A0x3c7601d2b963ca15!2sSwimming%20Pool%20Tirta%20Kembar!5e0!3m2!1sen!2sid!4v1776412919168!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full rounded-[1.25rem]"
                    title="Lokasi Elite Driving Academy"
                  />
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5">
                  <div className="text-sm uppercase tracking-[0.22em] text-white/70">Link lokasi</div>
                  <a
                    href="https://maps.app.goo.gl/j4EeCusHbb7MkGhg9"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block break-all text-base font-semibold text-white underline underline-offset-4 hover:text-yellow-200"
                  >
                    https://maps.app.goo.gl/j4EeCusHbb7MkGhg9
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-2xl bg-yellow-300 px-5 py-6 text-slate-900 hover:bg-yellow-200">
                  <a href="https://maps.app.goo.gl/j4EeCusHbb7MkGhg9" target="_blank" rel="noreferrer">
                    Buka di Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form-pemesanan" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Form pemesanan</div>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Isi data, lalu lanjut pembayaran lewat WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
            Form ini dibuat supaya admin menerima data lebih rapi: nama, nomor, pilihan paket, jadwal, transmisi, dan lokasi latihan (alamat jemput hanya untuk paket Mobil Pribadi). Sesekali teknologi memang bisa dipakai untuk hal yang benar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Card className="rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdfb_100%)] shadow-2xl shadow-emerald-900/5">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="nama" className="mb-2 block text-sm font-semibold">Nama lengkap</label>
                  <Input id="nama" name="nama" autoComplete="name" value={form.name} onChange={(e) => onChange("name", e.target.value)} placeholder="Masukkan nama lengkap" className="h-12 rounded-2xl" />
                </div>
                <div>
                  <label htmlFor="telepon" className="mb-2 block text-sm font-semibold">Nomor WhatsApp</label>
                  <Input id="telepon" name="telepon" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={(e) => onChange("phone", e.target.value)} placeholder="08xxxxxxxxxx" className="h-12 rounded-2xl" />
                </div>
                <div>
                  <label htmlFor="paket-pilihan" className="mb-2 block text-sm font-semibold">Pilih paket</label>
                  <select id="paket-pilihan" name="paket" value={form.packageName} onChange={(e) => onChange("packageName", e.target.value)} className="h-12 w-full rounded-2xl border border-input bg-background px-3 text-sm">
                    {packages.map((pkg) => (
                      <option key={pkg.name} value={pkg.name}>{pkg.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="jadwal" className="mb-2 block text-sm font-semibold">Jadwal</label>
                  <select id="jadwal" name="jadwal" value={form.schedule} onChange={(e) => onChange("schedule", e.target.value)} className="h-12 w-full rounded-2xl border border-input bg-background px-3 text-sm">
                    <option value="Weekday">Weekday</option>
                    <option value="Weekend">Weekend</option>
                    <option value="Fleksibel">Fleksibel</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="transmisi" className="mb-2 block text-sm font-semibold">Transmisi</label>
                  <select id="transmisi" name="transmisi" value={form.transmission} onChange={(e) => onChange("transmission", e.target.value)} className="h-12 w-full rounded-2xl border border-input bg-background px-3 text-sm">
                    <option value="Manual">Manual</option>
                    <option value="Matic">Matic</option>
                    <option value="Belum tahu">Belum tahu</option>
                  </select>
                </div>
                {isMobilPribadi ? (
                  <div className="md:col-span-2">
                    <label htmlFor="alamat" className="mb-2 block text-sm font-semibold">Alamat jemput</label>
                    <Input id="alamat" name="alamat" autoComplete="street-address" value={form.pickup} onChange={(e) => onChange("pickup", e.target.value)} placeholder="Alamat lengkap, contoh: Sokaraja, Banyumas" className="h-12 rounded-2xl" />
                    <p className="mt-2 text-xs leading-5 text-slate-500">Khusus paket Mobil Pribadi (area Banyumas). Isi alamat selengkap mungkin supaya admin mudah konfirmasi.</p>
                  </div>
                ) : (
                  <div className="md:col-span-2">
                    <div className="mb-2 block text-sm font-semibold">Lokasi latihan</div>
                    <div className="flex flex-col gap-3 rounded-2xl border border-emerald-900/10 bg-emerald-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                        <span>Latihan dilakukan di tempat latihan kami sesuai lokasi di Google Maps. Paket ini tidak ada layanan jemput.</span>
                      </div>
                      <a href={mapsUrl} target="_blank" rel="noreferrer" className="shrink-0 text-sm font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-900">
                        Lihat di Maps
                      </a>
                    </div>
                  </div>
                )}
                <div className="md:col-span-2">
                  <label htmlFor="catatan" className="mb-2 block text-sm font-semibold">Catatan tambahan</label>
                  <Textarea id="catatan" name="catatan" value={form.notes} onChange={(e) => onChange("notes", e.target.value)} placeholder="Misalnya: belum pernah nyetir, ingin fokus parkir, dll." className="min-h-[120px] rounded-2xl" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-[2rem] border-0 bg-[linear-gradient(135deg,#065f46_0%,#0f766e_45%,#198f69_75%,#f0ba47_145%)] text-white shadow-2xl shadow-emerald-900/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-black">Ringkasan pesanan</h3>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-3"><span>Nama</span><span className="min-w-0 break-words text-right font-semibold">{form.name || "-"}</span></div>
                  <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-3"><span>Nomor WA</span><span className="min-w-0 break-words text-right font-semibold">{form.phone || "-"}</span></div>
                  <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-3"><span>Paket</span><span className="font-semibold">{form.packageName}</span></div>
                  <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-3"><span>Jadwal</span><span className="font-semibold">{form.schedule}</span></div>
                  <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-3"><span>Transmisi</span><span className="font-semibold">{form.transmission}</span></div>
                  <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-3"><span>{isMobilPribadi ? "Alamat jemput" : "Lokasi"}</span><span className="min-w-0 break-words text-right font-semibold">{isMobilPribadi ? form.pickup || "-" : "Tempat latihan (Maps)"}</span></div>
                </div>
                <Button asChild className="mt-6 w-full rounded-2xl bg-yellow-300 py-6 text-base font-bold text-slate-900 hover:bg-yellow-200">
                  <a href={whatsappMessage} target="_blank" rel="noreferrer">
                    Lanjut Pesan via WhatsApp <MessageCircle className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="mt-4 text-sm leading-6 text-white/85">
                  Tombol ini akan membuka WhatsApp dengan format pesan otomatis untuk konfirmasi dan pembayaran.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdfb_100%)] shadow-xl shadow-emerald-900/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-black">Kontak cepat</h3>
                <div className="mt-4 space-y-3 text-slate-600">
                  <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-700" /> 0877 3479 9346</div>
                  <div className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-emerald-700" /> @elitedriving.id</div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-700" /> Purwokerto & Banyumas</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-900/10 bg-[linear-gradient(135deg,#06140f_0%,#0a2019_35%,#11392c_100%)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/95 p-2 shadow-lg shadow-black/10">
              <img
  src={logoBaru}
  alt="Elite Driving Academy logo"
  className="h-12 w-auto object-contain"
/>
            </div>
            <div>
              <div className="text-lg font-black">Elite Driving Academy</div>
              <div className="mt-1 text-sm text-white/70">Precision Driving School • Kursus Mengemudi Purwokerto</div>
            </div>
          </div>
          <div className="text-sm text-white/70">© 2026 Elite Driving Academy. Dibuat untuk pemesanan yang lebih rapi dan lebih cepat.</div>
        </div>
      </footer>
    </div>
  );
}
