import { useState, useCallback } from "react";
import Header from "@/components/Header";
import EmptyState from "@/components/EmptyState";
import LoadingState from "@/components/LoadingState";
import WordList from "@/components/WordList";
import type { Word } from "@/components/WordCard";
import { fetchVocabulary } from "@/services/vocabularyApi";
import { useToast } from "@/hooks/use-toast";

type AppState = "empty" | "loading" | "loaded";

const Index = () => {
  const [state, setState] = useState<AppState>("empty");
  const [words, setWords] = useState<Word[]>([]);
  const { toast } = useToast();

  const handleGenerate = useCallback(async () => {
    setState("loading");
    
    try {
      const newWords = await fetchVocabulary();
      setWords(newWords);
      setState("loaded");
      toast({
        title: "Words generated!",
        description: `${newWords.length} new words added to your vocabulary.`,
      });
    } catch (error) {
      console.error("Error fetching vocabulary:", error);
      setState(words.length > 0 ? "loaded" : "empty");
      toast({
        title: "Error",
        description: "Failed to generate words. Please try again.",
        variant: "destructive",
      });
    }
  }, [toast, words.length]);

  const handleGenerateMore = useCallback(async () => {
    setState("loading");
    
    try {
      const newWords = await fetchVocabulary();
      setWords((prev) => [...newWords, ...prev]);
      setState("loaded");
      toast({
        title: "More words added!",
        description: `${newWords.length} new words added to your vocabulary.`,
      });
    } catch (error) {
      console.error("Error fetching vocabulary:", error);
      setState("loaded");
      toast({
        title: "Error",
        description: "Failed to generate more words. Please try again.",
        variant: "destructive",
      });
    }
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto max-w-7xl">
        {state === "empty" && (
          <EmptyState onGenerate={handleGenerate} isLoading={false} />
        )}
        
        {state === "loading" && words.length === 0 && <LoadingState />}
        
        {state === "loaded" && (
          <WordList
            words={words}
            onGenerateMore={handleGenerateMore}
            isLoading={false}
          />
        )}
        
        {state === "loading" && words.length > 0 && (
          <WordList
            words={words}
            onGenerateMore={handleGenerateMore}
            isLoading={true}
          />
        )}
      </main>
    </div>
  );
};

export default Index;