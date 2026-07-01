import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, FileText, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { jsPDF } from "jspdf";
import { resumeData } from "../data";

interface FloatingDownloadProps {
  theme: "light" | "dark" | "red-grey";
}

export default function FloatingDownload({ theme }: FloatingDownloadProps) {
  const [status, setStatus] = useState<"idle" | "generating" | "success">("idle");

  const generatePDF = () => {
    setStatus("generating");

    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      // Color Palette Definition
      const primaryColor = theme === "red-grey" ? [220, 38, 38] : [79, 70, 229]; // Red or Indigo
      const textColor = [30, 41, 59]; // Slate 800
      const lightTextColor = [100, 116, 139]; // Slate 500
      const accentColor = theme === "red-grey" ? [185, 28, 28] : [67, 56, 202];

      const pageHeight = 297;
      const pageWidth = 210;
      const margin = 16;
      let y = 16; // current y coordinate inside page

      // Helper to add text and update y
      const printLine = (text: string, size = 10, style = "normal", color = textColor) => {
        doc.setFont("helvetica", style);
        doc.setFontSize(size);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.text(text, margin, y);
        y += size * 0.4 + 2;
      };

      // Helper to print bullet points with wrap-around
      const printBullet = (bulletText: string, size = 9, color = textStyleColor) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(size);
        doc.setTextColor(color[0], color[1], color[2]);
        
        const bulletMarker = "-  ";
        const bulletWidth = doc.getTextWidth(bulletMarker);
        doc.text(bulletMarker, margin + 2, y);

        const textWidthLimit = pageWidth - (margin * 2) - 6;
        const lines = doc.splitTextToSize(bulletText, textWidthLimit);
        
        lines.forEach((line: string, index: number) => {
          doc.text(line, margin + 2 + bulletWidth, y);
          y += size * 0.45 + 1.2;
        });
      };

      const textStyleColor = textColor;

      // 1. HEADER SECTION (Centered)
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(resumeData.name.toUpperCase(), pageWidth / 2, y, { align: "center" });
      y += 8;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
      doc.text(resumeData.role.toUpperCase(), pageWidth / 2, y, { align: "center" });
      y += 6;

      // Contact details row
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(textColor[0], textColor[1], textColor[2]);
      const contactStr = `${resumeData.email}  |  ${resumeData.phone}  |  ${resumeData.location}`;
      doc.text(contactStr, pageWidth / 2, y, { align: "center" });
      y += 5;

      // Links row
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
      const linksStr = `GitHub: ${resumeData.github.replace("https://", "")}   •   LinkedIn: ${resumeData.linkedin.replace("https://", "")}`;
      doc.text(linksStr, pageWidth / 2, y, { align: "center" });
      y += 8;

      // Decorative Top Divider
      doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.setLineWidth(0.8);
      doc.line(margin, y, pageWidth - margin, y);
      y += 7;

      // Helper to add sections
      const addSectionHeader = (title: string) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text(title.toUpperCase(), margin, y);
        y += 2.5;
        doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setLineWidth(0.2);
        doc.line(margin, y, pageWidth - margin, y);
        y += 5;
      };

      // 2. EDUCATION SECTION (With AKTU Semester CGPA Breakdown)
      addSectionHeader("Education");
      resumeData.education.forEach((edu) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        doc.text(edu.degree, margin, y);
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
        doc.text(edu.year, pageWidth - margin, y, { align: "right" });
        y += 4.5;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        doc.text(`${edu.institution}  (Result: ${edu.score})`, margin, y);
        y += 5.5;

        // Add semester wise breakdown if it is GL Bajaj B.Tech CS-AI
        if (edu.degree.includes("CS-AI")) {
          doc.setFont("helvetica", "bold");
          doc.setFontSize(8);
          doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
          doc.text("AKTU Model (BCS Structure) Semester SGPA Tracker:", margin + 4, y);
          y += 4;

          doc.setFont("helvetica", "normal");
          doc.setFontSize(8);
          doc.setTextColor(textColor[0], textColor[1], textColor[2]);
          doc.text("Sem 1: 7.14  |  Sem 2: 7.45  |  Sem 3: 7.76  |  Sem 4: 7.09  |  Sem 5: 7.17  |  Sem 6: 7.0  |  Sem 7: Ongoing  | Sem 8: Upcoming", margin + 4, y);
          y += 6;
        }
      });
      y += 2;

      // 3. SKILLS INVENTORY (Extracted from code tree)
      addSectionHeader("Technical Skills");
      resumeData.skills.forEach((skillGroup) => {
        const catName = skillGroup.category;
        const skillList = skillGroup.skills.map((s) => `${s.name} (${s.proficiency}%)`).join(", ");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        
        // Split if too long
        const textLimit = pageWidth - margin * 2 - 40;
        const subLines = doc.splitTextToSize(skillList, textLimit);
        
        doc.text(`${catName}:`, margin, y);
        doc.setFont("helvetica", "normal");
        
        subLines.forEach((line: string, idx: number) => {
          doc.text(line, margin + 42, y);
          y += 4;
        });
        y += 1.5;
      });
      y += 2.5;

      // 4. CORE PROJECTS
      addSectionHeader("Systems & DevOps Projects");
      resumeData.projects.forEach((proj) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        doc.text(proj.title, margin, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.text(`GitHub: ${proj.github.replace("https://", "")}`, pageWidth - margin, y, { align: "right" });
        y += 4;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
        doc.text(proj.subtitle, margin, y);
        y += 5;

        // Details list
        proj.description.forEach((descLine) => {
          printBullet(descLine, 8.5);
        });

        // Tags / Tech Stack row
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text("Tech Stack: " + proj.tags.join(" • "), margin + 4, y);
        y += 7;
      });

      // 5. TECHNICAL STANDOUTS & PROBLEM SOLVING (Verbatim representation)
      addSectionHeader("Algorithms & Standout Achievements");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(textColor[0], textColor[1], textColor[2]);
      doc.text(`LeetCode Problem Solving Indicator (${resumeData.problemSolvingDetails.leetcodeMockSolved}+ Solved)`, margin, y);
      y += 4.5;

      resumeData.problemSolvingDetails.description.forEach((line) => {
        printBullet(line, 8.5);
      });
      y += 1.5;

      // Certifications
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(textColor[0], textColor[1], textColor[2]);
      doc.text("Professional Certifications & Community", margin, y);
      y += 4.5;
      resumeData.certificationsList.forEach((line) => {
        printBullet(line, 8);
      });

      // Trigger actual download securely
      doc.save("Raunak_Pandey_Resume.pdf");

      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("PDF generation failed:", error);
      setStatus("idle");
    }
  };

  return (
    <div id="floating-cv-container" className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            className="absolute bottom-16 right-0 bg-emerald-600 text-white text-xs font-mono font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg border border-emerald-500/30 whitespace-nowrap"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-100 animate-bounce" />
            Resume Downloaded!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        id="floating-resume-download-btn"
        onClick={generatePDF}
        disabled={status === "generating"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 font-bold text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
          theme === "red-grey"
            ? "bg-red-600 hover:bg-red-700 text-white border-red-500/40 shadow-red-900/10"
            : theme === "dark"
            ? "bg-slate-900/90 text-white hover:text-indigo-400 border-slate-800 backdrop-blur-md shadow-black/40 hover:border-indigo-500/20"
            : "bg-white hover:bg-indigo-50 text-slate-800 hover:text-indigo-600 border-slate-200/85 hover:border-indigo-200 shadow-slate-100/60"
        }`}
        title="Download Official PDF resume"
      >
        {status === "generating" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-current" />
            Generating PDF...
          </>
        ) : (
          <>
            <FileText className="h-4 w-4 text-current" />
            <span>Download Resume</span>
            <Download className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </>
        )}
      </motion.button>
    </div>
  );
}
