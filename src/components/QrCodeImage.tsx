import Image from "next/image";
import qrImage from "../../public/image-qr-code.png";

export function QrCodeImage() {
  return (
    <div className="pt-4 pb-7">
      <Image src={qrImage} alt="QR Code" className="rounded-2xl" />
    </div>
  );
}
