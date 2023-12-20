import { Container } from "../../components/common/container";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
}
