export const CustomTextInput = ({ name, placeholder }: { name: string; placeholder: string }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="bg-white border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></input>
    </>
  );
};
