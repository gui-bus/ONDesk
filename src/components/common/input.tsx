'use client'
import { Input } from "@nextui-org/react";
import { ReactNode } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
  required: boolean
  placeholder: string;
  startContent: ReactNode;
}

export function FormInput({
  label,
  name,
  register,
  type,
  error,
  rules,
  required,
  placeholder,
  startContent,
}: InputProps) {
  return (
    <span className="flex flex-col items-start justify-start gap-1 w-full">
      <Input type={type} label={label} {...register(name, rules)} id={name} isRequired={required} placeholder={placeholder} startContent={startContent} labelPlacement="outside"/>
      {error && <p className="text-red-500 my-1 text-xs">{error}</p>}
    </span>
  );
}
