// next
import Image from "next/image";
// types
import { PaymentMethodType } from "@/types/order";
// cmp
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// icons
import {
  CreditCard,
  Paypal,
  PlusRegular,
  SolarPenBoldDuotone,
  Wallet,
} from "@/components/svg";

type OtherInformationProps = {
  userAvatar?: string;
  username: string;
  displayName?: string;
  deliveryAddress: string;
  phoneNumber: string | number;
  paymentMethod: PaymentMethodType;
};

const OtherInformation = ({
  userAvatar,
  displayName,
  username,
  deliveryAddress,
  phoneNumber,
  paymentMethod,
}: OtherInformationProps) => {
  return (
    <Card
      className="w-full"
      style={{
        padding: 0,
      }}
    >
      <div className="p-card space-y-[15px]">
        <div className="flex items-center justify-between">
          <CardTitle>Customer info</CardTitle>
          <Button variant="icon">
            <SolarPenBoldDuotone />
          </Button>
        </div>
        <div className="flex gap-4">
          <Image
            src={userAvatar || "/images/avatars/avatar_1.jpg"}
            width={100}
            height={100}
            alt="product"
            priority
            className="rounded-full w-[50px] h-[50px]"
          />
          <div className="flex flex-col gap-1 overflow-hidden">
            {displayName && <p className="text-small">{displayName}</p>}
            <span className="text-small font-light">{username}</span>
            <p className="text-small">IP address:192.158.1.38</p>
            <Button
              variant="ghost"
              className="text-error-dark dark:text-error-light py-1 px-3 w-fit gap-3 mt-3 bg-transparent dark:bg-transparent dark:hover:bg-error-light/10 dark:hover:text-error-light hover:bg-error-dark/10"
            >
              <PlusRegular />
              Add to Blacklist
            </Button>
          </div>
        </div>
      </div>
      <Separator />
      <div className="p-card space-y-[15px]">
        <div className="flex items-center justify-between">
          <CardTitle>Delivery</CardTitle>
          <Button variant="icon">
            <SolarPenBoldDuotone />
          </Button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-2 gap-3 text-small w-full">
            <span className="text-[var(--text-disabled)]">Ship by</span>
            <span>DHL</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-small w-full">
            <span className="text-[var(--text-disabled)]">Speedy</span>
            <span>Standard</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-small w-full">
            <span className="text-[var(--text-disabled)]">Tracking No.</span>
            <span className="underline">SPX037739199373</span>
          </div>
        </div>
      </div>
      <Separator />
      <div className="p-card space-y-[15px]">
        <div className="flex items-center justify-between">
          <CardTitle>Shipping</CardTitle>
          <Button variant="icon">
            <SolarPenBoldDuotone />
          </Button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-2 gap-3 text-small w-full">
            <span className="text-[var(--text-disabled)]">Address</span>
            <span>{deliveryAddress}</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-small w-full">
            <span className="text-[var(--text-disabled)]">Phone number</span>
            <span>{phoneNumber}</span>
          </div>
        </div>
      </div>
      <Separator />
      <div className="p-card space-y-[15px]">
        <div className="flex items-center justify-between">
          <CardTitle>Payment</CardTitle>
          <Button variant="icon">
            <SolarPenBoldDuotone />
          </Button>
        </div>
        <div className="w-full flex justify-end items-center gap-2">
          <span className="text-small">{paymentMethod}</span>
          <div className="text-icon-size">
            {paymentMethod === "Cash On Delivery" ? (
              <Wallet className="text-green-500" />
            ) : paymentMethod === "Credit Card" ? (
              <CreditCard className="text-orange-500" />
            ) : (
              <Paypal className="text-blue-500" />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OtherInformation;
