import noImage from "../assets/no-image-placeholder-6f3882e0.webp"; // static assets that we are going to deploy with out application, so we imported it as a Component

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
