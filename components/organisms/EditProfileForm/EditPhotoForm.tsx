import Image from "next/image";

export default function EditPhotoForm() {
  return (
    <div className="photo d-flex">
      <div className="position-relative me-20">
        <Image
          src="/img/avatar-1.png"
          width={90}
          height={90}
          alt="photo-profile"
          className="avatar img-fluid"
        />
        <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
          <Image
            src="/icon/edit-profile.svg"
            width={24}
            height={24}
            alt="photo"
          />
        </div>
      </div>
      <div className="image-upload">
        <label htmlFor="avatar">
          <Image
            src="/icon/edit-avatar.svg"
            width={90}
            height={90}
            alt="edit-avatar"
          />
        </label>
        <input
          id="avatar"
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </div>
    </div>
  );
}
