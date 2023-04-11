export default function () {
  return (
    <>
      <div className="pt-30">
        <label
          htmlFor="name"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Full Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="phone"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Phone
        </label>
        <input
          type="tel"
          className="form-control rounded-pill text-lg"
          id="phone"
          name="phone"
          aria-describedby="phone"
          placeholder="Enter your phone number"
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
