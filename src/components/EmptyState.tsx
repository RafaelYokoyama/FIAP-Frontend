import { Sparkles, BookOpen, Lightbulb } from "lucide-react";

interface EmptyStateProps {
  onGenerate: () => void;
  isLoading: boolean;
}

const EmptyState = ({ onGenerate, isLoading }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 animate-fade-in">
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center animate-float">
          <BookOpen className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <Lightbulb className="w-4 h-4 text-primary" />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
        Ready to expand your vocabulary?
      </h2>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Your tech-focused language companion is here to help you master
        professional English. Generate AI-powered vocabulary tailored to your
        learning goals.
      </p>

      <button
        onClick={onGenerate}
        disabled={isLoading}
        className="generate-button"
      >
        <Sparkles className="w-5 h-5" />
        {isLoading ? "Generating..." : "Generate new words"}
      </button>


      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
        {[
          { icon: BookOpen, text: "Tech vocabulary" },
          { icon: Lightbulb, text: "Real examples" },
          { icon: Sparkles, text: "AI-powered" },
        ].map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Icon className="w-4 h-4 text-primary" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;