import Image from "next/image";
import Sidebar from "../../components/organisms/Sidebar";
import { JWTPayloadTypes, UserTypes } from "../../services/dataTypes";
import jwtDecode from "jwt-decode";
import Input from "../../components/atoms/Input";
import { useEffect, useState } from "react";
import { updateMember } from "../../services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

type EditPropfileProps = {
  user: UserTypes;
};

export default function EditProfile({ user }: EditPropfileProps) {
  const [name, setName] = useState(user.name);
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState("");

  const router = useRouter();

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const data = new FormData();

    data.append("image", image!);
    data.append("name", name);

    const response = await updateMember(user.id, data);

    if (response.error) {
      toast.error(response.message);
    } else {
      localStorage.clear();
      toast.success("Berhasil Update!");
      router.push("/signin");
    }
  };
  return (
    <>
      <Sidebar />
      <section className="edit-profile overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          width={90}
                          height={90}
                          alt="edit-avatar"
                          style={{ borderRadius: "100%" }}
                        />
                      ) : (
                        <Image
                          src={user.avatar}
                          width={90}
                          height={90}
                          alt="edit-avatar"
                          style={{ borderRadius: "100%" }}
                        />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        const files = (event.target as HTMLInputElement).files;
                        if (files && files.length > 0) {
                          setImage(files[0]);
                          setImagePreview(URL.createObjectURL(files[0]));
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    label="Fullname"
                    placeholder="Enter your name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="pt-30">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    disabled
                    value={user.email}
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

type GetServerSideProps = {
  req: {
    cookies: {
      token: string;
    };
  };
};
export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const JWTToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(JWTToken);
  const user: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG_API;
  user.avatar = `${IMG}/${user.avatar}`;

  return {
    props: {
      user,
    },
  };
}
