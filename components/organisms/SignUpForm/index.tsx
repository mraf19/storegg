import Link from "next/link";
import Input from "../../atoms/Input";
import { useState } from "react";

export default function SignUpForm() {
  const [fullName, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    const form = {
      fullName,
      email,
      password
    }
    localStorage.setItem("user-form", JSON.stringify(form))
  }
  return (
    <>
      <div className="pt-50">
        <Input
          type="text"
          name="name"
          label="Full Name"
          placeholder="Enter you name"
          value={fullName}
          onChange={(event: React.ChangeEvent<HTMLInputElement> ) => setFullname(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement> ) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <Input
          type="password"
          name="password"
          label="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement> ) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <Link
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          href="signup-photo"
          role="button"
          onClick={onSubmit}
        >
          Continue
        </Link>
        <Link
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/signin"
          role="button"
        >
          Sign In
        </Link>
      </div>
    </>
  );
}
