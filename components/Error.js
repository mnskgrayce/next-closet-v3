export default function Error({ message }) {
  return (
    <div className="mx-auto my-8 px-4">
      <p className="hover:underline text-center text-sm md:text-base lg:text-lg xl:text-xl">
        {message}
      </p>
    </div>
  );
}
