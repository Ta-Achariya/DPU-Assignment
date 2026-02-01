import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const response = await fetch(`${API_BASE_URL}/products/${id}`);

    if (response.status === 404) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 });
    }

    if (!response.ok) {
      throw new Error("API error");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error: ", error);
    return NextResponse.json(
      { error: "Failed to fetch prodcut" },
      { status: 500 },
    );
  }
}
