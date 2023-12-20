import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import UIProvider from "@/providers/UIProvider";
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";
import { AuthProvider } from "@/providers/auth";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ONDesk | Simplificando sua gestão empresarial",
  description:
    "Simplifique a gestão do seu negócio com a plataforma ONDesk. Cadastre clientes, acompanhe tarefas e otimize sua operação de forma eficiente.",
  keywords: [
    "Ondesk",
    "Gestão Empresarial",
    "Clientes",
    "Tarefas",
    "Plataforma Integrada",
    "Eficiência Empresarial",
    "Sistema de Suporte",
    "Gerenciamento de Tarefas",
    "Software Empresarial",
    "Tarefas Empresariais",
    "Cliente",
    "Suporte ao Cliente",
    "Ferramenta de Gestão",
    "Solução Empresarial",
    "Produtividade Empresarial",
    "Negócios",
    "Empreendedorismo",
    "Administração",
    "Gestão de Clientes",
    "Sistema Integrado",
    "Task Manager",
    "Customer Support",
    "Organização Empresarial",
    "Plataforma de Tarefas",
    "Soluções Empresariais",
    "Sistema de Clientes",
    "Fácil de Usar",
    "Otimização Empresarial",
    "Empresas",
    "Sistema de Negócios",
    "Gestão de Operações",
    "Plataforma de Gestão",
    "Automatização Empresarial",
    "Tecnologia Empresarial",
    "Serviço ao Cliente",
    "Ferramenta Empresarial",
    "Gestão de Projetos",
    "Clientes Empresariais",
    "Ondesk Solutions",
    "Inovação Empresarial",
    "Sistema de Negócios Integrado",
    "Eficiência Operacional",
    "Organize sua Empresa",
    "Gerenciador de Clientes",
    "Sistema de Tarefas",
    "Otimize Seu Negócio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <AuthProvider>
          <UIProvider>
            <div className="flex min-h-screen flex-col bg-gradient-to-t from-neutral-50 to-neutral-100">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </UIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
