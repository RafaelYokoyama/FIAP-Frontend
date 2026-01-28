export interface ApiWord {
  word: string;
  description: string;
  useCase: string;
}

export interface Word {
  id: string;
  term: string;
  description: string;
  example: string;
  category?: string;
}

const API_URL = "https://fiap-bff-9aojr.onrender.com/ask";

export const fetchVocabulary = async (): Promise<Word[]> => {
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    throw new Error("Failed to fetch vocabulary");
  }
  
  const data: ApiWord[] = await response.json();
  

  return data.map((item, index) => ({
    id: `${Date.now()}-${index}`,
    term: item.word,
    description: item.description,
    example: item.useCase,
    category: "general",
  }));
};