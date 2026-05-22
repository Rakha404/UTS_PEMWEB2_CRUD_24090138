import { useEffect, useState } from "react";
import { z } from "zod";
import { InputText } from "../../../components/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";

type Category = {
  id: number;
  name: string;
};

type Pembicara = {
  id: number;
  name: string;
  role: string;
  image: string;
};

type FormData = {
  name: string;
  description: string;
  location: string;
  dateEvent: string;
  categoryId: string;
  pembicaraId: string;
};

const schema = z.object({
  name: z.string().min(1, "Judul event harus diisi"),
  description: z.string().min(1, "Deskripsi harus diisi"),
  location: z.string().min(1, "Lokasi harus diisi"),
  dateEvent: z.string().min(1, "Tanggal event harus diisi"),
  categoryId: z.string().min(1, "Kategori event harus dipilih"),
  pembicaraId: z.string().min(1, "Pembicara harus dipilih"),
});

export default function EventCreate() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const getCategories = async () => {
    const response = await fetch("https://backendcrud-omega.vercel.app/categories");
    const data = await response.json();
    setCategories(data);
  };

  const getPembicara = async () => {
    const response = await fetch("https://backendcrud-omega.vercel.app/pembicara");
    const data = await response.json();
    setPembicara(data);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://backendcrud-omega.vercel.app/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.name,
          description: data.description,
          location: data.location,
          dateEvent: data.dateEvent,
          categoryId: Number(data.categoryId),
          pembicaraId: Number(data.pembicaraId),
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal menambahkan event");
      }

      alert("Event berhasil ditambahkan");
      reset();
      navigate("/dashboard/event");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menambahkan event");
    }
  };

  useEffect(() => {
    getCategories();
    getPembicara();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-pink-200 rounded-2xl shadow-md p-8 border border-black">
        <h2 className="text-2xl font-bold text-red-900 mb-6 border-b border-pink-200 pb-4">
          Add New Event
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText
            label="Event Title"
            nama="title"
            register={register}
            error={errors.name?.message}
          />

          <InputText
            label="Description"
            nama="description"
            register={register}
            error={errors.description?.message}
          />

          <InputText
            label="Location"
            nama="location"
            register={register}
            error={errors.location?.message}
          />

          <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-red-900">Tanggal & Jam Pelaksanaan</label>
                <input
                  type="datetime-local"
                  {...register("dateEvent")}
                  className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-red-900 transition-colors"
                />
                {errors.dateEvent && (
                  <p className="text-red-900">{errors.dateEvent.message}</p>
                )}
              </div>

          <div>
            <label className="block mb-2 font-medium text-red-900">
              Category Event
            </label>
            <select
              {...register("categoryId")}
              className="w-full px-4 py-3 rounded-xl border border-black bg-pink-200"
            >
              <option value="">Pilih Category Event</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <p className="text-sm text-red-900mt-1">
              {errors.categoryId?.message}
            </p>
          </div>

          <div>
            <label className="block mb-2 font-medium text-red-900">
              Pembicara
            </label>
            <select
              {...register("pembicaraId")}
              className="w-full px-4 py-3 rounded-xl border border-black bg-pink-200"
            >
              <option value="">Pilih Pembicara</option>
              {pembicara.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} - {item.role}
                </option>
              ))}
            </select>
            <p className="text-sm text-red-900 mt-1">
              {errors.pembicaraId?.message}
            </p>
          </div>

          <div className="flex justify-start mt-4">
            <Button type="submit" label="Save Event" />
          </div>
        </form>
      </div>
    </div>
  );
}