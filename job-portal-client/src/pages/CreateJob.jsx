import { useForm } from "react-hook-form";
const CreateJob = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 pax-4">
      {/* form */}
      <div className="bg-[#fafafa] py-10 px-4 lg:px-16"></div>
    </div>
  );
};

export default CreateJob;
