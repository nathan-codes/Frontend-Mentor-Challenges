import FollowerCard from "./FollowerCard";
import Links from "./Links";
import { ProfileInfo } from "./types";

interface ProfileCardProps {
  profileInfo: ProfileInfo;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profileInfo }) => {
  return (
    <main className="border-2 mt-6 bg-gray-50 rounded-md p-6">
      <header className="flex">
        <div className="image">
          <img
            src={profileInfo.avatar_url}
            alt="profile photo"
            className="h-[70px] w-[70px] sm:w-[117px] sm:h-[117px] rounded-full max-w-full"
          />
        </div>

        <div className="profile-info ms-4 flex flex-col sm:flex-row">
          <div>
            <h1 className="font-bold max-w-[120px] leading-4 sm:text-[26px] sm:leading-8 lg:max-w-[292px] lg:me-6">
              {profileInfo.name}
            </h1>
            <a href="#" className="text-blue text-[13px]">
              {`@${profileInfo.login}`}
            </a>
          </div>
          <p className="text-[13px] text-darkblue sm:text-[15px]">
            Joined {new Date(profileInfo.created_at).toLocaleDateString()}
          </p>
        </div>
      </header>
      <div className="profile-bio mt-4 text-darkdesaturatedblue text-[13px]">
        {profileInfo.bio || "This Profile has no bio."}
      </div>

      <FollowerCard followerCard={profileInfo} />

      <Links profileLinks={profileInfo} />
    </main>
  );
};

export default ProfileCard;
