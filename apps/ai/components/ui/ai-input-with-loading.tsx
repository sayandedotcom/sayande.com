"use client";

import { ArrowUpIcon, CornerRightUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { Button } from "./button";

interface AIInputWithLoadingProps {
  id?: string;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  loadingDuration?: number;
  thinkingDuration?: number;
  onSubmit?: any;
  //  (value: string) => void | Promise<void>;
  className?: string;
  autoAnimate?: boolean;
}

export function AIInputWithLoading({
  id = "ai-input-with-loading",
  placeholder = "Ask me anything!",
  minHeight = 56,
  maxHeight = 200,
  loadingDuration = 3000,
  thinkingDuration = 1000,
  onSubmit,
  className,
  autoAnimate = false,
}: AIInputWithLoadingProps) {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(autoAnimate);
  const [isAnimating, setIsAnimating] = useState(autoAnimate);

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight,
    maxHeight,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runAnimation = () => {
      if (!isAnimating) return;
      setSubmitted(true);
      timeoutId = setTimeout(() => {
        setSubmitted(false);
        timeoutId = setTimeout(runAnimation, thinkingDuration);
      }, loadingDuration);
    };

    if (isAnimating) {
      runAnimation();
    }

    return () => clearTimeout(timeoutId);
  }, [isAnimating, loadingDuration, thinkingDuration]);

  const handleSubmit = async () => {
    if (!inputValue.trim() || submitted) return;

    setSubmitted(true);
    await onSubmit?.(inputValue);
    setInputValue("");
    adjustHeight(true);

    setTimeout(() => {
      setSubmitted(false);
    }, loadingDuration);
  };

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full mx-auto flex items-start flex-col gap-2">
        <form onSubmit={onSubmit} className="relative max-w-xl w-full mx-auto">
          <Textarea
            id={id}
            placeholder={placeholder}
            className={cn(
              "max-w-xl bg-black/5 w-full rounded-3xl pl-6 pr-10 py-4",
              "placeholder:text-black/70",
              "border-none ring-white/30",
              "text-white resize-none text-wrap leading-[1.2]",
              `min-h-[${minHeight}px]`
            )}
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            disabled={submitted}
          />
          <button
            onClick={handleSubmit}
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 rounded-xl py-1 px-1",
              submitted ? "bg-none" : "bg-black/5"
            )}
            type="submit"
            disabled={submitted}
          >
            {submitted ? (
              // <div
              //   className="w-4 h-4 bg-white rounded-sm animate-spin transition duration-700"
              //   style={{ animationDuration: "3s" }}
              // />
              <button className="ai-button">
                <span className="-z-10"></span>
                <span className="-z-10"></span>
              </button>
            ) : (
              // <CornerRightUp
              //   className={cn(
              //     "w-4 h-4 transition-opacity text-white",
              //     inputValue ? "opacity-100" : "opacity-30"
              //   )}
              // />
              <Button
                className={cn(
                  "shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600",
                  className
                )}
                // disabled={isDisabled}
                // onClick={(event) => {
                //   event.preventDefault();
                //   if (!isDisabled) {
                //     onSubmit?.();
                //   }
                // }}
                // {...props}
              >
                <ArrowUpIcon />
              </Button>
            )}
          </button>
        </form>
        <p className="pl-4 h-4 text-xs mx-auto text-white/70">
          {submitted ? "AI is thinking..." : "Ready to submit!"}
        </p>
      </div>
    </div>
  );
}
