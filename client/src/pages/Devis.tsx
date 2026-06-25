import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

function FormField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#131921]">{label} {required && <span className="text-orange-500">*</span>}</label>
      <input
        type={type}
        placeholder={placeholder || label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="h-[52px] w-full rounded-sm border border-gray-200 bg-white px-4 text-sm font-light text-[#131921] placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#131921]">{label} {required && <span className="text-orange-500">*</span>}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="h-[52px] w-full rounded-sm border border-gray-200 bg-white px-4 text-sm font-light text-[#131921] outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors appearance-none"
      >
        <option value="">Sélectionner…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

const packOptions = [
  "Pack A · 5,31 kWc (9 panneaux) · 56 500 DH",
  "Pack A · 10,62 kWc (18 panneaux) · 96 900 DH",
  "Pack A · 20,65 kWc (35 panneaux) · 169 640 DH",
  "Pack A · 25,37 kWc (43 panneaux) · 205 400 DH",
  "Pack B · 6,49 kWc + 1 Batterie 5kWh · 95 990 DH",
  "Pack B · 10,03 kWc + 1 Batterie 5kWh · 115 200 DH",
  "Pack B · 15,93 kWc + 2 Batteries 10kWh · 169 640 DH",
  "Pack B · 25,37 kWc + 4 Batteries 20kWh · 274 500 DH",
  "Je ne sais pas encore, je veux être conseillé",
];

export default function Devis() {
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    pack: "",
    consommation: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof typeof form) => (val: string) =>
    setForm((f) => ({ ...f, [field]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Demande envoyée !",
      description: "Un expert Solair Renex vous contacte sous 24h.",
    });
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 font-['Manrope',Helvetica] px-6">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#131921]">Demande Reçue !</h1>
          <p className="mt-3 text-sm font-light leading-relaxed text-gray-500">
            Merci <strong className="font-semibold text-[#131921]">{form.nom}</strong>. Un expert Solair Renex
            vous contactera à <strong className="font-semibold">{form.email}</strong> ou au{" "}
            <strong className="font-semibold">{form.telephone}</strong> sous 24h pour finaliser votre devis gratuit.
          </p>
          <div className="mt-6 rounded-sm border border-orange-100 bg-orange-50 px-4 py-3 text-sm text-gray-600">
            <p className="font-semibold text-orange-600">Prochaine étape</p>
            <p className="mt-1 font-light">Notre équipe analysera votre consommation et vous préparera une offre personnalisée.</p>
          </div>
          <Button
            onClick={() => navigate("/")}
            className="mt-8 rounded-none bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] px-8 py-3 text-sm font-semibold text-white shadow-none hover:opacity-90"
          >
            Retour à l'accueil
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#f8f9fa] font-['Manrope',Helvetica]">
      {/* TOP BAR */}
      <div className="w-full bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] py-2 text-center">
        <p className="text-xs font-semibold text-white">
          ☀️ Audit & devis 100% gratuit. Un expert vous rappelle sous 24h
        </p>
      </div>

      {/* HEADER */}
      <div className="bg-white border-b border-gray-100 px-6 py-6 text-center">
        <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="h-7 w-7 rounded-full bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]" />
          <span className="text-xl font-bold tracking-tight text-[#131921]">
            Solair <span className="text-orange-500">Renex</span>
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#131921] sm:text-3xl">
          Demandez Votre Devis Gratuit
        </h1>
        <p className="mt-2 text-sm font-light text-gray-500">
          Remplissez le formulaire ci-dessous. Un expert vous contacte sous 24h.
        </p>
      </div>

      {/* BODY */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* LEFT: FORM */}
          <div className="flex flex-col gap-6">
            {/* Contact */}
            <div className="rounded-sm bg-white p-6 shadow-[0px_4px_24px_#0000000a]">
              <h3 className="text-base font-bold tracking-tight text-[#131921] border-b border-gray-100 pb-2 mb-4">
                Informations de Contact
              </h3>
              <div className="grid gap-4">
                <FormField label="Nom complet" value={form.nom} onChange={set("nom")} required />
                <FormField label="Adresse e-mail" type="email" value={form.email} onChange={set("email")} required />
                <FormField label="Téléphone" type="tel" placeholder="+212 6XX XXX XXX" value={form.telephone} onChange={set("telephone")} required />
                <FormField label="Ville" placeholder="Ex: Casablanca, Rabat, Marrakech…" value={form.ville} onChange={set("ville")} required />
              </div>
            </div>

            {/* Projet */}
            <div className="rounded-sm bg-white p-6 shadow-[0px_4px_24px_#0000000a]">
              <h3 className="text-base font-bold tracking-tight text-[#131921] border-b border-gray-100 pb-2 mb-4">
                Votre Projet Solaire
              </h3>
              <div className="grid gap-4">
                <SelectField
                  label="Pack qui vous intéresse"
                  value={form.pack}
                  onChange={set("pack")}
                  options={packOptions}
                />
                <SelectField
                  label="Consommation mensuelle estimée"
                  value={form.consommation}
                  onChange={set("consommation")}
                  options={[
                    "Moins de 200 kWh/mois",
                    "200 – 500 kWh/mois",
                    "500 – 1000 kWh/mois",
                    "Plus de 1000 kWh/mois",
                    "Je ne sais pas",
                  ]}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#131921]">Message ou questions (optionnel)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    rows={3}
                    placeholder="Partagez vos besoins spécifiques, questions sur l'installation, etc."
                    className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm font-light text-[#131921] placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="rounded-sm bg-white p-6 shadow-[0px_4px_24px_#0000000a]">
              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-none bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] py-4 text-base font-bold text-white shadow-none hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                {submitting ? "Envoi en cours…" : "Envoyer Ma Demande de Devis →"}
              </Button>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { icon: "🔒", text: "Devis 100% gratuit et sans engagement" },
                  { icon: "⚡", text: "Réponse d'un expert sous 24h" },
                  { icon: "🛡️", text: "Vos données sont sécurisées et confidentielles" },
                  { icon: "🏆", text: "30 ans de garantie performance panneaux" },
                ].map((b) => (
                  <div key={b.text} className="flex items-start gap-2">
                    <span className="text-sm">{b.icon}</span>
                    <span className="text-xs font-light text-gray-500 leading-relaxed">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="flex flex-col gap-6">
            <div className="rounded-sm bg-[#0c0f14] p-6 shadow-[0px_4px_24px_#0000000a] text-white sticky top-6">
              <h3 className="text-base font-bold">Pourquoi Solair Renex ?</h3>

              <div className="mt-4 flex flex-col gap-3">
                {[
                  "Technologies Huawei, LONGi, Jinko Solar & JA Solar",
                  "30 ans de garantie performance panneaux",
                  "15 ans de garantie matériaux",
                  "Monitoring temps réel via FusionSolar",
                  "Batteries Huawei LUNA2000 modulaires (5–30 kWh)",
                  "Structures en acier pré-galvanisé, montage non pénétrant",
                  "Certifications IEC · UL · CE · TUV · ISO",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
                      <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-light text-gray-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">Tarifs indicatifs</p>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Pack A Ongrid, à partir de</span>
                    <span className="font-semibold text-orange-400">56 500 DH</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Pack B Hybride, à partir de</span>
                    <span className="font-semibold text-orange-400">95 990 DH</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Batterie supp. 5kWh</span>
                    <span className="font-semibold text-orange-400">20 900 DH</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold text-white">Notre processus</p>
                <div className="mt-3 space-y-2">
                  {[
                    "1. Audit & sélection du pack",
                    "2. Installation par nos experts",
                    "3. Activation & suivi FusionSolar",
                  ].map((step) => (
                    <p key={step} className="text-xs font-light text-gray-400">{step}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
