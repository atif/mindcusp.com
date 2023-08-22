import * as FormData from "form-data";
import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const mailgun = new Mailgun(FormData);

  const mg = mailgun.client({
    username: process.env.NEXT_MAILGUN_USERNAME || "",
    key: process.env.NEXT_MAILGUN_API_KEY || "",
  });

  const { values } = await request.json();
  const { name, email, subject, message } = values;

  const response = await mg.messages.create(
    process.env.NEXT_MAILGUN_DOMAIN || "",
    {
      from: email,
      to: [process.env.NEXT_EMAIL_RECEIVER || "info@mindcusp.com"],
      subject: `${name} - ${subject}`,
      text: message,
    }
  );

  return NextResponse.json(response);
}
