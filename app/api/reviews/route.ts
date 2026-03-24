import { NextResponse } from "next/server";
import type { WithId } from "mongodb";

import { getMongoClient } from "@/lib/mongodb";

const DATABASE_NAME = process.env.MONGODB_DB || "portfolio";
const COLLECTION_NAME = "reviews";

type ReviewDocument = {
  author: string;
  role: string;
  text: string;
  avatar: string | null;
  rating: number;
  createdAt: Date;
};

const normalizeReview = (review: WithId<ReviewDocument>) => ({
  id: review._id.toString(),
  author: review.author,
  role: review.role,
  text: review.text,
  avatar: review.avatar,
  rating: review.rating,
  createdAt: review.createdAt,
});

export async function GET() {
  try {
    const client = await getMongoClient();
    const collection = client
      .db(DATABASE_NAME)
      .collection<ReviewDocument>(COLLECTION_NAME);

    const reviews = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(reviews.map(normalizeReview));
  } catch (error) {
    console.error("Failed to load reviews:", error);
    return NextResponse.json(
      { message: "Failed to load reviews." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const author = String(body.author ?? "").trim();
    const role = String(body.role ?? "").trim();
    const text = String(body.text ?? "").trim();
    const avatar =
      typeof body.avatar === "string" && body.avatar.trim()
        ? body.avatar
        : null;
    const rating = Number(body.rating);

    if (!author || !role || text.length < 20 || Number.isNaN(rating)) {
      return NextResponse.json(
        { message: "Invalid review payload." },
        { status: 400 }
      );
    }

    const review: ReviewDocument = {
      author,
      role,
      text,
      avatar,
      rating: Math.max(1, Math.min(5, Math.round(rating))),
      createdAt: new Date(),
    };

    const client = await getMongoClient();
    const collection = client
      .db(DATABASE_NAME)
      .collection<ReviewDocument>(COLLECTION_NAME);

    const result = await collection.insertOne(review);

    return NextResponse.json(
      normalizeReview({
        _id: result.insertedId,
        ...review,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create review:", error);
    return NextResponse.json(
      { message: "Failed to save review." },
      { status: 500 }
    );
  }
}
