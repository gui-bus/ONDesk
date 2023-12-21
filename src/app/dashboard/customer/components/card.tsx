"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link,
} from "@nextui-org/react";
import { PiUserCirclePlus, PiUserCircleMinus } from "react-icons/pi";
import { TbMailForward, TbPhoneOutgoing } from "react-icons/tb";

export default function CardCostumer() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closePopover = () => {
    setIsOpen(false);
  };

  return (
    <Card className="cursor-default">
      <CardHeader className="flex items-center justify-center bg-[#333333]">
        <p className="font-bold text-lg text-white">FutureTECH</p>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-row items-center justify-around mx-auto w-full">
        <div className="flex flex-col items-start justify-start">
          <p>
            <span>E-mail - </span>contato@futuretech.com
          </p>
          <p>
            <span>Whatsapp - </span>(12)99999-9999
          </p>
        </div>
        <div>
          <Popover
            isOpen={isOpen}
            onOpenChange={(open) => setIsOpen(open)}
            backdrop="blur"
            classNames={{
              base: "py-3 px-4 px-5",
            }}
            placement="top"
          >
            <PopoverTrigger className="mx-auto my-3">
              <Button
                endContent={<PiUserCircleMinus size={25} />}
                color="danger"
                variant="shadow"
                isIconOnly
              />
            </PopoverTrigger>
            <PopoverContent className="max-w-xs md:max-w-md">
              <div className="flex flex-col items-center justify-center gap-2 px-5 text-center">
                <div className="flex flex-col items-center justify-center mt-3">
                  <p>Deseja mesmo deletar este cliente?</p>
                  <p className="mt-2 text-tiny text-red-400 font-medium">
                    Esta ação é irreversível!
                  </p>
                </div>
                <Divider />
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 my-2 w-full">
                  <Button
                    variant="shadow"
                    color="primary"
                    className="w-full"
                    onClick={closePopover}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="shadow"
                    color="danger"
                    className="w-full mx-auto md:my-3"
                  >
                    Deletar
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-col items-center justify-center gap-2">
        <p className="text-center text-xs font-light w-full mx-auto max-w-[80%]">
          Para entrar em contato direto com o seu cliente utilize os botôes
          abaixo
        </p>
        <div className="flex items-center justify-center gap-2 w-full mt-2">
          <Link href="" isExternal className="w-full">
            <Button
              color="primary"
              variant="ghost"
              className="font-medium w-full max-w-sm h-12 mx-auto"
              endContent={<TbMailForward size={20} />}
            >
              E-mail
            </Button>
          </Link>

          <Link href="" isExternal className="w-full">
            <Button
              color="primary"
              variant="ghost"
              className="font-medium w-full max-w-sm h-12 mx-auto"
              endContent={<TbPhoneOutgoing size={20} />}
            >
              Telefone
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
