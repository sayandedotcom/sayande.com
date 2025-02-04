"use client";

import * as React from "react";
import {
  Check,
  Plus,
  Send,
  Bot,
  Paperclip,
  Mic,
  CornerDownLeft,
  ArrowUpIcon,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatInput,
  ChatMessageList,
  FlickeringGrid,
  HoverButton,
  Input,
  ScrollArea,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import Image from "next/image";
import { AIInputWithLoading } from "@/components/ui/ai-input-with-loading";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { ChatBox } from "@/components/ui/chatbox";

export default function Page() {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      content: "Hey ! My name is Sayan De. Want to know more about me ?",
      sender: "ai",
    },
    // {
    //   id: 2,
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eossapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ",
    //   sender: "user",
    // },
    // {
    //   id: 3,
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eossapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ",
    //   sender: "ai",
    // },
    // {
    //   id: 3,
    //   content: "Sure! I'd be happy to help. What would you like to know?",
    //   sender: "ai",
    // },
  ]);

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    vanishAndSubmit();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: "This is an AI response to your message.",
          sender: "ai",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 200,
  });

  const [input, setInput] = React.useState("");

  const [currentPlaceholder, setCurrentPlaceholder] = React.useState(0);

  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation(); // Restart the interval when the tab becomes visible
    }
  };

  React.useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const newDataRef = React.useRef<any[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [animating, setAnimating] = React.useState(false);

  const draw = React.useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(input, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [input]);

  React.useEffect(() => {
    draw();
  }, [input, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setInput("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      e.preventDefault();
      vanishAndSubmit();
      handleSubmit(e);
    }
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        // color="#6B7280"
        color="#9aa2a6"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <Card className="absolute w-full bg-[#16181c] h-full max-w-[700px] max-h-[800px] flex flex-col">
        <CardHeader className="flex flex-row bg-background items-center p-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute flex size-2 right-0 bottom-0 z-10">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
              </span>
              <Avatar>
                <AvatarImage
                  src="/pic.jpeg"
                  className="object-cover"
                  alt="Image"
                />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Sayan De</p>
              <p className="text-sm text-muted-foreground">
                sayandeten@gmail.com
              </p>
            </div>
          </div>
          {/* <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="ml-auto rounded-full"
                  // onClick={() => setOpen(true)}
                >
                  <Plus />
                  <span className="sr-only">New message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>New message</TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
        </CardHeader>
        <CardContent className="min-h-[400px] h-full border rounded-lg flex flex-col mt-auto">
          <div className="flex-1 overflow-hidden">
            <ChatMessageList>
              <div className="flex flex-col justify-center items-center space-y-4">
                <Avatar className="h-28 w-28">
                  <AvatarImage
                    src="/pic.jpeg"
                    className="object-cover"
                    alt="Image"
                  />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                {/* <p className="text-sm font-medium">Hey ! my name is Sayan De</p>
                <p className="text-sm text-muted-foreground">
                  Want to know more about me ?
                </p> */}
                <a
                  className="text-xs text-white/80"
                  href="https://www.sayande.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Build by <span className="text-[#13EEE3]">sayande.com</span>
                </a>
              </div>
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  variant={message.sender === "user" ? "sent" : "received"}
                >
                  <ChatBubbleAvatar
                    className={cn(
                      "h-8 w-8 shrink-0r",
                      message.sender === "user" && "hidden"
                    )}
                    src={message.sender === "user" ? "" : "/pic.jpeg"}
                    fallback={message.sender === "user" ? "US" : "AI"}
                  />
                  <>
                    <ChatBox
                      variant={message.sender === "user" ? "sent" : "received"}
                      className={cn(
                        message.sender === "user" ? "ml-10" : "mr-10"
                      )}
                    >
                      {message.content}
                    </ChatBox>
                    {/* <ChatBubbleMessage
                      variant={message.sender === "user" ? "sent" : "received"}
                    >
                      {message.content}
                    </ChatBubbleMessage> */}
                  </>
                </ChatBubble>
              ))}
              {isLoading && (
                <ChatBubble variant="received">
                  <ChatBubbleAvatar
                    className="h-8 w-8 shrink-0"
                    src="/pic.jpeg"
                    fallback="AI"
                  />
                  <ChatBox isLoading />
                </ChatBubble>
              )}
            </ChatMessageList>
          </div>
          <div className={cn("w-full")}>
            <div className="relative max-w-xl w-full mx-auto flex items-start flex-col gap-2">
              <form
                className={cn(
                  "w-full relative max-w-xl mx-auto bg-[#303030] h-[50px] rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
                  input && ""
                )}
                onSubmit={handleSubmit}
              >
                <canvas
                  className={cn(
                    "absolute pointer-events-none  text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
                    !animating ? "opacity-0" : "opacity-100"
                  )}
                  ref={canvasRef}
                />

                <input
                  onChange={(e) => {
                    if (!animating) {
                      setInput(e.target.value);
                    }
                  }}
                  onKeyDown={handleKeyDown}
                  ref={inputRef}
                  value={input}
                  type="text"
                  className={cn(
                    "w-full relative text-sm sm:text-base z-50 border-none text-foreground bg-transparent h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20",
                    animating && "text-transparent"
                  )}
                />

                <button
                  onClick={handleSubmit}
                  disabled={!input || isLoading}
                  type="submit"
                  className={cn(
                    "absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full flex items-center justify-center",
                    isLoading ? "bg-none" : "bg-black/5"
                  )}
                >
                  {isLoading ? (
                    <button className="ai-button h-10 w-10">
                      <div
                        className="w-4 h-4 bg-white rounded-sm animate-spin transition duration-700 mx-auto"
                        style={{ animationDuration: "3s" }}
                      />
                      <span className="-z-10"></span>
                      <span className="-z-10"></span>
                    </button>
                  ) : (
                    <HoverButton className="rounded-full border border-zinc-600 h-10 w-10">
                      <ArrowUpIcon className="mx-auto" />
                    </HoverButton>
                  )}
                </button>

                <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
                  <AnimatePresence mode="wait">
                    {!input && (
                      <motion.p
                        initial={{
                          y: 5,
                          opacity: 0,
                        }}
                        key={`current-placeholder-${currentPlaceholder}`}
                        animate={{
                          y: 0,
                          opacity: 1,
                        }}
                        exit={{
                          y: -15,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "linear",
                        }}
                        className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
                      >
                        {placeholders[currentPlaceholder]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
              <p className="pl-4 h-4 text-xs mx-auto text-white/70">
                {isLoading ? "AI is thinking..." : "Ready to submit!"}
              </p>
            </div>
          </div>
          {/* <PlaceholdersAndVanishInput onSubmit={handleSubmit} /> */}
        </CardContent>
        <CardFooter className="flex items-center bg-background justify-center p-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with
            <span className="inline-flex items-center">
              <div className="text-red-500 animate-heartbeat text-sm">❤️</div>
            </span>
            using Next.js, TailwindCSS, FastAPI, Langchain, OpenAI, Pinecone,
            GCP
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
