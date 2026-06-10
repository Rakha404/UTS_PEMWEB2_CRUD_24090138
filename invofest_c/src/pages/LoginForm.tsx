import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "../components/InputText";
import { InputPassword } from "../components/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/Button";
import { useAuthStore } from "../store/UseAuthStore";

type FormData = {
    email: string;
    password: string;
};

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
})

export default function LoginForm() {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const { register,
        handleSubmit,
        formState: { errors } }
        = useForm<FormData>({
            resolver: zodResolver(schema)
        });

    const onSubmit = (data: FormData) => {
        console.log(data);
        if (data.email == "24090138" && data.password == "24090138") {
            alert("Login Berhasil");

            login(data.email);
            //redirect ke halaman dashboard
            navigate("/dashboard");
        } else {
            alert("Email atau Password salah");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

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
                <Button
                    label="Login" // Label sebaiknya Register bukan login jika ini form register
                    variant="primary"
                    type="submit"    // Harus SUBMIT
                />
                <div>
                    Belum punya akun? <Link to="/register" className="hover:text-red-900">Daftar Disini</Link>
                </div>
            </form>
        </div>
    );
}