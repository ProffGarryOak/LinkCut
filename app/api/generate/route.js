import clientPromise from "@/lib/mongodb";
import mongoose from "mongoose";


const UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shorturl: {
    type: String,
    required: true,
    unique: true,
  },
});

const Url = mongoose.models.Url || mongoose.model('Url', UrlSchema);

export async function POST(request) {
  try {
    // Ensure the database is connected
    await clientPromise;

    const body = await request.json();

    // Check if shorturl already exists
    const existingUrl = await Url.findOne({ shorturl: body.shorturl });
    if (existingUrl) {
      return new Response(JSON.stringify({ success: false, error: true, message: 'URL already exists!' }), {
        status: 409,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    
    const newUrl = new Url({
      url: body.url,
      shorturl: body.shorturl,
    });
    await newUrl.save();

    return new Response(JSON.stringify({ success: true, error: false, message: 'URL Generated Successfully' }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: true, message: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
