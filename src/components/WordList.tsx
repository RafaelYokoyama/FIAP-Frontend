import { Sparkles, RotateCcw } from "lucide-react";
import WordCard from "./WordCard";
import type { Word } from "./WordCard";

interface WordListProps {
  words: Word[];
  onGenerateMore: () => void;
  isLoading: boolean;
}

const WordList = ({ words, onGenerateMore, isLoading }: WordListProps) => {
  return (
    <div className="py-8 px-4 animate-fade-in">
    
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Your Vocabulary</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {words.length} words generated • Keep learning!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onGenerateMore}
            disabled={isLoading}
            className="generate-button"
          >
            {isLoading ? (
              <>
                <RotateCcw className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate more
              </>
            )}
          </button>
        </div>
      </div>


      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        {["All", "Tech", "General", "Beginner", "Advanced"].map((filter, i) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              i === 0
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {words.map((word, index) => (
          <WordCard key={word.id} word={word} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WordList;