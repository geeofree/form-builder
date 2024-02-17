import { ReactNode } from "react";

export type AuthLayout = {
  children: ReactNode;
};

export function AuthLayout(props: AuthLayout) {
  const { children } = props;
  return (
    <div className="grid grid-cols-[1fr,_25%] min-h-screen">
      <section className="bg-gray-50" />
      <section className="p-2 h-full flex flex-col justify-center">
        {children}
      </section>
    </div>
  );
}
