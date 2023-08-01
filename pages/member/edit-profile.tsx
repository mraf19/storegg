import Image from "next/image";
import Sidebar from "../../components/organisms/Sidebar";
import EditProfileForm from "../../components/organisms/EditProfileForm";
import EditPhotoForm from "../../components/organisms/EditProfileForm/EditPhotoForm";
import { JWTPayloadTypes, UserTypes } from "../../services/dataTypes";
import jwtDecode from "jwt-decode";

export default function EditProfile() {
  return (
    <>
      <Sidebar />
      <section className="edit-profile overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <EditPhotoForm />
                <EditProfileForm />
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
