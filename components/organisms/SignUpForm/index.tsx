import Link from "next/link";
import Input from "../../atoms/Input";

export default function SignUpForm() {
  return (
    <>
      <div className="pt-50">
        <Input
          type="text"
          name="name"
          label="Full Name"
          placeholder="Enter you name"
        />
      </div>
      <div className="pt-30">
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
        />
      </div>
      <div className="pt-30">
        <Input
          type="password"
          name="password"
          label="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <Link
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          href="signup-photo"
          role="button"
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
