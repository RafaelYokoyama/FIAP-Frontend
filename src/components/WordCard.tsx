import { BookOpen, Volume2 } from "lucide-react";

export interface Word {
  id: string;
  term: string;
  description: string;
  example: string;
  category?: string;
}

interface WordCardProps {
  word: Word;
  index: number;
}

const categoryColors: Record<string, string> = {
  tech: "bg-primary/10 text-primary",
  general: "bg-accent/10 text-accent",
  advanced: "bg-purple-100 text-purple-600",
  default: "bg-secondary text-secondary-foreground",
};

const WordCard = ({ word, index }: WordCardProps) => {
  const categoryClass = categoryColors[word.category || "default"] || categoryColors.default;

  return (
    <div
      className="word-card animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {word.category && (
            <span className={`text-xs font-medium px-2 py-1 rounded-md ${categoryClass}`}>
              {word.category.toUpperCase()}
            </span>
          )}
        </div>
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <h3 className="text-xl font-bold text-word-highlight mb-2">{word.term}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {word.description}
      </p>

      <div className="example-box">
        <div className="flex items-start gap-2">
          <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground italic">"{word.example}"</p>
        </div>
      </div>
    </div>
  );
};

export default WordCard;