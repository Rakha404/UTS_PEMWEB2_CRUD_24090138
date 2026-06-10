import { z } from "zod";
import { InputText } from "../../../components/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";

type FormData = {
  name: string;
  role: string;
  image: string;
};

const schema = z.object({
  name: z.string().min(1, "Nama pembicara harus diisi"),
  role: z.string().min(1, "role harus diisi"),
  image: z.string().min(1, "image harus diisi"),
});

export default function PembicaraCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://backendcrud-omega.vercel.app/pembicara", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Gagal menambahkan pembicara");
      }

      alert("Pembicara berhasil ditambahkan");
      reset();
      navigate("/dashboard/pembicara");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menambahkan pembicara");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-pink-200 rounded-2xl shadow-md p-8 border border-white">
        <h2 className="text-2xl font-bold text-red-900 mb-6 border-b border-pink-200 pb-4">
          Add New Pembicara
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText
            label="Nama Pembicara"
            nama="name"
            register={register}
            error={errors.name?.message}
          />

          <InputText
            label="role"
            nama="role"
            register={register}
            error={errors.role?.message}
          />

          <InputText
            label="image"
            nama="image"
            register={register}
            error={errors.image?.message}
          />

          <div className="flex justify-start mt-4">
            <Button type="submit" label="Save Pembicara" />
          </div>
        </form>
      </div>
    </div>
  );
}