import Input from "../../atoms/Input";

export default function () {
  return (
    <>
      <div className="pt-30">
        <Input
          label="Fullname"
          placeholder="Enter your name"
          name="name"
          type="text"
        />
      </div>
      <div className="pt-30">
        <Input
          label="Email Address"
          placeholder="Enter your email"
          name="email"
          type="email"
        />
      </div>
      <div className="pt-30">
        <Input
          label="Phone"
          placeholder="Enter your phone number"
          name="phone"
          type="tel"
        />
      </div>
      <div className="button-group d-flex flex-column pt-50">
        <button
          type="submit"
          className="btn btn-save fw-medium text-lg text-white rounded-pill"
          role="button"
        >
          Save My Profile
        </button>
      </div>
    </>
  );
}
