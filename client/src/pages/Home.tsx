import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-orange-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const faqItems = [
  {
    question: "Le système résiste-t-il aux intempéries ?",
    answer: "Oui, nos structures en acier pré-galvanisé sont conçues pour offrir une excellente stabilité face aux vents forts, à la corrosion et aux fortes chaleurs. Elles sont certifiées IEC, UL, CE et TUV pour une durabilité maximale.",
    icon: "/figmaAssets/mask-group.png",
  },
  {
    question: "Puis-je augmenter ma capacité de stockage plus tard ?",
    answer: "Oui, avec les batteries Huawei LUNA2000, le design est 100% modulaire. Vous pouvez commencer avec 5kWh et étendre jusqu'à 30kWh selon vos besoins, sans changer l'installation existante.",
    icon: "/figmaAssets/mask-group-1.png",
  },
  {
    question: "Comment savoir si je fais des économies réelles ?",
    answer: "L'application FusionSolar de Huawei vous montre en temps réel votre production, votre autoconsommation, vos économies en DH et votre réduction de CO2. Un tableau de bord complet disponible 24h/24.",
    icon: "/figmaAssets/mask-group-2.png",
  },
  {
    question: "Quelle est la durée de la garantie sur mon installation ?",
    answer: "Nous offrons jusqu'à 15 ans de garantie sur les matériaux et 30 ans de garantie sur la performance linéaire des panneaux (ex: LONGi Hi-MO X10). Votre investissement est protégé sur le long terme.",
    icon: "/figmaAssets/mask-group-3.png",
  },
];

const testimonials = [
  {
    name: "Karim B.",
    role: "Propriétaire, Casablanca",
    quote: "Ma facture d'électricité a diminué de 80% dès le premier mois. L'installation a été rapide et l'équipe très professionnelle.",
    stars: 5,
  },
  {
    name: "Fatima A.",
    role: "Propriétaire, Marrakech",
    quote: "Le suivi via FusionSolar est incroyable. Je vois mes économies en temps réel. Je recommande Solair Renex à toute ma famille.",
    stars: 5,
  },
  {
    name: "Hassan M.",
    role: "Chef d'entreprise, Rabat",
    quote: "Solution hybride installée en 2 jours. Le retour sur investissement est bien meilleur que prévu. Excellent service.",
    stars: 5,
  },
];

const partners = ["Huawei", "LONGi", "Jinko Solar", "JA Solar"];

const pricingOffers = [
  {
    label: "Essentiel",
    type: "Pack A · Ongrid",
    power: "5,31 kWc",
    price: "56 500",
    popular: false,
    equipment: [
      "9 panneaux solaires LONGi Hi-MO X10",
      "Onduleur réseau haute efficacité",
      "Structure acier pré-galvanisé",
      "Câblage et protections DC/AC",
      "Pose et mise en service incluses",
      "Application FusionSolar (monitoring)",
      "Garantie matériaux 15 ans",
      "Garantie performance 30 ans",
    ],
    note: "Sans batterie, autoconsommation directe",
  },
  {
    label: "Populaire",
    type: "Pack B · Hybride",
    power: "10,03 kWc",
    price: "115 200",
    popular: true,
    equipment: [
      "17 panneaux solaires LONGi Hi-MO X10",
      "Onduleur hybride Huawei SUN2000",
      "1 Batterie Huawei LUNA2000 (5 kWh)",
      "Structure acier pré-galvanisé",
      "Câblage et protections DC/AC",
      "Pose et mise en service incluses",
      "Application FusionSolar (monitoring)",
      "Garantie matériaux 15 ans",
      "Garantie performance 30 ans",
    ],
    note: "Extensible jusqu'à 30 kWh de stockage",
  },
  {
    label: "Premium",
    type: "Pack B · Hybride",
    power: "25,37 kWc",
    price: "274 500",
    popular: false,
    equipment: [
      "43 panneaux solaires LONGi Hi-MO X10",
      "Onduleur hybride Huawei SUN2000",
      "4 Batteries Huawei LUNA2000 (20 kWh)",
      "Structure acier pré-galvanisé renforcée",
      "Câblage et protections DC/AC",
      "Pose et mise en service incluses",
      "Application FusionSolar (monitoring)",
      "Garantie matériaux 15 ans",
      "Garantie performance 30 ans",
    ],
    note: "Autonomie maximale, usage intensif",
  },
];

export default function Home() {
  const [, navigate] = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen w-full bg-white font-['Manrope',Helvetica]">
      {/* NAV */}
      <nav className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]" />
            <span className="text-xl font-bold tracking-tight text-[#131921]">
              Solair <span className="text-orange-500">Renex</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="#packs" className="hover:text-orange-500 transition-colors">Nos Packs</a>
            <a href="#preuves" className="hover:text-orange-500 transition-colors">Garanties</a>
            <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
          </div>
          <Button
            onClick={() => navigate("/devis")}
            className="rounded-none bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] px-6 py-2 text-sm font-semibold text-white shadow-none hover:opacity-90 transition-opacity"
          >
            Devis Gratuit
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0c0f14] px-6 py-20 text-center">
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Gagnez en Autonomie Énergétique &{" "}
            <span className="bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] bg-clip-text text-transparent">
              Réduisez vos Factures
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-gray-400 sm:text-lg">
            Des solutions solaires complètes et intelligentes avec les technologies Huawei, LONGi et Jinko Solar,
            conçues pour durer 30 ans.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={() => navigate("/devis")}
              className="w-full rounded-none bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] px-10 py-4 text-base font-semibold text-white shadow-none hover:opacity-90 transition-opacity sm:w-auto"
            >
              Demandez Votre Devis Gratuit
            </Button>
            <a href="#packs" className="text-sm text-gray-400 underline underline-offset-2 hover:text-white transition-colors">
              Voir les packs &amp; tarifs →
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 text-sm text-gray-400">
              <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              30 ans de garantie performance
            </div>
            <div className="flex items-center gap-1.5 text-sm text-gray-400">
              <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Installation rapide et sécurisée
            </div>
            <div className="flex items-center gap-1.5 text-sm text-gray-400">
              <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Monitoring en temps réel
            </div>
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="border-b border-gray-100 bg-gray-50 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
            Technologies de nos partenaires leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => (
              <div key={p} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]" />
                <span className="text-sm font-bold tracking-wide text-[#131921]">{p}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs font-light text-gray-400">
            Certifiés IEC · UL · CE · TUV · ISO 9001/14001/45001
          </p>
        </div>
      </section>

      {/* PROBLÈME / SOLUTION */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Le Problème</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#131921] sm:text-3xl">
                La hausse des prix de l'électricité ne s'arrête pas
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-gray-500">
                Vous dépendez totalement du réseau public. Chaque mois, votre facture augmente. Le stress financier
                s'accumule, et l'empreinte carbone de votre foyer vous préoccupe.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Factures d'électricité en hausse constante",
                  "Dépendance totale au réseau public",
                  "Empreinte carbone élevée",
                  "Aucune visibilité sur votre consommation",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                      <svg className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <span className="text-sm text-gray-600">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">La Solution Renex</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#131921] sm:text-3xl">
                Une autonomie totale dès le premier jour
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-gray-500">
                Solair Renex vous offre des solutions solaires clé en main avec les meilleures technologies mondiales,
                installées par des experts certifiés.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Réduction de facture jusqu'à 90%",
                  "Stockage batterie modulaire (5–30 kWh)",
                  "Monitoring temps réel via FusionSolar",
                  "Garantie performance 30 ans",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm font-medium text-[#131921]">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKS & TARIFS */}
      <section id="packs" className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Nos Offres</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#131921] sm:text-3xl">
              Choisissez le Pack Adapté à Votre Projet
            </h2>
            <p className="mt-3 text-sm font-light text-gray-500">
              Installation clé en main : Audit, pose, activation et suivi inclus
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pricingOffers.map((offer) => (
              <Card
                key={offer.label}
                className={`relative flex flex-col rounded-sm border-0 bg-white shadow-[0px_4px_24px_#0000000a] ${
                  offer.popular ? "ring-2 ring-orange-400" : ""
                }`}
              >
                {offer.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] px-3 py-1 text-xs font-bold text-white whitespace-nowrap">
                      ⭐ Le plus populaire
                    </span>
                  </div>
                )}
                <CardContent className="flex flex-1 flex-col p-6 pt-7">
                  {/* Header */}
                  <div className="border-b border-gray-100 pb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                      {offer.label}
                    </span>
                    <p className="mt-1 text-sm font-medium text-gray-400">{offer.type}</p>
                    <p className="mt-2 text-3xl font-bold text-[#131921]">{offer.power}</p>
                    <p className="mt-3 text-2xl font-bold text-orange-500">{offer.price} <span className="text-base font-semibold">DH</span></p>
                    <p className="text-xs font-light text-gray-400">TTC · Installation incluse</p>
                    <p className="mt-2 inline-block rounded-sm bg-orange-50 px-2 py-1 text-xs font-medium text-orange-600">
                      {offer.note}
                    </p>
                  </div>

                  {/* Equipment list */}
                  <div className="mt-4 flex flex-1 flex-col gap-2.5">
                    {offer.equipment.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
                          <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-light leading-snug text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => navigate("/devis")}
                    className={`mt-6 w-full rounded-none py-3 text-sm font-semibold text-white shadow-none transition-opacity hover:opacity-90 ${
                      offer.popular
                        ? "bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]"
                        : "bg-[#131921]"
                    }`}
                  >
                    Demander un devis →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-center text-xs font-light text-gray-400">
            Tous les prix sont indicatifs et peuvent varier selon votre configuration. Un audit gratuit est inclus avec chaque pack.
          </p>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Notre Processus</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#131921] sm:text-3xl">
              Passez au Solaire en 3 Étapes
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Choix",
                desc: "Sélection du pack adapté (Ongrid ou Hybride avec stockage) après analyse de votre consommation.",
              },
              {
                step: "02",
                title: "Installation Optimisée",
                desc: "Montage rapide et sécurisé par nos experts. Structures en acier pré-galvanisé à montage non pénétrant.",
              },
              {
                step: "03",
                title: "Activation & Suivi",
                desc: "Mise en service simple par application FusionSolar. Contrôle total de votre production dès le premier jour.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
                  <span className="text-xl font-bold text-white">{s.step}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-[#131921]">{s.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREUVES / GARANTIES */}
      <section id="preuves" className="bg-[#0c0f14] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Pourquoi Nous Faire Confiance</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Votre Investissement est Protégé
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 30 ans */}
            <div className="rounded-sm border border-white/10 bg-white/5 p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <p className="mt-3 text-xl font-bold text-white">30 ans</p>
              <p className="mt-2 text-xs font-light leading-relaxed text-gray-400">Garantie de performance linéaire sur les panneaux LONGi Hi-MO X10</p>
            </div>
            {/* 15 ans */}
            <div className="rounded-sm border border-white/10 bg-white/5 p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="mt-3 text-xl font-bold text-white">15 ans</p>
              <p className="mt-2 text-xs font-light leading-relaxed text-gray-400">Garantie matériaux sur les structures et composants d'installation</p>
            </div>
            {/* Temps réel */}
            <div className="rounded-sm border border-white/10 bg-white/5 p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="mt-3 text-xl font-bold text-white">Temps réel</p>
              <p className="mt-2 text-xs font-light leading-relaxed text-gray-400">Monitoring FusionSolar : production, économies CO2 et revenus</p>
            </div>
            {/* Certifiés */}
            <div className="rounded-sm border border-white/10 bg-white/5 p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="mt-3 text-xl font-bold text-white">Certifiés</p>
              <p className="mt-2 text-xs font-light leading-relaxed text-gray-400">IEC, UL, CE, TUV et ISO 9001/14001/45001 pour une qualité maximale</p>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Témoignages</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#131921] sm:text-3xl">
              Ils ont fait confiance à Solair Renex
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2">
              <StarRating count={5} />
              <span className="text-sm font-semibold text-[#131921]">4.9 / 5</span>
              <span className="text-sm text-gray-400">• Clients satisfaits</span>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="rounded-sm border-0 bg-white shadow-[0px_10px_50px_#0000000d]">
                <CardContent className="flex flex-col gap-3 p-6">
                  <StarRating count={t.stars} />
                  <p className="text-sm font-light leading-relaxed text-[#4b5563]">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#131921]">{t.name}</p>
                      <p className="text-xs font-light text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">FAQ</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#131921] sm:text-3xl">
              Questions Fréquentes
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, index) => (
              <Card
                key={item.question}
                className="w-full cursor-pointer rounded-sm border-0 bg-white shadow-[0px_10px_50px_#0000000d] transition-shadow hover:shadow-md"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <CardContent className="flex gap-3 px-4 py-4">
                  <div className="flex shrink-0 pt-0.5">
                    <img className="h-[14px] w-[14px]" alt="Question icon" src={item.icon} />
                  </div>
                  <article className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[14px] font-bold leading-[1.35] tracking-[-0.42px] text-[#131921]">
                        {item.question}
                      </h3>
                      <span className="mt-0.5 shrink-0 text-gray-400 text-lg leading-none">
                        {openFaq === index ? "−" : "+"}
                      </span>
                    </div>
                    {openFaq === index && (
                      <p className="mt-2 text-[13px] font-light leading-[1.6] text-[#4b5563]">
                        {item.answer}
                      </p>
                    )}
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Découvrez Nos Packs Résidentiels
          </h2>
          <p className="mt-3 text-sm font-light text-white/80">
            Demandez votre devis gratuit dès aujourd'hui. Un expert vous contacte sous 24h.
          </p>
          <Button
            onClick={() => navigate("/devis")}
            className="mt-8 rounded-none bg-white px-10 py-4 text-base font-bold text-orange-600 shadow-none hover:bg-orange-50 transition-colors"
          >
            Demander Mon Devis Gratuit →
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 bg-white px-6 py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-6 w-6 rounded-full bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]" />
          <span className="text-base font-bold text-[#131921]">
            Solair <span className="text-orange-500">Renex</span>
          </span>
        </div>
        <p className="text-xs font-light text-gray-400">
          © {new Date().getFullYear()} Solair Renex. Tous droits réservés.
        </p>
      </footer>
    </main>
  );
}
