type PProps = {
  children: React.ReactNode;
};

export const P = ({ children }: PProps) => {
  return <p className="mt-6 text-lg leading-8 text-gray-300">{children}</p>;
};
