import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
       {/* Header with logo and title */}
       <header className="px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-[-0.01em] leading-none opacity-0 animate-fade-up [--anim-duration:400ms] [--anim-delay:100ms]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500 drop-shadow-[0_0.5px_0_rgba(0,0,0,0.2)]">
            Agentic Chat
          </span>
        </h1>
      </div>
      </header>
       <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[2.75rem] lg:text-[4rem] text-[#36322F] dark:text-white font-extrabold tracking-tight leading-[0.9] opacity-0 animate-fade-up [--anim-duration:500ms] [--anim-delay:200ms]">
            <span className="relative px-2 bg-clip-text text-transparent bg-gradient-to-tr from-orange-500 via-amber-400 to-yellow-300 inline-flex justify-center items-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
              Deep Search
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed opacity-0 animate-fade-up [--anim-duration:600ms] [--anim-delay:450ms]">
            AI-powered search powered by Firecrawl and LangGraph
          </p>
        </div>
      </div>
      <div className="flex-1">
        {/* Chat component */}
        {/* <Chat /> */}
      </div>
        <footer className="px-4 sm:px-6 lg:px-8 py-8 mt-auto">
          <div className="max-w-4xl mx-auto text-center border-t border-zinc-200/60 dark:border-zinc-800 mt-12 pt-8">
            <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 tracking-wide">
              Built with
              {' '}
              <a
                href="https://firecrawl.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-700 dark:text-zinc-200 hover:text-orange-600 dark:hover:text-orange-400 underline-offset-4 hover:underline transition-colors"
              >
                Firecrawl
              </a>
              {' and '}
              <a
                href="https://www.langchain.com/langgraph"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-700 dark:text-zinc-200 hover:text-orange-600 dark:hover:text-orange-400 underline-offset-4 hover:underline transition-colors"
              >
                LangGraph
              </a>
            </p>
          </div>
        </footer>
    </div>
  );
}

