"use client";
import {
  Button,
  Chip,
  Tooltip,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TicketProps } from "@/utils/ticket.type";
import { CustomerProps } from "@/utils/customer.type";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { api } from "../../../lib/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

interface TicketItemProps {
  ticket: TicketProps;
  customer: CustomerProps | null;
}

export function TicketItem({ customer, ticket }: TicketItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const closePopover = () => {
    setIsOpen(false);
  };

  async function handleChangeStatus() {
    try {
      const response = await api.patch("/api/ticket", {
        id: ticket.id,
      });

      router.refresh();
      toast.success("Chamado finalizado com sucesso!", {
        style: {
          fontSize: "12px",
        },
      });
    } catch (err) {
      toast.error("Ocorreu um erro ao finalizar este chamado!", {
        style: {
          fontSize: "12px",
        },
      });
    }
  }

  async function handleDeleteTicket() {
    try {
      const response = await api.delete("/api/ticket", {
        data: { id: ticket.id },
      });

      router.refresh();
      toast.success("Chamado excluído com sucesso!", {
        style: {
          fontSize: "12px",
        },
      });
    } catch (err) {
      toast.error("Ocorreu um erro ao excluir este chamado!", {
        style: {
          fontSize: "12px",
        },
      });
    }
  }

  return (
    <>
      <tr className="even:bg-stone-200">
        <td className="text-center py-5 max-w-10 truncate pl-5 lg:pl-0">
          {customer?.name}
        </td>
        <td className="text-center hidden md:table-cell">
          {ticket.created_at?.toLocaleDateString("pt-BR")}
        </td>
        <td className="text-center py-5">
          <Chip color="success" radius="sm" className="uppercase text-white">
            {ticket.status}
          </Chip>
        </td>
        <td className="text-center py-5">
          <Tooltip
            content="Ver detalhes"
            delay={0}
            closeDelay={0}
            color="primary"
            radius="sm"
          >
            <Button
              endContent={<BiMessageSquareDetail size={20} />}
              color="primary"
              variant="light"
              className="font-medium"
              isIconOnly
              size="sm"
            />
          </Tooltip>

          <Tooltip
            content="Finalizar Chamado"
            delay={0}
            closeDelay={0}
            color="success"
            className="text-white"
            radius="sm"
          >
            <Button
              endContent={<IoMdCheckmarkCircleOutline size={20} />}
              color="success"
              variant="light"
              className="font-medium md:ml-2"
              isIconOnly
              size="sm"
              onClick={handleChangeStatus}
            />
          </Tooltip>

          <>
            <Popover
              isOpen={isOpen}
              onOpenChange={(open) => setIsOpen(open)}
              backdrop="blur"
              classNames={{
                base: "py-3 px-4 px-5",
              }}
              placement="top"
            >
              <Tooltip
                content="Excluir Chamado"
                delay={0}
                closeDelay={0}
                color="danger"
                className="text-white"
                radius="sm"
                offset={18}
              >
                <span>
                  <PopoverTrigger>
                    <Button
                      endContent={<RiDeleteBin2Fill size={20} />}
                      color="danger"
                      variant="light"
                      className="font-medium md:ml-2"
                      isIconOnly
                      size="sm"
                    />
                  </PopoverTrigger>
                </span>
              </Tooltip>

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
                      onClick={handleDeleteTicket}
                    >
                      Deletar
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </>
        </td>
      </tr>
    </>
  );
}
