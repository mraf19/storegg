import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

import { useCallback, useEffect, useState } from "react";
import { getCategory } from "../services/player";
import { CategoryTypes } from "../services/dataTypes";
import { setSignUp } from "../services/auth";

import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function SignUpPhoto() {
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState("");

  const router = useRouter();

  const [userForm, setUserForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [categories, setCategories] = useState<CategoryTypes[]>([]);

  const getCategoryAPI = useCallback(async () => {
    const data = await getCategory();
    setCategories(data);
    setFavorite(data[0]._id);
  }, []);

  const getUserForm = useCallback(() => {
    const data = localStorage.getItem("user-form");
    const form = JSON.parse(data!);
    setUserForm(form);
  }, []);

  const onSubmit = async () => {
    const data = new FormData();

    data.append("image", image);
    data.append("email", userForm.email);
    data.append("name", userForm.fullName);
    data.append("username", userForm.fullName);
    data.append("password", userForm.password);
    data.append("favorite", favorite);
    data.append("status", "Y");
    data.append("role", "user");
    data.append("phoneNumber", "08123456789");

    const result = await setSignUp(data);

    if (result.error === 1) {
      toast.error(result.message);
    } else {
      toast.success("Berhasil Register!");
      localStorage.removeItem("user-form");
      setTimeout(() => {
        router.push("signup-success");
      }, 1000);
    }
  };

  useEffect(() => {
    getCategoryAPI();
    getUserForm();
  }, []);
  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="imgPreview"
                          className="image-preview"
                        />
                      ) : (
                        <Image
                          src="/icon/upload-photo.svg"
                          width={120}
                          height={120}
                          alt="upload photo"
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
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {userForm.fullName}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {userForm.email}
                </p>
                <div className="pt-50 pb-50">
                  <label
                    htmlFor="category"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Favorite Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                  >
                    {categories.map((category: CategoryTypes) => (
                      <option value={category._id} key={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <Link
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  href="#"
                  role="button"
                  onClick={onSubmit}
                >
                  Create My Account
                </Link>
                <Link
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  href=""
                  role="button"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer position="top-center" />
      </section>
    </>
  );
}
