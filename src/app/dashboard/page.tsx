'use client'
import { useSession } from "next-auth/react";
import { Container } from "../../components/common/container";

export default function Dashboard() {
  const { status, data } = useSession();
  return (
    <Container>
      <h1>Dashboard - {data?.user.name}</h1>
    </Container>
  );
}
