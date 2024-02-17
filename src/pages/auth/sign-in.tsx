import { Button, Heading, Input, Link, Paragraph } from "@/components";
import { AuthLayout } from "@/layouts/auth";

export default function SignIn() {
  return (
    <AuthLayout>
      <form
        className="p-4 flex flex-col gap-4"
        onSubmit={(evt) => {
          evt.preventDefault();
          const formData = new FormData(evt.currentTarget);
          console.log(formData.entries());
        }}
      >
        <header className="flex flex-col">
          <Heading>Sign In</Heading>
          <Paragraph className="text-gray-600">
            Don't have an account yet? <Link href="/auth/sign-up">Sign Up</Link>
            !
          </Paragraph>
        </header>

        <section className="flex flex-col gap-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </section>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </form>
    </AuthLayout>
  );
}
