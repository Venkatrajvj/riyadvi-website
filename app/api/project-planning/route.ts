import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, company, email, phone } = body;

    if (!name?.trim() || !company?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 },
      );
    }

    const lead = await (prisma as any).projectPlanningLead.create({
      data: {
        name: name.trim(),
        company: company.trim(),
        email: email.trim(),
        phone: phone.trim(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Planning guide request submitted successfully.",
        id: lead.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Project Planning API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while saving your request.",
      },
      { status: 500 },
    );
  }
}
