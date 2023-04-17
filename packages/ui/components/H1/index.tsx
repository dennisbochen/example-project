type H1Props = {
  children: React.ReactNode;
};

export const H1 = ({ children }: H1Props) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-snug">
      {children}
    </h1>
  );
};
