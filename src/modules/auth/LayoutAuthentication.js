import React from "react";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/common/ErrorComponent";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="w-full min-h-screen bg-lite dark:bg-darkbg p-10 relative isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="hidden lg:block pointer-events-none absolute bottom-0 left-0 z-[-1]"
      />
      <Link className="inline-block lg:mb-16 mb-5" to="/">
        <img srcSet="logo.png 2x" alt="crowfunding-app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-7 lg:px-16 lg:py-12 mx-auto">
        <h1 className="font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 text-center dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
