import { TikTokIcon } from "@/components/SocialIcons";
import { TIKTOK_URL } from "@/lib/social";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/whatsapp";

const videos = [
  {
    id: "7675780323975843105",
    url: "https://www.tiktok.com/@nikborella/video/7675780323975843105",
  },
  {
    id: "7659776726372781345",
    url: "https://www.tiktok.com/@nikborella/video/7659776726372781345",
  },
  {
    id: "7665285174661238048",
    url: "https://www.tiktok.com/@nikborella/video/7665285174661238048",
  },
] as const;

export function AutoInVideo() {
  return (
    <section
      id="auto"
      className="section-wash section-wash-garage py-16 text-white md:py-24"
    >
      <div className="site-container">
        <div className="flex flex-col gap-6 min-[1100px]:flex-row min-[1100px]:items-end min-[1100px]:justify-between min-[1100px]:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Le auto in video
            </h2>
            <p className="mt-3 text-[1.05rem]/[1.55] text-white/80">
              Le pubblico su TikTok. Se ti interessa un modello, scrivimi.
            </p>
          </div>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-fit shrink-0"
          >
            <TikTokIcon className="h-5 w-5" />
            Seguimi su TikTok
          </a>
        </div>

        <ul className="auto-tiktok-grid">
          {videos.map((video, index) => (
            <li key={video.id} className="min-w-0">
              <div className="auto-tiktok-frame">
                <iframe
                  src={`https://www.tiktok.com/player/v1/${video.id}?autoplay=0&music_info=0&description=0&rel=0`}
                  title={`Video TikTok ${index + 1} di @nikborella`}
                  allow="fullscreen; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-only"
              >
                Apri il video {index + 1} su TikTok
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-[0.95rem]/[1.5] text-white/80">
          Vuoi una di queste o qualcosa di simile?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-whatsapp hover:underline"
          >
            {WHATSAPP_LABEL}
          </a>
        </p>
      </div>
    </section>
  );
}
