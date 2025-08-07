import React from 'react';

const FloatingWhatsAppButton = () => (
  <a
    href="https://wa.me/971505606877"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors duration-200 group"
    title="Instant Support, One Tap Away"
    aria-label="Chat on WhatsApp"
  >
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M20.52 3.484A11.815 11.815 0 0 0 12.004 0C5.373 0 .001 5.373.001 12c0 2.121.555 4.197 1.607 6.032L0 24l6.184-1.624A11.948 11.948 0 0 0 12.004 24c6.627 0 11.999-5.373 11.999-12 0-3.193-1.247-6.197-3.483-8.516zM12.004 22.003c-1.886 0-3.733-.496-5.34-1.434l-.383-.228-3.669.964.977-3.58-.25-.369C2.06 15.634 1.504 13.845 1.504 12c0-5.799 4.701-10.5 10.5-10.5 2.807 0 5.447 1.093 7.426 3.074A10.44 10.44 0 0 1 22.5 12c0 5.799-4.701 10.503-10.496 10.503z"/>
    </svg>
    <span className="absolute bottom-20 right-0 bg-primary text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">Instant Support, One Tap Away</span>
  </a>
);

export default FloatingWhatsAppButton; 