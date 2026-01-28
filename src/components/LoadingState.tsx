import { Sparkles } from "lucide-react";

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 animate-fade-in">
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-primary animate-pulse-slow" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-2">
        Curating your tech terminology...
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Building a custom word set based on your learning profile
      </p>

      <div className="w-full max-w-md">
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full progress-animate" />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Understanding the jargon is 80% of the battle
        </p>
      </div>

      <div className="mt-12 w-full max-w-4xl">
        <p className="text-sm font-medium text-foreground mb-4">Your New Words</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="shimmer h-6 w-24 rounded mb-3" />
              <div className="shimmer h-4 w-full rounded mb-2" />
              <div className="shimmer h-4 w-3/4 rounded mb-4" />
              <div className="bg-secondary rounded-lg p-3">
                <div className="shimmer h-3 w-full rounded mb-1" />
                <div className="shimmer h-3 w-2/3 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingState;