import { NextResponse } from "next/server";

type FieldError = {
  field: string;
  issue: string;
};

export function ok<T>(data: T, init?: ResponseInit) {
  return NextResponse.json(data, init);
}

export function badRequest(message: string, fieldErrors: FieldError[] = []) {
  return NextResponse.json(
    {
      code: "BAD_REQUEST",
      message,
      fieldErrors,
    },
    { status: 400 },
  );
}

export function duplicate(message: string) {
  return NextResponse.json(
    {
      status: "duplicate_flagged",
      message,
    },
    { status: 409 },
  );
}

export function internalError(message = "Unexpected server error") {
  return NextResponse.json(
    {
      code: "INTERNAL_ERROR",
      message,
    },
    { status: 500 },
  );
}
