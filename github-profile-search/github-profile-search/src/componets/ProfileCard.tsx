import profilephoto from "../assets/nathan.jpg";
import FollowerCard from "./FollowerCard";
import Links from "./Links";
const ProfileCard = () => {
  return (
    <main className=" border-2  mt-6 bg-gray-50 rounded-md p-6">
      <header className="flex">
        <div className="image">
          <img
            src={profilephoto}
            alt="profile photo"
            className="h-[70px] w-[70px] sm:w-[117px] sm:h-[117px]  w rounded-full max-w-full "
          />
        </div>


        <div className="profile-info ms-4 flex flex-col sm:flex-row ">
          <div>
            <h1 className="font-bold max-w-[120px] leading-4 sm:text-[26px] sm:leading-8 lg:max-w-[292px] lg:me-6">
              Nathan Turskon
            </h1>
            <a href="#" className="text-blue text-[13px]">
              @nathan-codes
            </a>
          </div>
          <p className="text-[13px] text-darkblue sm:text-[15px]">
            Joined 20 Aug 2016
          </p>
        </div>
      </header>
      <div className="profile-bio mt-4 text-darkdesaturatedblue text-[13px]">
        This Profile has no bio.
      </div>
    
      
      <FollowerCard />

      <Links />
    </main>
  );
};

export default ProfileCard;
