// next
import { Metadata } from "next";
// cmp
import ProfilePage from "@/components/pages/management/user/profile/ProfilePage";

export const metadata: Metadata = {
  title: "User profile",
};

const Profile = () => {
  return <ProfilePage />;
};

export default Profile;
