import { Link, useRouteError } from "react-router-dom";
import { Button } from "flowbite-react";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className=" w-full min-h-screen max-h-screen flex flex-col justify-center items-center">
      <article className="format format-code:text-lg text-center h-full">
        <h1 className="mb-0">Oops!</h1>
        <p className="mb-0">Sorry, an unexpected error has occurred.</p>
        <p>
          <code className="lead">{error.statusText || error.message}</code>
        </p>
      </article>
      <Link to="/" className="mt-8">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
