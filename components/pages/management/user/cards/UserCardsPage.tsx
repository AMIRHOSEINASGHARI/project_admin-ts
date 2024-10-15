// constants
import { user_cards_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";

const UserCardsPage = async () => {
  return (
    <>
      <PageHeading text="User cards" />
      <CustomBreadcrumb
        data={user_cards_page_breadcrumb_data}
        breadcrumbPage="Cards"
      />
    </>
  );
};

export default UserCardsPage;
