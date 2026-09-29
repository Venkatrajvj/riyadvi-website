import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, service, project } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        { status: 400 },
      );
    }

    const submission = await (prisma as any).contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        company: company?.trim() || null,
        service: service?.trim() || null,
        project: project?.trim() || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully.",
        id: submission.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting the form.",
      },
      { status: 500 },
    );
  }
}
