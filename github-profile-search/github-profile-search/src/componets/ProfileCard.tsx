import profilephoto from "../assets/nathan.jpg"


const ProfileCard = () => {
  return (
    <main className="p-3 border-red ">
      <div className="flex">
        <img src={profilephoto} alt="profile photo" className="rounded w-1/6" />
        <h1>
     
          <span> Nathan</span> <span>Turskon</span>
        </h1>
      </div>
    </main>
  );
}

export default ProfileCard
