import { type PrismaClient } from "@prisma/client";
import { type NextRequest, type NextResponse } from "next/server";
import { type EventEmitter } from "events";


export type Context = {
  prisma: PrismaClient;
  session: {
    user: {
      id: string;
    };
  };
  ee: EventEmitter;
  req: NextRequest;
  res: NextResponse;
};