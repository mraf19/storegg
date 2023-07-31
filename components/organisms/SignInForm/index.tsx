import Link from "next/link";
import Input from "../../atoms/Input";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLogIn } from "../../../services/auth";
import { useRouter } from "next/router";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    if (!email || !password) {
      toast.error("Email dan Password wajib diisi!!");
    } else {
      const response = await setLogIn(data);

      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Login Berhasil!");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    }
  };
  return (
    <>
      <div className="pt-50">
        <Input
          type="email"
          name="email"
          label="Enail Address"
          placeholder="Enter your email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
          value={email}
        />
      </div>
      <div className="pt-30">
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
          value={password}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          role="button"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        <Link
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          href="/signup"
          role="button"
        >
          Sign Up
        </Link>
        <ToastContainer />
      </div>
    </>
  );
}
