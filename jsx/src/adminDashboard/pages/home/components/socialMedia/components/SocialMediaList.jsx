import SocialMediaItem from "./SocialMediaItem";
import socialMediaData from "./data/SocialMediaData";

function SocialMediaList() {
  return (
    <div className="social-media p-20 bg-white rad-10 p-relative">
      <h2 className="mt-0 mb-25">Social Media Stats</h2>
      {socialMediaData.map((platform, index) => (
        <SocialMediaItem key={index} platform={platform} />
      ))}
    </div>
  );
}

export default SocialMediaList;
