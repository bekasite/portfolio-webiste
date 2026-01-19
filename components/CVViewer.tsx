// components/CVViewer.tsx
import { useState, useEffect } from "react";
import {
  FaDownload,
  FaPrint,
  FaTimes,
  FaExpand,
  FaCompress,
  FaEye,
  FaFilePdf,
  FaExternalLinkAlt,
  FaSpinner,
  FaSync,
  FaArrowsAltH,
  FaArrowsAltV,
  FaPalette,
  FaAdjust
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function CVViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [theme, setTheme] = useState("light");
  const [viewMode, setViewMode] = useState("desktop");

  const cvUrl = "https://flowcv.com/resume/3rrf6wtnqwt3";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Simulate loading
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
      setIsLoading(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleDownload = () => {
    // In a real implementation, you would download the PDF
    // For now, we'll open the FlowCV in a new tab
    window.open(cvUrl, "_blank");
  };

  const handlePrint = () => {
    const printWindow = window.open(cvUrl, "_blank");
    if (printWindow) {
      printWindow.onload = () => printWindow.print();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const reloadIframe = () => {
    setIsLoading(true);
    const iframe = document.getElementById("cv-iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = cvUrl;
    }
  };

  const getIframeStyle = () => {
    const baseStyle = {
      transform: `scale(${scale})`,
      transformOrigin: "top center",
      transition: "transform 0.3s ease",
    };

    if (viewMode === "mobile") {
      return {
        ...baseStyle,
        width: "375px",
        height: "667px",
        margin: "0 auto",
      };
    } else if (viewMode === "tablet") {
      return {
        ...baseStyle,
        width: "768px",
        height: "1024px",
        margin: "0 auto",
      };
    }
    return baseStyle;
  };

  return (
    <>
      {/* Floating Open Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
        style={{
          boxShadow: "0 10px 40px rgba(59, 130, 246, 0.5)",
        }}
      >
        <div className="relative">
          <FaEye className="w-6 h-6" />
          <motion.div
            className="absolute -inset-1 bg-white/20 rounded-full blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          View My CV
        </span>
      </motion.button>

      {/* CV Viewer Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Main Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className={`fixed z-[101] bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl ${
                isFullscreen
                  ? "ins-0 w-full h-full m-0 rounded-none"
                  : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[95vh] max-w-[1400px]"
              }`}
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-gradient-to-r from-white/95 to-gray-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 rounded-t-3xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg"
                    >
                      <FaFilePdf className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      >
                        Interactive CV Viewer
                      </motion.h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Live preview of your professional resume
                      </p>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* View Mode */}
                    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode("mobile")}
                        className={`px-3 py-2 rounded-md text-sm transition-all ${
                          viewMode === "mobile"
                            ? "bg-white dark:bg-gray-700 shadow-sm"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        Mobile
                      </button>
                      <button
                        onClick={() => setViewMode("tablet")}
                        className={`px-3 py-2 rounded-md text-sm transition-all ${
                          viewMode === "tablet"
                            ? "bg-white dark:bg-gray-700 shadow-sm"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        Tablet
                      </button>
                      <button
                        onClick={() => setViewMode("desktop")}
                        className={`px-3 py-2 rounded-md text-sm transition-all ${
                          viewMode === "desktop"
                            ? "bg-white dark:bg-gray-700 shadow-sm"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        Desktop
                      </button>
                    </div>

                    {/* Theme Toggle */}
                    <button
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      title="Toggle theme"
                    >
                      <FaAdjust className="w-5 h-5" />
                    </button>

                    {/* Zoom Controls */}
                    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                      <button
                        onClick={() => setScale(Math.max(0.5, scale - 0.1))}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 text-sm text-gray-600 dark:text-gray-400">
                        {Math.round(scale * 100)}%
                      </span>
                      <button
                        onClick={() => setScale(Math.min(2, scale + 0.1))}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <button
                      onClick={reloadIframe}
                      className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      title="Reload"
                    >
                      <FaSync className="w-5 h-5" />
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      title="Fullscreen"
                    >
                      {isFullscreen ? (
                        <FaCompress className="w-5 h-5" />
                      ) : (
                        <FaExpand className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={handleDownload}
                      className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      <FaDownload className="w-5 h-5" />
                      <span className="hidden sm:inline">Save</span>
                    </button>
                    <button
                      onClick={handlePrint}
                      className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      <FaPrint className="w-5 h-5" />
                      <span className="hidden sm:inline">Print</span>
                    </button>
                    <motion.button
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(false)}
                      className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      <FaTimes className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 mt-6 overflow-x-auto pb-2">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      activeTab === "preview"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <FaEye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    onClick={() => window.open(cvUrl, "_blank")}
                    className="px-4 py-2 rounded-lg font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Open in New Tab
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div
                className="overflow-hidden p-4 sm:p-6"
                style={{
                  height: isFullscreen
                    ? "calc(100vh - 180px)"
                    : "calc(95vh - 180px)",
                }}
              >
                {activeTab === "preview" && (
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden shadow-inner">
                    {/* Loading Overlay */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm z-10"
                      >
                        <div className="text-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
                          />
                          <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Loading your professional CV...
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Powered by FlowCV
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Iframe Container */}
                    <div className="relative w-full h-full">
                      <div
                        className="overflow-auto w-full h-full"
                        style={{
                          padding: viewMode === "desktop" ? "0" : "2rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          style={getIframeStyle()}
                          className="rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700 overflow-hidden bg-white"
                        >
                          <iframe
                            id="cv-iframe"
                            src={cvUrl}
                            className="w-full h-full border-0"
                            onLoad={() => setIsLoading(false)}
                            title="Beka Temesgen - Professional CV"
                            allowFullScreen
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                            loading="lazy"
                          />
                        </motion.div>
                      </div>

                      {/* Overlay Controls */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full"
                      >
                        <span className="text-sm">
                          {viewMode === "mobile"
                            ? "📱 Mobile View"
                            : viewMode === "tablet"
                            ? "📟 Tablet View"
                            : "💻 Desktop View"}
                        </span>
                        <span className="text-xs opacity-75">•</span>
                        <span className="text-sm">{Math.round(scale * 100)}% Zoom</span>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 rounded-b-3xl p-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      CV is live and interactive
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Direct Link
                    </a>
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      Last updated: Today
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}