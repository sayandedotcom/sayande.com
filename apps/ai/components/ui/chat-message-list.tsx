import * as React from "react";
import { ArrowDown } from "lucide-react";
import { Button, HoverButton, ScrollArea } from "@/components/ui";
import { useAutoScroll } from "@/hooks/use-auto-scroll";

interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  smooth?: boolean;
}

const ChatMessageList = React.forwardRef<HTMLDivElement, ChatMessageListProps>(
  ({ className, children, smooth = false, ...props }, _ref) => {
    const {
      scrollRef,
      isAtBottom,
      autoScrollEnabled,
      scrollToBottom,
      disableAutoScroll,
    } = useAutoScroll({
      smooth,
      content: children,
    });

    return (
      <div className="relative w-full h-full">
        <div
          className={`flex flex-col w-full h-full p-4 overflow-y-auto no-scrollbar ${className}`}
          ref={scrollRef}
          onWheel={disableAutoScroll}
          onTouchMove={disableAutoScroll}
          {...props}
        >
          <div className="flex flex-col gap-6">{children}</div>
        </div>

        {!isAtBottom && (
          //  <HoverButton className="rounded-full border border-zinc-600 h-10 w-10">
          //             <ArrowUpIcon className="mx-auto" />
          //           </HoverButton>

          <HoverButton
            onClick={() => {
              scrollToBottom();
            }}
            // size="icon"
            // variant="outline"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full shadow-md h-10 w-10"
            aria-label="Scroll to bottom"
          >
            <ArrowDown className="mx-auto" />
          </HoverButton>
        )}
      </div>
    );
  }
);

ChatMessageList.displayName = "ChatMessageList";

export { ChatMessageList };
