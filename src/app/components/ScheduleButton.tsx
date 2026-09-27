"use client";
import Button from "./Button";
import { openContactModal } from "./utils";

export default function ScheduleButton({ children = "Schedule appointment" }: { children?: React.ReactNode }) {
  return <Button onClick={openContactModal}>{children}</Button>;
}
