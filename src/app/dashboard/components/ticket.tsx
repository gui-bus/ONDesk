import { Button, Chip, Divider, Tooltip } from "@nextui-org/react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

export function TicketItem() {
  return (
    <>
      <tr className="even:bg-stone-200">
        <td className="text-center py-5 max-w-10 truncate pl-5 lg:pl-0">
          Guilherme Bustamante
        </td>
        <td className="text-center hidden md:table-cell">23/07/1998</td>
        <td className="text-center py-5">
          <Chip color="success" radius="sm" className="uppercase text-white">
            Ativo
          </Chip>
        </td>
        <td className="text-center py-5">
          <Tooltip
            content="Ver detalhes"
            delay={0}
            closeDelay={0}
            showArrow={true}
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
            content="Deletar Chamado"
            delay={0}
            closeDelay={0}
            showArrow={true}
            color="danger"
            radius="sm"
          >
            <Button
              endContent={<RiDeleteBin2Fill size={20} />}
              color="danger"
              variant="light"
              className="font-medium md:ml-2"
              isIconOnly
              size="sm"
            />
          </Tooltip>
        </td>
      </tr>
    </>
  );
}
