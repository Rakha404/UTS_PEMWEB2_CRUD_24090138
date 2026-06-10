import { useForm } from "react-hook-form";
import { InputText } from "../components/InputText";
import { InputPassword } from "../components/InputPassword";
import { Select } from "../components/Select";
import { TextArea } from "../components/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import Button from "../components/Button";

type FormData = {
    nama: string;
    email: string;
    password: string;
    password_confirm: string;
    bio: string;
    event: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    password_confirm: z.string().min(8, "Password minimal 8 karakter"),
    bio: z.string().min(10, "Isi Bio minimal 10 karakter"),
    event: z.string().min(1, "Pilih salah satu event")
});

export default function RegisterForm() {
    const { register,
        handleSubmit,
        formState: { errors } }
        = useForm<FormData>({
            resolver: zodResolver(schema)
        });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="Nama"
                    nama="nama"
                    register={register}
                    error={errors.nama?.message}
                />

                <InputText
                    label="Email"
                    nama="email"
                    register={register}
                    error={errors.email?.message}
                />

                <InputPassword
                    label="Password"
                    nama="password"
                    register={register}
                    error={errors.password?.message}
                />

                <InputPassword
                    label="Confirm Password"
                    nama="password_confirm"
                    register={register}
                    error={errors.password_confirm?.message}
                />

                <TextArea
                    label="Bio"
                    name="bio"
                    register={register}
                    error={errors.bio?.message}
                />

                <Select
                    label="Event"
                    name="event"
                    register={register}
                    options={[
                        { label: "Invofest", value: "invofest" },
                        { label: "Workshop AI", value: "ai" }
                    ]}
                    error={errors.event?.message}
                />
                <Button
                    label="Login"
                    variant="primary"
                    type="submit"
                    className="mt-4"
                />
            </form>

            <div className="mt-4">
                Sudah punya akun? <Link to="/login" className="hover:text-red-900">Login Disini</Link>
            </div>
        </div>
    );
}