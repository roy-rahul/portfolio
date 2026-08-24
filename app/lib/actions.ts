"use server";

import * as z from "zod";
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import postgres from 'postgres';
// import { signIn } from "@/auth";
// import AuthError from "next-auth";
import { Resend } from "resend";
import { ToRahulRoy, ToVisitor } from "@/app/ui/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY!);

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

/* const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce.number()
  .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
}); */

/* export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
} */

export type FormState = {
  success?: boolean;
  message?: string;
} | null;

export const sendEmail = async (
  prevState: FormState,
  formData: FormData,
) : Promise<FormState> => {
  const rawData =
    formData instanceof FormData ? Object.fromEntries(formData) : formData;
  if (!rawData) {
    return {
      success: false,
      message: "No form data provided.",
    };
  }
  const parsedFormData = z
    .object({
      email: z.string().email(),
      name: z.string().max(32),
      message: z.string().max(500),
    })
    .safeParse(rawData);

  if (!parsedFormData.success) {
    return {
      success: false,
      message: "Invalid form data.",
    };
  }

  /* await delay(10000); // Simulate a delay for testing purposes
  console.log("Parsed Form Data:", parsedFormData);
  return {
      success: true,
      message: "Email sent successfully.",
    } */

  try {
    const { data, error } = await resend.emails.send({
      from: "WebApp admin <info@admin.rahulroy.dev>",
      to: "Rahul Roy <office@rahulroy.dev>",
      subject: `${parsedFormData.data.name} contacted you through rahulroy.dev webapp`,
      react: ToRahulRoy({
        name: parsedFormData.data.name,
        email: parsedFormData.data.email,
        message: parsedFormData.data.message,
      }),
    });
    if (error) {
      console.log("Error sending email:", error);
      return {
        success: false,
        message: "Error sending email.",
      };
    }

    console.log(Response.json(data));
    return {
      success: true,
      message: "Email sent successfully.",
    };
  } catch (error) {
    console.log("Error sending email:", error);
    // return Response.json({ error }, { status: 500 });
    return {
      success: false,
      message: "Error sending email.",
    };
  }
};
