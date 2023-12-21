import { Container } from "@/components/common/container";
import { Button, Divider, Link } from "@nextui-org/react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

export function DashboardHeader() {
  return (
    <Container>
      <header className="flex justify-center items-center md:items-end md:justify-end gap-2 mt-5">
        <Link href="/dashboard">
          <Button
            endContent={<MdOutlineLibraryBooks size={20} />}
            color="primary"
            variant="shadow"
            className="font-medium"
          >
            Chamados
          </Button>
        </Link>
        <Link href="/dashboard/customer">
          <Button
            endContent={<FaUsers size={20} />}
            color="primary"
            variant="shadow"
            className="font-medium"
          >
            Clientes
          </Button>
        </Link>
      </header>
      <Divider className="mt-5"/>
    </Container>
  );
}
