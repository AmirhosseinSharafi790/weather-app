import { NextResponse } from "next/server";
import { searchCity, getWeather } from "@/services/Weather.services";



export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json(
      { error: "City is required" },
      { status: 400 }
    );
  }

  try {
    // 1️⃣ جستجوی شهر
    const cities = await searchCity(city);
    if (!cities.length) {
      return NextResponse.json(
        { error: "City not found" },
        { status: 404 }
      );
    }

    const { latitude, longitude } = cities[0];

    // 2️⃣ گرفتن هوا
    const weather = await getWeather(latitude, longitude);

    return NextResponse.json({
      city: cities[0],
      weather,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
