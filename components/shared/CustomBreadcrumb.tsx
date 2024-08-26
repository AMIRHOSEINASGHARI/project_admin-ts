// react
import { Fragment } from "react";
// cmp
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type CustomBreadcrumbProps = {
  data: {
    title: string;
    href: string;
  }[];
  breadcrumbPage?: string;
};

const CustomBreadcrumb = ({ data, breadcrumbPage }: CustomBreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data.map((item, index) => (
          <Fragment key={item.title}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            {data.length - 1 > index && <BreadcrumbSeparator />}
          </Fragment>
        ))}
        {breadcrumbPage && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{breadcrumbPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
