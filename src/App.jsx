import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div className="App" onSubmit={handleSubmit(onSubmit)}>
      <form action="">
        {errors.email && <div>{errors.email.message}</div>}
        <input
          type="text"
          placeholder="password"
          {...register("email", {
            required: "This field is required",
            // pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            validate: (value) => {
              if (!value.includes("@")) {
                return "Please include @";
              }
              return true;
            },
          })}
        />
        {errors.email && <div>{errors.password.message}</div>}

        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "minimum lengeth is 8",
            },
          })}
        />
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "loading" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
