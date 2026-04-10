// components/CVViewer.tsx
import { useState, useEffect, useRef } from "react";
import {
  FaDownload,
  FaPrint,
  FaTimes,
  FaExpand,
  FaCompress,
  FaEye,
  FaFilePdf,
  FaExternalLinkAlt,
  FaSync,
  FaAdjust,
  FaExpandAlt,
  FaCompressAlt,
  FaSearchPlus,
  FaSearchMinus,
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt
} from "react-icons/fa";

export default function CVViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [theme, setTheme] = useState("light");
  const [viewMode, setViewMode] = useState("desktop");
  const [isCentered, setIsCentered] = useState(true);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const cvUrl = "https://flowcv.com/resume/3rrf6wtnqwt3";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
        setScale(1); // Reset scale when closing
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
    if (iframeRef.current) {
      iframeRef.current.src = cvUrl;
    }
  };

  const centerContent = () => {
    setIsCentered(true);
    // Force re-render by updating scale slightly
    setScale(prev => prev + 0.001);
    setTimeout(() => setScale(prev => prev - 0.001), 10);
  };

  const getContainerStyles = () => {
    const baseStyles = {
      display: 'flex',
      justifyContent: 'center' as const,
      alignItems: 'flex-start' as const,
      width: '100%',
      height: '100%',
      overflow: 'auto' as const,
      padding: viewMode === "desktop" ? "0" : "20px",
    };

    return baseStyles;
  };

  const getIframeStyles = () => {
    const baseStyles = {
      transform: `scale(${scale})`,
      transformOrigin: 'top center' as const,
      transition: 'transform 0.3s ease',
      border: 'none',
      backgroundColor: 'white',
    };

    // Device-specific dimensions for better centering
    if (viewMode === "mobile") {
      return {
        ...baseStyles,
        width: '375px',
        height: '667px',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      };
    } else if (viewMode === "tablet") {
      return {
        ...baseStyles,
        width: '768px',
        height: '1024px',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      };
    } else {
      return {
        ...baseStyles,
        width: '100%',
        height: '100%',
        maxWidth: '1200px',
        borderRadius: '10px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
      };
    }
  };

  return (
    <>
      {/* Floating Open Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-br from-brand-primary-700 via-brand-primary-600 to-brand-secondary-500 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group"
        style={{
          boxShadow: "0 10px 40px rgba(15, 29, 51, 0.45)",
        }}
      >
        <div className="relative">
          <FaEye className="w-6 h-6" />
          <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm" />
        </div>
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          View My CV
        </span>
      </button>

      {/* CV Viewer Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[100] bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          />

          {/* Main Modal */}
          <div
            className={`fixed z-[101] bg-gradient-to-br from-brand-primary-50 to-white dark:from-brand-primary-900 dark:to-brand-primary-800 rounded-3xl shadow-2xl ${
              isFullscreen
                ? "inset-0 w-full h-full m-0 rounded-none"
                : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[95vh] max-w-[1600px]"
            }`}
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-white/95 to-brand-primary-50/95 dark:from-brand-primary-900/95 dark:to-brand-primary-800/95 backdrop-blur-lg border-b border-brand-primary-200 dark:border-brand-primary-700 rounded-t-3xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-brand-primary-700 to-brand-secondary-500 rounded-xl shadow-lg">
                    <FaFilePdf className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-brand-primary-700 to-brand-secondary-500 bg-clip-text text-transparent">
                      Interactive CV Viewer
                    </h2>
                    <p className="text-brand-primary-600 dark:text-gray-300 text-sm">
                      Live preview of your professional resume
                    </p>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* View Mode */}
                  <div className="flex items-center gap-1 bg-brand-primary-100 dark:bg-brand-primary-800 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("mobile")}
                      className={`px-3 py-2 rounded-md text-sm transition-all flex items-center gap-1 ${
                        viewMode === "mobile"
                          ? "bg-white dark:bg-brand-primary-700 shadow-sm"
                          : "text-brand-primary-600 dark:text-gray-300"
                      }`}
                      title="Mobile View"
                    >
                      <FaMobileAlt className="w-3 h-3" />
                      <span className="hidden sm:inline">Mobile</span>
                    </button>
                    <button
                      onClick={() => setViewMode("tablet")}
                      className={`px-3 py-2 rounded-md text-sm transition-all flex items-center gap-1 ${
                        viewMode === "tablet"
                          ? "bg-white dark:bg-brand-primary-700 shadow-sm"
                          : "text-brand-primary-600 dark:text-gray-300"
                      }`}
                      title="Tablet View"
                    >
                      <FaTabletAlt className="w-3 h-3" />
                      <span className="hidden sm:inline">Tablet</span>
                    </button>
                    <button
                      onClick={() => setViewMode("desktop")}
                      className={`px-3 py-2 rounded-md text-sm transition-all flex items-center gap-1 ${
                        viewMode === "desktop"
                          ? "bg-white dark:bg-brand-primary-700 shadow-sm"
                          : "text-brand-primary-600 dark:text-gray-300"
                      }`}
                      title="Desktop View"
                    >
                      <FaDesktop className="w-3 h-3" />
                      <span className="hidden sm:inline">Desktop</span>
                    </button>
                  </div>

                  {/* Centering Button */}
                  <button
                    onClick={centerContent}
                    className="p-3 bg-brand-primary-100 dark:bg-brand-primary-800 text-brand-primary-700 dark:text-gray-300 rounded-lg hover:bg-brand-primary-200 dark:hover:bg-brand-primary-700 transition-colors"
                    title="Center Content"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">◎</div>
                  </button>

                  {/* Zoom Controls */}
                  <div className="flex items-center gap-1 bg-brand-primary-100 dark:bg-brand-primary-800 rounded-lg p-1">
                    <button
                      onClick={() => setScale(Math.max(0.3, scale - 0.1))}
                      className="p-2 text-brand-primary-600 dark:text-gray-300 hover:text-brand-primary-800 dark:hover:text-white"
                      title="Zoom Out"
                    >
                      <FaSearchMinus className="w-4 h-4" />
                    </button>
                    <span className="px-2 text-sm text-brand-primary-600 dark:text-gray-300 min-w-[60px] text-center">
                      {Math.round(scale * 100)}%
                    </span>
                    <button
                      onClick={() => setScale(Math.min(2, scale + 0.1))}
                      className="p-2 text-brand-primary-600 dark:text-gray-300 hover:text-brand-primary-800 dark:hover:text-white"
                      title="Zoom In"
                    >
                      <FaSearchPlus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <button
                    onClick={reloadIframe}
                    className="p-3 bg-brand-primary-100 dark:bg-brand-primary-800 text-brand-primary-700 dark:text-gray-300 rounded-lg hover:bg-brand-primary-200 dark:hover:bg-brand-primary-700 transition-colors"
                    title="Reload"
                  >
                    <FaSync className="w-5 h-5" />
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-3 bg-brand-primary-100 dark:bg-brand-primary-800 text-brand-primary-700 dark:text-gray-300 rounded-lg hover:bg-brand-primary-200 dark:hover:bg-brand-primary-700 transition-colors"
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
                    className="p-3 bg-gradient-to-r from-brand-primary-700 to-brand-primary-600 text-white rounded-lg hover:from-brand-primary-800 hover:to-brand-primary-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <FaDownload className="w-5 h-5" />
                    <span className="hidden sm:inline">Save</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="p-3 bg-gradient-to-r from-brand-secondary-500 to-brand-secondary-600 text-brand-primary-900 rounded-lg hover:from-brand-secondary-600 hover:to-brand-secondary-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <FaPrint className="w-5 h-5" />
                    <span className="hidden sm:inline">Print</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mt-6 overflow-x-auto pb-2">
                <button
                  className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-brand-primary-700 to-brand-secondary-500 text-white shadow-lg flex items-center gap-2"
                >
                  <FaEye className="w-4 h-4" />
                  Preview
                </button>
                <button
                  onClick={() => window.open(cvUrl, "_blank")}
                  className="px-4 py-2 rounded-lg font-medium text-brand-primary-600 dark:text-gray-300 hover:bg-brand-primary-100 dark:hover:bg-brand-primary-800 transition-all flex items-center gap-2"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Open in New Tab
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div
              ref={containerRef}
              className="overflow-hidden p-4 sm:p-6"
              style={{
                height: isFullscreen
                  ? "calc(100vh - 180px)"
                  : "calc(95vh - 180px)",
              }}
            >
              <div className="relative w-full h-full bg-gradient-to-br from-brand-primary-100 to-brand-primary-200 dark:from-brand-primary-800 dark:to-brand-primary-900 rounded-xl overflow-hidden shadow-inner">
                {/* Loading Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/80 to-brand-primary-100/80 dark:from-brand-primary-900/80 dark:to-brand-primary-800/80 backdrop-blur-sm z-10">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-brand-secondary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-brand-primary-700 dark:text-gray-200 font-medium">
                        Loading your professional CV...
                      </p>
                      <p className="text-sm text-brand-primary-500 dark:text-gray-400 mt-2">
                        Powered by FlowCV
                      </p>
                    </div>
                  </div>
                )}

                {/* Iframe Container */}
                <div style={getContainerStyles()}>
                  <div
                    style={getIframeStyles()}
                    className="transition-all duration-300"
                  >
                    <iframe
                      ref={iframeRef}
                      id="cv-iframe"
                      src={cvUrl}
                      className="w-full h-full"
                      onLoad={() => {
                        setIsLoading(false);
                        // Try to inject centering styles
                        setTimeout(() => {
                          centerContent();
                        }, 500);
                      }}
                      title="Beka Temesgen - Professional CV"
                      allowFullScreen
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>

                {/* Overlay Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
                  <div className="flex items-center gap-1">
                    {viewMode === "mobile" ? (
                      <FaMobileAlt className="w-3 h-3" />
                    ) : viewMode === "tablet" ? (
                      <FaTabletAlt className="w-3 h-3" />
                    ) : (
                      <FaDesktop className="w-3 h-3" />
                    )}
                    <span className="text-sm font-medium">
                      {viewMode === "mobile"
                        ? "Mobile"
                        : viewMode === "tablet"
                        ? "Tablet"
                        : "Desktop"}
                    </span>
                  </div>
                  <div className="w-px h-4 bg-white/30" />
                  <div className="flex items-center gap-1">
                    <FaSearchMinus className="w-3 h-3 opacity-70" />
                    <span className="text-sm">{Math.round(scale * 100)}%</span>
                    <FaSearchPlus className="w-3 h-3 opacity-70" />
                  </div>
                  {!isCentered && (
                    <>
                      <div className="w-px h-4 bg-white/30" />
                      <button
                        onClick={centerContent}
                        className="text-xs text-brand-secondary-300 hover:text-white transition-colors"
                      >
                        Center ↑
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white/80 to-brand-primary-50/80 dark:from-brand-primary-900/80 dark:to-brand-primary-800/80 backdrop-blur-lg border-t border-brand-primary-200 dark:border-brand-primary-700 rounded-b-3xl p-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-secondary-500 rounded-full animate-pulse" />
                  <span className="text-sm text-brand-primary-600 dark:text-gray-300">
                    CV is live and interactive
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-secondary-600 dark:text-brand-secondary-300 hover:underline flex items-center gap-1"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Direct Link
                  </a>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    Real-time preview
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}