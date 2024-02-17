import { Button, Heading, Input, Link, Paragraph } from "@/components";
import { AuthLayout } from "@/layouts/auth";

export default function SignUp() {
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
          <Heading>Sign Up</Heading>
          <Paragraph className="text-gray-600">
            Already have an account? <Link href="/auth/sign-in">Sign In</Link>{" "}
            instead.
          </Paragraph>
        </header>

        <section className="flex flex-col gap-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </section>

        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </form>
    </AuthLayout>
  );
}
