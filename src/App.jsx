import { PortableText } from "@portabletext/react";
import sampletext from "./data/sampletext";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

const myPortableComponents = {
  block: {
    h1: ({ children }) => {
      return <h1 className="text-3xl font-bold text-violet-800">{children}</h1>;
    },
    normal: ({ children }) => {
      return <p>{children}</p>;
    },
  },
  hardBreak: () => <hr />,
  types: {
    image: ({ value, isInline }) => {
      return (
        <img
          src={value.asset._ref}
          alt={value.alt || " "}
          loading="lazy"
          className="aspect-square"
        />
      );
    },
    code: ({ value }) => {
      return <pre>{value.code}</pre>;
    },
  },
  list: ({ children }) => {
    return <ul className="mt-4 space-y-8 text-gray-600">{children}</ul>;
  },
  listItem: ({ children }) => {
    return (
      <li className="flex gap-x-3">
        <svg
          className="mt-1 h-5 w-5 flex-none text-indigo-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>{children}</span>
      </li>
    );
  },
  marks: {
    randomtype: ({ children, value }) => {
      return <i>{children}</i>;
    },
    link: ({ children, value }) => {
      return (
        <a className="text-red-600" href={value.href}>
          {children}
        </a>
      );
    },
  },
};

const myPortableComponents2 = {
  block: {
    h1: ({ children }) => {
      return <h1 className="text-3xl font-bold text-green-800">{children}</h1>;
    },
    normal: ({ children }) => {
      return <p>{children}</p>;
    },
  },
  list: ({ children }) => {
    return <ul className="mt-4 space-y-8 text-gray-600">{children}</ul>;
  },
  listItem: ({ children }) => {
    return (
      <li className="flex gap-x-3">
        <svg
          className="mt-1 h-5 w-5 flex-none text-orange-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>{children}</span>
      </li>
    );
  },
};

function App() {
  return (
    <div className="flex flex-col gap-4 flex-1 leading-8">
      <PortableText value={sampletext} components={myPortableComponents} />
    </div>
  );
}

export default App;
