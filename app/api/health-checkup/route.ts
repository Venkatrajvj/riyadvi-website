import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      businessName,
      industry,
      digitalPresence,
      primaryGoal,
      biggestChallenge,
      serviceNeed,
      currentTechnology,
      additionalRequirements,
      name,
      email,
      phone,
    } = body;

    if (
      !businessName ||
      !industry ||
      !digitalPresence ||
      !primaryGoal ||
      !biggestChallenge ||
      !serviceNeed ||
      !currentTechnology ||
      !name ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 },
      );
    }

    const submission = await prisma.businessHealthCheckup.create({
      data: {
        businessName,
        industry,
        digitalPresence,
        primaryGoal,
        biggestChallenge,
        serviceNeed,
        currentTechnology,
        additionalRequirements: additionalRequirements || null,
        name,
        email,
        phone,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Health checkup submitted successfully.",
        id: submission.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Health Checkup API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while saving your submission.",
      },
      { status: 500 },
    );
  }
}
