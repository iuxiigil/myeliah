import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function SearchBlog() {
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm();
  const onSearchSubmit = (data) => {
    router.push({
      pathname: process.env.PUBLIC_URL + "/blog",
      query: { search: data.search },
    });
  };
  return (
    <div className="blog-sidebar__section -search">
      <form onSubmit={handleSubmit(onSearchSubmit)}>
        <input
          type="text"
          placeholder="Enter keyword"
          name="search"
          ref={register}
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="input-validator">
        {errors.search && (
          <span className="input-error">Please provide a keyword</span>
        )}
      </div>
    </div>
  );
}
