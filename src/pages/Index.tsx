import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Calendar,
  User,
  Scale,
  Sparkles,
  LogIn,
  FileText,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const dummySummaryEn = `The court found the accused guilty under Section 302 (Murder) and Section 307 (Attempt to Murder) of the Indian Penal Code. The incident occurred on 15th March 2023 in New Delhi. The prosecution successfully proved beyond reasonable doubt that the accused had premeditated intent. The court sentenced the accused to life imprisonment, considering the severity of the crime and the evidence presented, including eyewitness testimonies and forensic reports. The defense's plea for leniency was rejected.`;

const dummySummaryHi = `अदालत ने आरोपी को भारतीय दंड संहिता की धारा 302 (हत्या) और धारा 307 (हत्या का प्रयास) के तहत दोषी पाया। यह घटना 15 मार्च 2023 को नई दिल्ली में हुई थी। अभियोजन पक्ष ने उचित संदेह से परे साबित किया कि आरोपी की पूर्वनियोजित मंशा थी। अदालत ने अपराध की गंभीरता और प्रस्तुत साक्ष्यों को ध्यान में रखते हुए आरोपी को आजीवन कारावास की सजा सुनाई।`;

const precedents = [
  { name: "State vs. Rajesh Kumar (2021)", match: 85, section: "IPC 302" },
  { name: "People vs. Anand Singh (2019)", match: 78, section: "IPC 307" },
  { name: "State vs. Meera Devi (2020)", match: 72, section: "IPC 302, 120B" },
  { name: "Union vs. Prakash Rao (2022)", match: 68, section: "IPC 307" },
  { name: "State vs. Vikram Joshi (2018)", match: 64, section: "IPC 302" },
];

const Index = () => {
  const [status, setStatus] = useState<"idle" | "scanning" | "complete">("idle");
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    if (status !== "idle") return;
    setStatus("scanning");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setStatus("complete"), 300);
    }, 2800);
  };

  const handleReset = () => {
    setStatus("idle");
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-card border-b border-[hsl(var(--glass-border))] rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-lg text-foreground">
              Miles Matrix <span className="text-primary">|</span>{" "}
              <span className="text-muted-foreground font-medium text-sm">Legal AI</span>
            </span>
          </div>
          <Button
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--gold-glow))] transition-all duration-300"
          >
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center space-y-6 pt-8"
        >
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gradient leading-tight">
            Simplifying Justice for Every Citizen.
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Upload complex court judgements and let AI translate{" "}
            <span className="text-primary font-medium">'Legalese'</span> into simple English or
            Hindi instantly.
          </p>
        </motion.section>

        {/* Upload Zone */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                onClick={handleUpload}
                className="glass-card p-12 sm:p-16 cursor-pointer border-2 border-dashed border-primary/20 hover:border-primary/50 transition-all duration-500 group text-center"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <Upload className="h-16 w-16 text-primary animate-float" />
                    <div className="absolute inset-0 h-16 w-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      Drag & drop your legal PDF here
                    </p>
                    <p className="text-muted-foreground text-sm">
                      or click to browse from your device
                    </p>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Supports PDF, DOCX, TXT
                  </Badge>
                </div>
              </motion.div>
            )}

            {status === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-card p-12 sm:p-16 text-center"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <Loader2 className="h-16 w-16 text-primary animate-spin" />
                    <div className="absolute inset-0 h-16 w-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  </div>
                  <div className="space-y-3 w-full max-w-md">
                    <p className="font-display font-semibold text-xl text-foreground">
                      Scanning & Processing
                    </p>
                    <p className="text-muted-foreground text-sm">
                      AI is analyzing your legal document...
                    </p>
                    <Progress value={progress} className="h-2 bg-secondary" />
                    <p className="text-primary text-xs font-medium">{Math.round(progress)}%</p>
                  </div>
                </div>
              </motion.div>
            )}

            {status === "complete" && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6 sm:p-8 text-center"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-display font-semibold text-foreground">
                      Analysis Complete
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground hover:text-foreground">
                    Upload Another
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Results Dashboard */}
        <AnimatePresence>
          {status === "complete" && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Language Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`text-sm font-medium transition-colors ${lang === "en" ? "text-primary" : "text-muted-foreground"}`}>
                  English
                </span>
                <Switch
                  checked={lang === "hi"}
                  onCheckedChange={(checked) => setLang(checked ? "hi" : "en")}
                />
                <span className={`text-sm font-medium transition-colors ${lang === "hi" ? "text-primary" : "text-muted-foreground"}`}>
                  हिन्दी
                </span>
              </div>

              {/* Main Results Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column — Key Entities */}
                <div className="space-y-4">
                  {[
                    { icon: Calendar, label: lang === "en" ? "Case Date" : "मामले की तारीख", value: "15th March, 2023" },
                    { icon: User, label: lang === "en" ? "Judge Name" : "न्यायाधीश का नाम", value: "Hon'ble Justice R.K. Sharma" },
                    { icon: Scale, label: lang === "en" ? "IPC Sections" : "आईपीसी धाराएँ", value: "Section 302, 307, 120B" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 * i }}
                      className="glass-card p-5 flex items-start gap-4 hover:scale-[1.03] transition-transform duration-300"
                    >
                      <div className="p-2.5 rounded-xl bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          {item.label}
                        </p>
                        <p className="font-display font-semibold text-foreground mt-1">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column — AI Summary */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="lg:col-span-2 glass-card p-6 sm:p-8 gold-glow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-5 w-5 text-primary" />
                    <h2 className="font-display font-bold text-lg text-foreground">
                      {lang === "en" ? "AI Simplified Summary" : "AI सरलीकृत सारांश"}
                    </h2>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={lang}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-foreground/80 leading-relaxed text-[15px]"
                    >
                      {lang === "en" ? dummySummaryEn : dummySummaryHi}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Precedent Finder */}
              <div className="space-y-4">
                <h2 className="font-display font-bold text-lg text-foreground">
                  {lang === "en" ? "Similar Past Cases" : "समान पिछले मामले"}
                </h2>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {precedents.map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="glass-card p-5 min-w-[260px] flex-shrink-0 hover:scale-[1.05] transition-transform duration-300 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary/20 text-primary border-primary/30 font-bold">
                          {p.match}% Match
                        </Badge>
                        <span className="text-xs text-muted-foreground">{p.section}</span>
                      </div>
                      <p className="font-display font-semibold text-sm text-foreground">
                        {p.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
