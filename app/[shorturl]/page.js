import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import Url from "@/models/url";

export default async function Page({ params }) {
  await clientPromise;

  const shorturl = params.shorturl;
  console.log('shorturl:', shorturl); 

  
    const doc = await Url.findOne({ shorturl });
    console.log('doc:', doc ? doc.url : 'No document found'); 

    if (doc) {
      console.log('Redirecting to:', doc.url); 
      return redirect(doc.url); 
    } else {
      console.log('Redirecting to home page');
      return redirect(`${process.env.NEXT_PUBLIC_HOST}`); 
    }
 
}
