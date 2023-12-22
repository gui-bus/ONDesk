"use client";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/common/input";
import {
  MdOutlineDriveFileRenameOutline,
  MdAlternateEmail,
  MdPhone,
} from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import { PiUserCirclePlus } from "react-icons/pi";

import { api } from "../../../../lib/api";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório!"),
  email: z
    .string()
    .email("Digite um e-mail válido!")
    .min(1, "O campo e-mail é obrigatório!"),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      );
    },
    {
      message: "Digite um número válido! (DDD) + 9 Dígitos",
    }
  ),
  address: z.string(),
});

type FormData = z.infer<typeof schema>;

export function NewCustomerForm({ userId }: { userId: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  async function handleRegisterCustomer(data: FormData) {
    await api.post("/api/customer", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      userId: userId,
    });

    router.push("/dashboard/customer")
    toast.success("Cliente cadastrado com sucesso!", { style : {
      fontSize: "12px"
    }})
  }

  return (
    <form
      className="mt-5 flex flex-col items-center justify-center gap-5 bg-stone-200 p-5 rounded-xl"
      onSubmit={handleSubmit(handleRegisterCustomer)}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
        <FormInput
          label="Nome do Cliente"
          type="text"
          name="name"
          error={errors.name?.message}
          register={register}
          required={true}
          placeholder="Digite o nome do cliente..."
          startContent={
            <MdOutlineDriveFileRenameOutline
              size={25}
              className="text-gray-700"
            />
          }
        />
        <FormInput
          label="E-mail"
          type="email"
          name="email"
          error={errors.email?.message}
          register={register}
          required={true}
          placeholder="Digite o e-mail do cliente..."
          startContent={
            <MdAlternateEmail size={25} className="text-gray-700" />
          }
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
        <FormInput
          label="Telefone"
          type="number"
          name="phone"
          error={errors.phone?.message}
          register={register}
          required={true}
          placeholder="Digite o telefone do cliente..."
          startContent={<MdPhone size={25} className="text-gray-700" />}
        />
        <FormInput
          label="Endereço"
          type="text"
          name="address"
          error={""}
          register={register}
          required={false}
          placeholder="Digite o endereço do cliente..."
          startContent={<IoMdPin size={25} className="text-gray-700" />}
        />
      </div>

      <Button
        endContent={<PiUserCirclePlus size={25} />}
        color="primary"
        variant="shadow"
        className="w-full font-medium"
        type="submit"
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
}
