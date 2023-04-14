import Link from "next/link";
import Input from "../../atoms/Input";

export default function SignInForm() {
  return (
    <>
      <div className="pt-50">
        <Input
          type="email"
          name="email"
          label="Enail Address"
          placeholder="Enter your email"
        />
      </div>
      <div className="pt-30">
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <Link
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          href="/"
          role="button"
        >
          Continue to Sign In
        </Link>
        <Link
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          href="/signup"
          role="button"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
