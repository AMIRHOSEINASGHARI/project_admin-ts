import { SolarPenBoldDuotone } from "@/components/svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MailCompose = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full gap-2">
          <SolarPenBoldDuotone className="text-icon-size" />
          <span className="font-semibold">Compose</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MailCompose;
