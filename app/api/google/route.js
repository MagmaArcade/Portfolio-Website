import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const reqBody = await request.json();
  const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  if (!reqBody.token) {
    return NextResponse.json({
      error: "Captcha token is missing!",
      success: false,
    }, { status: 400 });
  }

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify`;
    const params = new URLSearchParams();
    params.append('secret', secretKey);
    params.append('response', reqBody.token);

    const res = await axios.post(url, params);

    if (res.data.success) {
      return NextResponse.json({
        message: "Captcha verification success!!",
        success: true,
      });
    } else {
      return NextResponse.json({
        error: "Captcha verification failed!",
        success: false,
      }, { status: 400 });
    }
  } catch (error) {
    console.error("Captcha verification error:", error);
    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 500 });
  }
}
