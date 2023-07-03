import { ContentText } from "@/components/ContentText";
import { QrCodeImage } from "@/components/QrCodeImage";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Qr Code Component</h1>
      <section className="max-w-xs bg-white text-center px-4 pb-10 m-2 rounded-3xl shadow-xl">
        <QrCodeImage />
        <ContentText />
      </section>
    </main>
  );
}
