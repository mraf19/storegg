import Image from "next/image";
import Sidebar from "../../components/organisms/Sidebar";
import EditProfileForm from "../../components/organisms/EditProfileForm";
import EditPhotoForm from "../../components/organisms/EditProfileForm/EditPhotoForm";

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
