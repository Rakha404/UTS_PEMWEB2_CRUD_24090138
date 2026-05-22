import { useEffect } from "react";
import { z } from "zod";
import { InputText } from "../../../components/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
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

export default function PembicaraUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const getDetailPembicara = async () => {
    try {
      const response = await fetch(`http://localhost:3000/pembicara/${id}`);
      const data = await response.json();

      setValue("name", data.name);
      setValue("role", data.role);
      setValue("image", data.image);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`http://localhost:3000/pembicara/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Gagal mengupdate pembicara");
      }

      alert("Pembicara berhasil diupdate");
      navigate("/dashboard/pembicara");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengupdate pembicara");
    }
  };

  useEffect(() => {
    getDetailPembicara();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-pink-200 rounded-2xl shadow-md p-8 border border-white">
        <h2 className="text-2xl font-bold text-red-900 mb-6 border-b border-pink-200 pb-4">
          Edit Pembicara
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
            <Button type="submit" label="Update Pembicara" />
          </div>
        </form>
      </div>
    </div>
  );
}