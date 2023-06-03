import {NextResponse, userAgent} from 'next/server';
import { NextRequest } from 'next/server';
import Picture from "@/utils/picture";
import {PictureParams, PictureQuery} from "@/types/picture";

const DefaultPictureParams: PictureParams = {
  width: 0,
  height: 0,
}

export async function GET(request: NextRequest, {params}: {params: PictureParams}) {
  params = {...DefaultPictureParams, ...params}
  const query = { ...Object.fromEntries(request.nextUrl.searchParams.entries())} as PictureQuery
  let buf = await new Picture(params.width, params.height, query.slug).buffer()
  const response = new NextResponse(buf)
  response.headers.set('Content-Type','image/png')
  return response;
}
