// utils
import { getServerSession } from "@/utils/session";
// constants
import { user_profile_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import ProfileTabsList from "./ui/ProfileTabsList";
import { images } from "@/constants";

const ProfilePage = () => {
  const session = getServerSession();

  return (
    <>
      <PageHeading text="Profile" />
      <CustomBreadcrumb
        data={user_profile_page_breadcrumb_data}
        breadcrumbPage={session?.name ?? undefined}
      />
      <ProfileTabsList
        avatar={session?.avatar || images.admin}
        name={session?.name}
        roll={session?.roll}
      />
    </>
  );
};

export default ProfilePage;