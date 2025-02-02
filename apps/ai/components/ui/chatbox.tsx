"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { MessageLoading } from "./message-loading";

// interface ChatBoxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

interface ChatBoxProps {
  variant?: "sent" | "received";
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ChatBox = ({
  variant = "received",
  isLoading,
  className,
  children,
  ...props
}: ChatBoxProps) => {
  return (
    <>
      <div
        className={cn(
          "relative isolate rounded-lg p-2",
          "text-foreground font-medium text-sm leading-6",
          "backdrop-blur-lg bg-[rgba(43,55,80,0.1)]",
          "cursor-pointer overflow-hidden",
          "before:content-[''] before:absolute before:inset-0",
          "before:rounded-[inherit] before:pointer-events-none",
          "before:z-[1]",
          "before:shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_16px_0_rgba(170,202,255,0.1),inset_0_-3px_12px_0_rgba(170,202,255,0.15),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.45)]",
          "before:mix-blend-multiply before:transition-transform before:duration-300",
          "active:before:scale-[0.975]",
          variant === "sent" &&
            "backdrop-blur-lg bg-[rgba(255,255,255,0.15)] before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2),inset_0_0_16px_0_rgba(255,255,255,0.1),inset_0_-3px_12px_0_rgba(255,255,255,0.4),0_1px_3px_0_rgba(200,200,200,0.5),0_4px_12px_0_rgba(200,200,200,0.4)]",
          className
        )}
        {...props}
        // style={{
        //   "--circle-start": "var(--tw-gradient-from, #a0d9f8)",
        //   "--circle-end": "var(--tw-gradient-to, #3a5bbf)",
        // }}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <MessageLoading />
          </div>
        ) : (
          children
        )}
      </div>
    </>
  );
};

ChatBox.displayName = "ChatBox";

export { ChatBox };
