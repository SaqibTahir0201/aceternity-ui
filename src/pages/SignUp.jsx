"use client";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-primary-content dark:bg-white">
      <h2 className="font-bold text-xl">Sign Up</h2>
      <p className="text-sm max-w-sm mt-2 ">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="text-base-content" htmlFor="firstname">
              First name
            </Label>
            <Input
              className="bg-secondary-content text-accent"
              id="firstname"
              placeholder="Saqib"
              type="text"
              // color="primary"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-base-content" htmlFor="lastname">
              Last name
            </Label>
            <Input
              className="bg-secondary-content text-accent"
              id="lastname"
              placeholder="Tahir"
              type="text"
              
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="text-base-content" htmlFor="email">
            Email Address
          </Label>
          <Input
            className="bg-secondary-content text-accent"
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-base-content" htmlFor="password">
            Password
          </Label>
          <Input
            className="bg-secondary-content text-accent"
            id="password"
            placeholder="••••••••"
            type="password"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label className="text-base-content" htmlFor="confirmpassword">
            Confirm password
          </Label>
          <Input
            className="bg-secondary-content text-accent"
            id="confirmpassword"
            placeholder="••••••••"
            type="confirmpassword"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full bg-primary text-primary-content rounded-md h-10 font-medium shadow-input  dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full bg-secondary text-secondary-content rounded-md h-10 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
